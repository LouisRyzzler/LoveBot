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
                        .setColor("#2f3136")
                        .attachFiles(exclamation)
                        .setThumbnail('attachment://exclamation.png')
                        .addFields(
                            { name: "Prefix", value: "Mon prefix sur Sweety est: **!** \n\nPour entrer une commande sur le serveur il vous suffit d'écrire le prefix puis le nom de la commande, *suivre le model ci-contre :* **!help**", inline: false },
                            { name: "Commandes Membres", value: "<:pointer:882148627282280488> `!avis` <a:4231grayarrowright:882148688447811594> <#881598135233830963>\n <:pointer:882148627282280488> `!casino` <a:4231grayarrowright:882148688447811594> <#881598135510642780>\n <:pointer:882148627282280488> `!dice` <a:4231grayarrowright:882148688447811594> <#881598135510642780>\n <:pointer:882148627282280488> `!roulette` <a:4231grayarrowright:882148688447811594> <#881598135510642780> \n\n", inline: false},
                            { name: "Commandes Rôles", value: "<:pointer:882148627282280488> `!gold` \n<:pointer:882148627282280488> `!boost` \n\n"},
                            { name: "Liens utiles", value: "<:pointer:882148627282280488> Invitation du serveur: https://discord.gg/zYm5s97HtF", inline: false }
                        )
                        .setFooter("Tape !help pour revoir ce message.")
                )
            }
    }
}

module.exports ={
    Help
}