import { client } from '../client';
import { commandHelp } from '../commands/commandHelp';

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    switch (interaction.commandName) {
        case 'help':
            await commandHelp(interaction);
            break;
        case 'meow':
            await commandHelp(interaction);
            break;
        default:
            await interaction.reply({
                content: `I'm sleeping and will answer later~`,
                ephemeral: true,
            });
            break;
    }
});
