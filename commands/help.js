const { MessageEmbed, MessageAttachment } = require("discord.js");
const exclamation = new MessageAttachment('./assets/img/exclamation.png');
const { PREFIX } = require("../config");

class Help {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "help":
                    this.Help(); 
                    break; 
            }
        }
    }



    Help() {
        if(this.message.channel.id !== this.client.user.id) 
            
            this.message.delete().then().catch(console.error)
            if(this.args[0] === PREFIX + "help") {
                this.message.channel.send(
                    new MessageEmbed()
                        .setColor("#f16179")
                        .attachFiles(exclamation)
                        .setThumbnail('attachment://exclamation.png')
                        .addFields(
                            { name: "Prefix", value: "Mon prefix sur Rencontres FR est: **!** \n\nPour entrer une commande sur le serveur il vous suffit d'écrire le prefix puis le nom de la commande, *suivre le model ci-contre :* **!help**", inline: false },
                            { name: "Commandes Membres", value: "<:pointer:876532736435826729> `!avis`\n\n <:pointer:876532736435826729> `!helpcasino` \n<:pointer:876532736435826729> `!casino`\n <:pointer:876532736435826729> `!dice`\n <:pointer:876532736435826729> `!roulette`", inline: false},
                            { name: "Commandes Rôles", value: "<:pointer:876532736435826729> `!gold` \n<:pointer:876532736435826729> `!boost`"},
                            { name: "Liens utiles", value: "<:pointer:876532736435826729> Invitation du serveur: https://discord.gg/zYm5s97HtF", inline: false }
                        )
                        .setFooter("Tape !help pour revoir ce message.")
                )
            }
    }
}

module.exports ={
    Help
}