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
            if(this.message.channel.id === "862785070946189322") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "update") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setTitle("1.0.7")
                            .setColor("#f16179")
                            .setDescription("<:update:863386248734179338> <:pointer:863335546751287306> __Update :__ \n\n Racourci de la commande `!casino`, vous pouvez désormais l'écrire de ces manières: `!casino` ou `!c`. La raison -> Gain de temps. \n\n Mise à jour de la commande `!helpcasino`.")
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