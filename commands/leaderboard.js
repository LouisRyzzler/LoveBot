const { PREFIX } = require("../config");
const { Leaderboard } = require('./level')

class Leaderboard {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }

    Leaderboard() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "leaderboard" || PREFIX + "lb":
                    this.Leaderboard(); 
                    break; 
            }
        }
    }

    Leaderboard() {
        this.message.delete().then().catch(console.error)
        if(this.args[0] === PREFIX + "leaderboard" || PREFIX + "lb") {

            const rawLeaderboard = Levels.fetchLeaderboard(message.guild.id, 5);
            if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

            const leaderboard = Levels.computeLeaderboard(bot, rawLeaderboard); 

            const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

            message.channel.send(`${lb.join("\n\n")}`)
        }
    }
}

module.exports ={
    Leaderboard
}