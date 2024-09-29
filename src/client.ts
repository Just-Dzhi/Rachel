import { Client, IntentsBitField } from 'discord.js';
import type { Message } from 'discord.js';

const clientName: string[] = ['rachel', 'рейч'];

const client: Client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

function clientMention(message: Message, client: Client): boolean {
    const isBot: boolean = message.author.bot;
    const isEveryone: boolean = message.mentions.everyone;
    const hasMention: boolean = message.mentions.has(client.user!.id);
    const hasName: boolean = clientName.some(name => message.content.toLowerCase().includes(name));

    return !isBot && !isEveryone && (hasMention || hasName);
};

export { client, clientMention };