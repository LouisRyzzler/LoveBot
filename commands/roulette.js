const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dice.png');
const randomDice = () => Math.floor(Math.random() * 2 ) + 1;
const { PREFIX } = require("../config");

class Roulette{
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "roulette":
                    this.Dice(); 
                    break; 
            }
        }
    }



    Dice() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "868776883284758619") { 

                if(randomDice === 1 ) {
                    this.message.delete().then().catch(console.error)
                    if(this.args[0] === PREFIX + "roulette") {
                        this.message.channel.send(
                            new MessageEmbed()
                                .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                .setColor("#f16179")
                                .attachFiles(diceImg)
                                .setThumbnail('attachment://dice.png')
                                .addFields(
                                    { name: '#', value: 'ça marche correctement =1', inline: true }
                                )
                                .setFooter("Tape !dice pour jouer.")
                        )
                    }
                }

                if(randomDice === 2) {
                    this.message.delete().then().catch(console.error)
                    if(this.args[0] === PREFIX + "dice") {
                        this.message.channel.send(
                            new MessageEmbed()
                                .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                .setColor("#f16179")
                                .attachFiles(diceImg)
                                .setThumbnail('attachment://dice.png')
                                .addFields(
                                    { name: '#', value: 'ça marche correctement =2', inline: true }
                                )
                                .setFooter("Tape !dice pour jouer.")
                        )
                    }
                }

                if(randomDice === 3) {
                    this.message.delete().then().catch(console.error)
                    if(this.args[0] === PREFIX + "dice") {
                        this.message.channel.send(
                            new MessageEmbed()
                                .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                .setColor("#f16179")
                                .attachFiles(diceImg)
                                .setThumbnail('attachment://dice.png')
                                .addFields(
                                    { name: '#', value:  'ya une 3eme possibilitée', inline: true }
                                )
                                .setFooter("Tape !dice pour jouer.")
                        )
                    }
                }

            }    
        }
    }
}

module.exports ={
    Roulette
}