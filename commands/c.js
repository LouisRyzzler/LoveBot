const { MessageEmbed, MessageAttachment } = require("discord.js");
const jackpotImg = new MessageAttachment('./assets/img/jackpot.jpg');
const randomDice = () => Math.floor(Math.random() * 7 ) + 1;
const { PREFIX } = require("../config");

class C {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "c":
                    this.C(); 
                    break; 
            }
        }
    }



    C() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "881598135510642780") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "c") {
                    this.message.channel.send( 
                        new MessageEmbed()
                        .setAuthor(this.message.author.username, this.message.author.avatarURL())
                        .setColor('RANDOM')
                        .attachFiles(jackpotImg)
                        .setThumbnail('attachment://jackpot.jpg')
                        .addFields(
                            { name: '#', value: randomDice(), inline: true },
                            { name: '#', value: randomDice(), inline: true },
                            { name: '#', value: randomDice(), inline: true }
                        )
                        .setFooter("Tape !casino ou !c pour jouer.")
                    )
                }
            }    
        }
    }
}

module.exports ={
    C
}