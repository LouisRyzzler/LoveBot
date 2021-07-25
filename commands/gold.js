const { MessageEmbed, MessageAttachment } = require("discord.js");
const trophe = new MessageAttachment('./assets/img/trophé.png');
const { PREFIX } = require("../config");

class Gold {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "gold":
                    this.Gold(); 
                    break; 
            }
        }
    }



    Gold() {
        if(this.message.channel.id !== this.client.user.id) {
                
            this.message.delete().then().catch(console.error)
            if(this.args[0] === PREFIX + "gold") {
                this.message.channel.send(
                    new MessageEmbed()
                        .setAuthor(this.message.guild.name, this.message.guild.iconURL())
                        .setColor("#f16179")
                        .addFields(
                            { name: "Comment obtenir le rôle Sweety Gold ?", value: "Inviter 3 personnes sur le serveur vous permettra d'obtenir le rôle <@&868813991630237706>", inline: false },
                            { name: "Avantages", value: "<:pointer:863335546751287306> Vous aurez un rôle affiché séparément des autres \n<:pointer:863335546751287306> Vous pourrez changer vôtre pseudo. \n<:pointer:863335546751287306> Vous aurez la possibilité de masquer le channel <#862785241604685857>. Faites vôtre demande auprès du staff si vous voulez cacher ce salon. \n\nPour voir où en sont vos invitations, tapez ``-invites``." }
                        )
                )
            }  
        }
    }
}

module.exports ={
    Gold
}