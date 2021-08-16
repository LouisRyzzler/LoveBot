const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dice.png');
const nitro = new MessageAttachment('./assets/img/nitro.png');
const randomDice = () => Math.floor(Math.random() * 2000 ) + 1;
const { PREFIX } = require("../config");

class Dice {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "dice":
                    this.Dice(); 
                    break; 
            }
        }
    }



    Dice() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "876529471417638942") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "dice") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setAuthor(this.message.author.username, this.message.author.avatarURL())
                            .setColor("#f16179")
                            .attachFiles(diceImg)
                            .setThumbnail('attachment://dice.png')
                            .addFields(
                                { name: '#', value: randomDice(), inline: true }
                            )
                            .setFooter("Tape !dice pour jouer.")
                    );
                    if( randomDice() === 1 ) {
                        this.message.channel.send(
                            new MessageEmbed()
                            .setAuthor(this.message.author.username, this.message.author.avatarURL())
                            .setColor("#f16179")
                            .attachFiles(nitro)
                            .setThumbnail('attachment://nitro.png')
                            .addFields(
                                { name: 'TU AS GAGNE !', value: "⌒⌒⌒⌒⌒⌒⌒ \n\n**Félicitation** ! Tu viens de remporter un **Nitro Classic**. \nFait ta demande auprès de <@396425830604996610>.", inline: true }
                            )
                            .setFooter("Tape !dice pour rejouer.")
                        )
                    }
                }
            }    
        }
    }
}

module.exports ={
    Dice
}