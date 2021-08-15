const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../config");

class Update {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "update":
                    this.Update(); 
                    break; 
            }
        }
    }



    Update() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "876528306495815722") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "update") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setTitle("2.0.0")
                            .setColor("#f16179")
                            .setDescription("<:update:863386248734179338> <:pointer:876532736435826729> __Update :__ \n\n Réagencement de tout le serveur laissant place à un Sweety2 + ajustement du bot en fonction de la détection de salons.")
                    ).then(async (message) => {
                        await message.react('<:update:863386248734179338>').then().catch(console.error);

                        const filter = (reaction, user) => reaction.emoji.name === "<:update:863386248734179338>" &&
                            user.id === this.message.author.id;

                        await message.awaitReactions(filter, {
                            max: 1,
                            errors: ["max"]
                        })
                    })
                }
            }    
        }
    }
}

module.exports ={
    Update
}