const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../config");

class Helpcasino {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "helpcasino":
                    this.Helpcasino(); 
                    break; 
            }
        }
    }



    Helpcasino() {
        if(this.message.channel.id !== this.client.user.id) 
            
            this.message.delete().then().catch(console.error)
            if(this.args[0] === PREFIX + "helpcasino") {
                this.message.channel.send(
                    new MessageEmbed()
                        .setColor("#f16179")
                        .addFields(
                            { name: "Casino", value: "Pour jouer au casino, allez dans le channel <#868776883284758619> et tapez la commande `!casino`.", inline: true },
                            { name: "Comment ganger ?", value: "Pour ganger au jeu du casino, il vous suffit d'obtenir la suite de numéro `7 7 7`. En récompense un rôle personnalisé vous sera attribué, toutes demadnes est à faire auprès d'un administateur.", inline: false},
                            { name: "Les dés", value: "Pour jouer aux dés, allez dans le channel <#868776883284758619> et tapez la commande `!dice`.", inline: true},
                            { name: "Comment gagner aux dés ?", value: "Pour gagner aux dés, il vous suffit d'obtenir le numéro `0`. En récompense un **Nitro Claasic** vous sera remis sous reserve d'une preuve.", inline: false, inline: false}
                        )
                        .setFooter(this.message.author.username, this.message.author.avatarURL())
                )
            }
    }
}

module.exports ={
    Helpcasino
}