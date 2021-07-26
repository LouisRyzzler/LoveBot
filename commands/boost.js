const { MessageEmbed, MessageAttachment } = require("discord.js");
const boost1 = new MessageAttachment('./assets/img/boost 1.gif');
const { PREFIX } = require("../config");

class Boost {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "boost":
                    this.Boost(); 
                    break; 
            }
        }
    }



    Boost() {
        if(this.message.channel.id !== this.client.user.id) {
                
            this.message.delete().then().catch(console.error)
            if(this.args[0] === PREFIX + "boost") {
                this.message.channel.send(
                    new MessageEmbed()
                        .setColor("#f16179")
                        .attachFiles(boost1)
                        .setThumbnail('attachment://boost 1.gif')
                        .addFields(
                            {name:"Comment obtenir le rôle Boosteur", value:"Booster le serveur une seule fois suffit pour obtenir le rôle ainsi que ses avantages.", inline: false},
                            {name:"Avantages", value:"<:pointer:863335546751287306> Vous obtenez tous les avantages du rôle <@&868813991630237706>.\n<:pointer:863335546751287306> ", inline: false}
                        )
                )
            }  
        }
    }
}

module.exports ={
    Boost
}