const { MessageEmbed, MessageAttachment } = require("discord.js");
const boost1 = new MessageAttachment('./assets/img/Boost1.gif');
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
                        .setColor("#d049ff")
                        .attachFiles(boost1)
                        .setThumbnail('attachment://Boost1.gif')
                        .addFields(
                            {name:"Comment obtenir le rôle Boosteur", value:"Booster le serveur une seule fois suffit pour obtenir le rôle <@&881624954070790144>.", inline: false},
                            {name:"Avantages", value:"<:pointer:882148627282280488> Vous obtenez tous les avantages du rôle <@&881598134856323114>.\n<:pointer:882148627282280488> Vous aurez un rôle affiché séparément des autres \n<:pointer:882148627282280488> Vous pouvez participer aux giveaways sans respecter aucunes conditions.\n<:pointer:882148627282280488> Vous gagnez l'accès au channel <#881598135510642779>.", inline: false}
                        )
                        .setFooter("Tape !boost pour revoir ce message.")
                )
            }  
        }
    }
}

module.exports ={
    Boost
}