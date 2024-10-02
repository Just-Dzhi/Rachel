import { CommandInteraction } from 'discord.js';
import { embed } from '../utils/utils';

async function commandHelp(interaction: CommandInteraction) {
    try {
        const description: string = ``
        + `Hello! My name is Rachel ^^ \n`
        + `You can talk with me by simply pinging me~ \n`
        + `Just try it xD`;

        const fields = [
            { name: 'Authors:', value: '**MVRLY** \n **G** \n **and u**', inline: true },
            { name: 'Links', value: '[Youtube](https://www.youtube.com/@mvrlysound) \n [Github](https://github.com/Just-Dzhi/Rachel) \n [Click Me](https://youtu.be/POzXT6AJLf0)', inline: true },
            { name: 'Made with :heart:', value: 'Bun \n Discord.js \n Ollama', inline: true }
        ];

        await interaction.reply(embed('About Me:', description, true, fields));
    } catch (error) {
        await interaction.reply({
            content: `I'm sleeping and will answer later~`,
            ephemeral: true 
        });

        console.log(error);
    };
};

export { commandHelp };