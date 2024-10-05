import { REST, Routes } from 'discord.js';

const rest: REST = new REST({ version: '10' }).setToken(
    Bun.env.DISCORD_CLIENT_TOKEN as string
);

async function refreshCommands() {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(
                Bun.env.DISCORD_CLIENT_ID as string,
                Bun.env.DISCORD_GUILD_ID as string
            ),
            { body: await Bun.file('./src/commands.json').json() }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.log(`Error in refreshing application (/) commands: ${error}`);
    }
}

refreshCommands();
