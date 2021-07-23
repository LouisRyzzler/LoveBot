const { MessageEmbed, MessageAttachment } = require("discord.js");
const PingImg = new MessageAttachment('./assets/img/ping.webp');
const { PREFIX } = require("../config");

class Informations {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "informations":
                    this.Informations(); 
                    break; 
            }
        }
    }

    Informations() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "862784515420586024") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "informations") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setTitle("Informations Pings")
                            .setColor("#f16179")
                            .attachFiles(PingImg)
                            .setThumbnail('attachment://ping.webp')
                            .setDescription("<:pointer:863335546751287306> <@&867800058349879316> **Giveaways**\n Ce rôle permet d'être averti des récents giveaways proposés par le serveur \n\n<:pointer:863335546751287306> <@&867800061869686816> **Partenariats**\n Ce rôle permet d'être averti des partenariats avec d'autres serveurs. \n\n<:pointer:863335546751287306> <@&867800064913965056> **Upgrades**\n Ce rôle permet d'être averti des nouvelles mises à jour du bot. \n\n<:pointer:863335546751287306> <@&867800067444703242> **Evènements**\n Ce rôle permet d’être averti lors des nouveaux évènements et d’y participer.")
                            .setFooter("Réagissez avec les réactions pour être averti des divers annonces.")
                    )
                }
            }
        }
    }
}

module.exports ={
    Informations 
}