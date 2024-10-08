import { EmbedBuilder } from 'discord.js';
import { client } from '../client';

function cleanMessageMention(message: string): string {
    return message.replace(/<@!?(\d+)>|<@&(\d+)>/g, '').trim();
}

function embed(
    title: string = 'title',
    description: string = 'description',
    ephemeral: boolean = false,
    fields: any[] = [],
    thumbnail: any = client.user?.avatarURL()
) {
    const embed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setColor(0xfa628b)
        .setThumbnail(thumbnail)
        .addFields(fields);

    return { embeds: [embed], ephemeral: ephemeral };
}

export { cleanMessageMention, embed };
