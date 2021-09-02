const Levels = require('discord-xp')

class Level {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    Level() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "rank" || PREFIX + "leaderboard" || PREFIX + "lb":
                    this.Rank(); 
                    break; 
            }
        }
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

        this.message.delete().then().catch(console.error)
        if(this.args[0] === PREFIX + "rank") {

            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`You are currently level **${user.level}**!`)
        }

        this.message.delete().then().catch(console.error)
        if(this.args[0] === PREFIX + "leaderboard" || PREFIX + "lb") {
            const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
            if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
    
            const leaderboard = Levels.computeLeaderboard(bot, rawLeaderboard); 
    
            const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);
    
            message.channel.send(`${lb.join("\n\n")}`)
        }
    }
}

module.exports ={
    Level
}