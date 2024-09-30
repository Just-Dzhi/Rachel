const tools = [
    {
        type: 'function',
        function: {
            name: 'say_meow',
            description: 'say "meow" when user required this',
            parameters: {
                type: 'object',
                properties: {},
                required: []
            },
        }
    }
];

export { tools };