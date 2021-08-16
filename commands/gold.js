const { MessageEmbed, MessageAttachment } = require("discord.js");
const boost2 = new MessageAttachment('./assets/img/Boost2.gif');
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
                        .setColor("#f16179")
                        .attachFiles(boost2)
                        .setThumbnail('attachment://Boost2.gif')
                        .addFields(
                            { name: "Comment obtenir le rôle SweetyGold ?", value: "Inviter **3 personnes** sur le serveur vous permettra d'obtenir le rôle <@&876526738174255134>", inline: false },
                            { name: "Avantages", value: "<:pointer:876532736435826729> Vous aurez un rôle affiché séparément des autres \n<:pointer:876532736435826729> Vous pourrez changer votre pseudo. \n<:pointer:876532736435826729> Vous pourrez poster des GIF dans le salon <#834362034392924211>. \n<:pointer:876532736435826729> Vous aurez la possibilité de masquer le channel <#834555074045804605>. Faites votre demande auprès du staff si vous voulez cacher ce salon. \n\nPour voir où en sont vos invitations, tapez `-invites`." }
                        )
                        .setFooter("Tape !gold pour revoir ce message.")
                )
            }  
        }
    }
}

module.exports ={
    Gold
}