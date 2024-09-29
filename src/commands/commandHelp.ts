import { CommandInteraction } from 'discord.js';
import { embed } from '../utils/utils';

async function commandHelp(interaction: CommandInteraction) {
    try {
        const description: string = ``
        + `Hello! My name is Rachel, you can talk to me by simply pinging me or replying to one of my messages.`

        await interaction.reply(embed('Hi! My name is Rachel~', description, true));
    } catch (error) {
        await interaction.reply({
            content: `I'm sleeping and will answer later~`,
            ephemeral: true 
        });

        console.log(error);
    };
};

export { commandHelp };