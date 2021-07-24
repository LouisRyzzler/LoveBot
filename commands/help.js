const { MessageEmbed, MessageAttachment } = require("discord.js");
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
                this.message.author.send(
                    new MessageEmbed()
                        .setAuthor(this.message.guild.name, this.message.guild.iconURL())
                        .setColor("#f16179")
                        .setDescription("**Prefix**\n Mon prefix sur Sweety est: ``!``\n\n Pour entrer un commande sur le serveur il vous suffit d'écrire le prefix puis le nom de la commande; *suivre me model ci-contre:* ``!help``\n\n **Commandes**\n ``!rencontre`` si tapé dans le salon <#862784305439834142> vous permettra de poster votre profil.\n ``!avis`` si tapé dans le salon <#862784628980187157> vous permettra de poster votre avis de serveur.\n\n **Liens utiles**\n Invitation du serveur: https://discord.gg/c56RxVhfra")
                )
            }
    }
}

module.exports ={
    Help
}