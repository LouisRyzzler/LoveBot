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
                            { name: "Prefix", value: "Mon prefix sur Sweety est: **!** \n\nPour entrer une commande sur le serveur il vous suffit d'écrire le prefix puis le nom de la commande, *suivre le model ci-contre :* **!help**", inline: false },
                            { name: "Commandes", value: "<:pointer:863335546751287306> `!rencontre`\n <:pointer:863335546751287306> `!avis`\n <:pointer:863335546751287306> `!helpcasino` \n<:pointer:863335546751287306> `!casino`\n <:pointer:863335546751287306> `!dice`", inline: false},
                            { name: "Commandes Rôles", value: "<:pointer:863335546751287306> `!gold` \n<:pointer:863335546751287306> `!boost`"},
                            { name: "Liens utiles", value: "<:pointer:863335546751287306> Invitation du serveur: https://discord.gg/c56RxVhfr\n <:pointer:863335546751287306> Serveur secondaire: https://discord.gg/u8juXJapRQ", inline: false }
                        )
                        .setFooter(this.message.author.username, this.message.author.avatarURL())
                )
            }
    }
}

module.exports ={
    Help
}