async function ollama(messages: any[]): Promise<string> {
    let response: string = `I'm sleeping and well answer later~`;

    try {
        const request = await fetch('http://localhost:11434/api/chat', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'model': 'rachel',
                'messages': messages,
                'stream': false,
            })
        });

        const RequestData = await request.json();
        response = RequestData.message;
    } catch (error) {
        console.error(error);
    };

    return response;
};

export { ollama };