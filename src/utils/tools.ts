const tools = [
    {
        type: 'function',
        function: {
            name: 'generate_image',
            description: 'Generate image for user based on prompt',
            parameters: {
                type: 'object',
                properties: {
                    prompt: {
                        'type': 'string',
                        'description': 'prompt for the model so that it better understands what image to generate'
                    },
                    negativePrompt: {
                        'type': 'string',
                        'description': 'prompt for the model so it better understands what it doesnt need to generate'
                    }
                },
                required: ['prompt', 'negativePrompt']
            },
        }
    }
];

export { tools };