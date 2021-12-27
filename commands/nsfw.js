const { MessageEmbed, MessageAttachment } = require("discord.js");
const temple = new MessageAttachment('./assets/img/Gifpp.gif');
const { PREFIX } = require("../config");

class NSFW {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }

    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "nsfw":
                    this.NSFW(); 
                    break; 
            }
        }
    }

    NSFW() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "887038138264997929") { 

                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "nsfw") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#f16179")
                            .setTitle("NSFW ACCES") 
                            .setDescription("Coche la réaction pour accéder aux contenus NSFW du serveur !")
                            .setThumbnail('attachment://Gifpp.gif')
                            .attachFiles(temple)
                    )
                }
            }    
        }
    }
}

module.exports ={
    NSFW
}