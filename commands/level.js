const Levels = require('discord-xp')

class Level {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }

    Level() {
        if (!message.guild) return;
        if (message.author.bot) return;
    
        const randomXp = Math.floor(Math.random() * 9) + 1; 
        const hasLeveledUp = Levels.appendXp(message.author.id, message.guild.id, randomXp);
        if (hasLeveledUp) {
            const user = Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`You leveled up to ${user.level}! Keep it going!`);
        }
    }
}

module.exports ={
    Level
}