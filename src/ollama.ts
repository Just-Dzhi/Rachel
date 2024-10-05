import { tools } from './utils/tools';

async function ollama(messages: any[]): Promise<string> {
    let response: string = `I'm sleeping and well answer later~`;

    try {
        const request = await fetch('http://localhost:11434/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'rachel',
                messages: messages,
                stream: false,
                tools: tools,
            }),
        });

        const RequestData = await request.json();

        if (RequestData.message.tool_calls) {
            const availableFunctions: any = {
                send_mvrly_channel: sendMVRLYChannel,
            };

            for (const tool of RequestData.message.tool_calls) {
                const functionToCall = availableFunctions[tool.function.name];
                const functionResponse = await functionToCall(
                    tool.function.arguments
                );
                messages.push({
                    role: 'tool',
                    content: functionResponse,
                });
            }

            const finalRequest = await fetch(
                'http://localhost:11434/api/chat',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        model: 'rachel',
                        messages: messages,
                        stream: false,
                    }),
                }
            );

            const finalRequestData = await finalRequest.json();
            response = finalRequestData.message;
        } else {
            response = RequestData.message;
        }
    } catch (error) {
        console.error(error);
    }

    return response;
}

function sendMVRLYChannel() {
    return 'MVRLY youtube channel with him music: https://www.youtube.com/@mvrlysound';
}

export { ollama };
