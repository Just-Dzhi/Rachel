import { client, clientMention } from '../client';
import type { Message } from 'discord.js';

client.on('messageCreate', async (message: Message) => {
    if (message.author.id === client.user?.id) return;

    if (clientMention(message, client)) {
        message.reply('meow~');
    };
});
