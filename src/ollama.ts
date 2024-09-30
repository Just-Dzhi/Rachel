import { tools } from './utils/tools';
import { AttachmentBuilder, TextChannel } from 'discord.js';

async function ollama(messages: any[], message: any): Promise<string> {
    let response: string = `I'm sleeping and well answer later~`;

    try {
        const request = await fetch('http://localhost:11434/api/chat', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'model': 'rachel',
                'messages': messages,
                'stream': false,
                'tools': tools
            })
        });

        const RequestData = await request.json();
        
        if (RequestData.message.tool_calls) {
            const availableFunctions: any = {
                generate_image: generateImage,
            };

            for (const tool of RequestData.message.tool_calls) {
                const functionToCall = availableFunctions[tool.function.name];
                const functionResponse = await functionToCall(tool.function.arguments, message);
                messages.push({
                    role: 'tool',
                    content: functionResponse,
                });
            };

            const finalRequest = await fetch('http://localhost:11434/api/chat', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'model': 'rachel',
                    'messages': messages,
                    'stream': false,
                })
            });

            const finalRequestData = await finalRequest.json();
            response = finalRequestData.message;
        } else {
            response = RequestData.message;
        };
    } catch (error) {
        console.error(error);
    };

    return response;
};

async function generateImage(args: { prompt: string; negativePrompt: string }, message: any) {
    const { prompt, negativePrompt } = args;
    let response: string = 'meow';
    console.log(prompt)
    console.log(negativePrompt)

        const request = await fetch('http://localhost:5000/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt,
                negative_prompt: negativePrompt,
                width: 512,
                height: 512,
                guidance_scale: 7,
                num_inference_steps: 24
            }),
        });

        if (request.ok) {
            const buffer = await request.arrayBuffer();
            const imageAttachment = new AttachmentBuilder(Buffer.from(buffer), {
                name: 'generated_image.png',
            });

            message.reply({ files: [imageAttachment] });

            response = 'Im done! Here your image:';
        };

    return response;
};

export { ollama };