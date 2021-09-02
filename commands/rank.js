const { PREFIX } = require("../config");
const { Rank } = require('.commands/level')

class Rank {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }

    Rank() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "rank":
                    this.Rank(); 
                    break; 
            }
        }
    }

    Rank() {
        this.message.delete().then().catch(console.error)
        if(this.args[0] === PREFIX + "rank") {

            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`You are currently level **${user.level}**!`)
        }
    }
}

module.exports ={
    Rank
}