import { client } from './client';
import './handlers/messageHandler';
import './handlers/commandHandler';
import './utils/welcomeMessage';

client.login(Bun.env.DISCORD_CLIENT_TOKEN);