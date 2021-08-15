const { MessageEmbed, MessageAttachment } = require("discord.js");
const { PREFIX } = require("../config");

class Invites {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "invites":
                    this.Invites(); 
                    break; 
            }
        }
    }

    Invites() {
        if(this.message.channel.id !== this.client.user.id) {
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "invites") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setTitle("Informations Pings")
                            .setColor("#f16179")
                            .setDescription("")
                            .setFooter("")
                    )
                }
        }
    }
}

module.exports ={
    Invites 
}