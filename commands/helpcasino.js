const { MessageEmbed, MessageAttachment } = require("discord.js");
const dice1 = new MessageAttachment('./assets/img/dice.png');
const jackpot1 = new MessageAttachment('./assets/img/jackpot.jpg');
const roulette = new MessageAttachment('./assets/img/roulette.png');
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
                        .setColor("#2f3136")
                        .attachFiles(jackpot1)
                        .setThumbnail('attachment://jackpot.jpg')
                        .addFields(
                            { name: "Casino", value: "Pour jouer au casino, allez dans le channel <#881598135510642780> et tapez la commande `!casino` ou `!c`.", inline: true },
                            { name: "Comment ganger ?", value: "Pour ganger au jeu du casino, il vous suffit d'obtenir la suite de numéros `7 7 7`.\n\n En récompense un rôle personnalisé vous sera attribué, toutes demandes est à faire auprès d'un administateur.", inline: true}
                        )
                )
                this.message.channel.send(
                    new MessageEmbed()
                        .setColor("#2f3136")
                        .attachFiles(dice1)
                        .setThumbnail('attachment://dice.png')
                        .addFields(
                            { name: "Les Dés", value: "Pour jouer aux dés, allez dans le channel <#881598135510642780> et tapez la commande `!dice`.", inline: true},
                            { name: "Comment gagner ?", value: "Pour gagner aux dés, il vous suffit d'obtenir le numéro `1`.\n\n En récompense un **Nitro Classic** vous sera remis sous reserve d'une preuve.", inline: false, inline: true}
                        )
                )
                this.message.channel.send(
                    new MessageEmbed()
                        .setColor("#2f3136")
                        .attachFiles(roulette)
                        .setThumbnail('attachment://roulette.png')
                        .addFields(
                            { name: "La roulette", value: "Pour jouer à la roulette, allez dans le channel <#881598135510642780> et tapez la commande `!roulette`.", inline: true},
                            { name: "Comment gagner ?", value: "Pour gagner à la roulette, il vous suffit de miser sur une couleur et de tomber dessus.\n\n Récompense reste à déterminer.", inline: false, inline: true}
                        )
                        .setFooter("Tape !helpcasino pour revoir ce message.")
                )
            }
    }
}

module.exports ={
    Helpcasino
}