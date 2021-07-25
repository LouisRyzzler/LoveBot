const { MessageEmbed, MessageAttachment } = require("discord.js");
const jackpotImg = new MessageAttachment('./assets/img/jackpot.jpg');
const randomDice = () => Math.floor(Math.random() * 7 ) + 1;
const { PREFIX } = require("../config");

class Jackpot {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "jackpot":
                    this.Jackpot(); 
                    break; 
            }
        }
    }



    Jackpot() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "868776883284758619") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "jackpot") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setTitle("1.0.3")
                            .setColor("#f16179")
                            .attachFiles(jackpotImg)
                            .setThumbnail('attachment://jackpot.jpg')
                            .addFields(
                                { name: '#', value: randomDice(), inline: true },
                                { name: '#', value: randomDice(), inline: true},
                                { name: '#', value: randomDice(), inline: true}
                            )
                    )
                }
            }    
        }
    }
}

module.exports ={
    Jackpot
}