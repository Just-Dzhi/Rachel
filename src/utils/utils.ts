function cleanMessageMention(message: string): string {
    return message.replace(/<@!?(\d+)>|<@&(\d+)>/g, '').trim();
};

export { cleanMessageMention };