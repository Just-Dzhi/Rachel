import { cleanMessageMention } from '../utils/utils';
import { client, clientMention } from '../client';
import { ollama } from '../ollama';
import type { Message } from 'discord.js';

let conversations: { [key: string]: any[] } = {};

client.on('messageCreate', async (message: Message) => {
    if (message.author.id === client.user?.id) return;

    if (clientMention(message, client)) {
        const userId = message.author.id;

        if (!conversations[userId]) {
            conversations[userId] = [];
        };

        const userMessage: any = {
            'role': 'user',
            'content': cleanMessageMention(message.content)
        };

        conversations[userId].push(userMessage);

        try {
            const assistantMessage = await ollama(conversations[userId]);
            conversations[userId].push(assistantMessage);
            message.reply(assistantMessage);
        } catch (error) {
            console.error(error);
            message.reply(`I'm sleeping and well answer later~`);
        };
    };
});
