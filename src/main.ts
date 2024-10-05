import { client } from './client';
import './handlers/commandHandler';
import './handlers/messageHandler';
import './utils/welcomeMessage';

client.login(Bun.env.DISCORD_CLIENT_TOKEN);
