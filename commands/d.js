const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dice.png');
const randomDice = () => Math.floor(Math.random() * 2000 ) + 1;
const { PREFIX } = require("../config");

class D {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "d":
                    this.D(); 
                    break; 
            }
        }
    }



    D() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "868776883284758619") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "d") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setAuthor(this.message.author.username, this.message.author.avatarURL())
                            .setColor("#f16179")
                            .attachFiles(diceImg)
                            .setThumbnail('attachment://dice.png')
                            .addFields(
                                { name: '#', value: randomDice(), inline: true }
                            )
                    )
                }
            }    
        }
    }
}

module.exports ={
    D
}