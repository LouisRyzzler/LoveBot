const { MessageEmbed, MessageAttachment } = require("discord.js");
const sweetypp = new MessageAttachment('./assets/img/Gif pp.gif');
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
            if(this.message.channel.id === "876554356311347280") { 

                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "nsfw") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#f16179")
                            .setTitle("Catégorie NSFW") 
                            .setDescription("En cochant la réaction ci-dessous, tu pourras accéder à la catégorie NSFW et, tu certifies être âgé de plus de 18ans.")

                    )
                    this.message.channel.send(
                        new MessageEmbed()
                        .setColor("#f16179")
                        .attachFiles(sweetypp)
                        .setImage('attachment://Gif pp.gif')
                        .setFooter("Coche la réaction pour acceder à la catégorie NSFW.")
                    )
                }
            }    
        }
    }
}

module.exports ={
    NSFW
}