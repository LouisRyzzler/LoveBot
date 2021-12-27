const { MessageEmbed, MessageAttachment } = require("discord.js");
const { PREFIX } = require("../config");
const parcheminImg = new MessageAttachment('./assets/img/parchemin.png');


class nsfwinfos {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "infos":
                    this.nsfwinfos(); 
                    break; 
            }
        }
    }



    nsfwinfos() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "925123829355929630") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "infos") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#ff2c52")
                            .setTitle("💞 NSFW_IRL | Infos & Règles")
                            .setDescription("La catégorie IRL a été ouverte pour vous permettre d'avoir des salons plus spécifiques, sans obstruer la catégorie principale NSFW, qui se concentre sur l'utilisation des bots. Ces canaux incluent toujours les règles par défaut qui s'appliquent partout ailleurs sur le serveur, mais certains détails supplémentaires doivent être précisés. \n\n<pointer:882148627282280488> **Ne publiez PAS votre propre contenu / nus IRL.**\nNous avons une section vérifiée du serveur pour le partage sécurisé de contenu personnel. Ignorer ceci pour publier dans cette catégorie entraînera une interdiction immédiate, car les avertissements sont très denses sur tous les salons. \n\n<pointer:882148627282280488> **Ne divulguez PAS le contenu des autres.**\n La publication de contenu provenant d'autres utilisateurs ou de personnes que vous connaissez personnellement entraînera une interdiction instantanée et un signalement à Discord.")
                    )
                }
            }    
        }
    }
}

module.exports ={
    nsfwinfos
}