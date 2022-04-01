const { MessageEmbed, MessageAttachment } = require("discord.js");
const { PREFIX } = require("../config");
const règlement = new MessageAttachment('./assets/img/règlementfinale.png');


class Reglement2 {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "reglement2":
                    this.Reglement2(); 
                    break; 
            }
        }
    }

    Reglement2() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "958786221411303445") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "reglement2") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#f767b9")
                            .attachFiles(règlement)
                            .setThumbnail('attachment://règlementfinale.png')
                            .setDescription("")
                            .setTitle("")
                    )
                }
            }    
        }
    }
}


module.exports ={
    Reglement2
}