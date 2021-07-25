const { MessageEmbed, MessageAttachment } = require("discord.js");
const jackpotImg = new MessageAttachment('./assets/img/jackpot.jpg');
const randomDice = () => Math.floor(Math.random() * 7 ) + 1;
const { PREFIX } = require("../config");

class Casino {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "casino":
                    this.Casino(); 
                    break; 
            }
        }
    }



    Casino() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "868776883284758619") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "casino") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setTitle("Casino")
                            .setColor("#f16179")
                            .attachFiles(jackpotImg)
                            .setThumbnail('attachment://jackpot.jpg')
                            .addFields(
                                { name: '#', value: randomDice(), inline: true },
                                { name: '#', value: randomDice(), inline: true },
                                { name: '#', value: randomDice(), inline: true }
                            )
                            .setFooter(this.message.author.username, this.message.author.avatarURL())
                    )
                }
            }    
        }
    }
}

module.exports ={
    Casino
}