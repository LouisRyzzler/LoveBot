const { MessageEmbed, MessageAttachment } = require("discord.js");
const temple = new MessageAttachment('./assets/img/temple.jpg');
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
                case PREFIX + "temple":
                    this.NSFW(); 
                    break; 
            }
        }
    }

    NSFW() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "887038138264997929") { 

                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "temple") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#f16179")
                            .setTitle("Event") 
                            .setDescription("Vous êtes un aventurier en quête d'exploration et soudain, au loin, perdu dans la jungle vous apercevez un immense temple. \nVous vous approchez et vous toquez à la porte... \n\nClique sur la réaction pour voir ce qu'il se cache derrière la porte !")
                            .setThumbnail('attachment://temple.jpg')
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