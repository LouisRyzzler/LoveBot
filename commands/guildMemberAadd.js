const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../config");

class AddMember {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "addmember":
                    this.AddMember(); 
                    break; 
            }
        }
    }



    AddMember() {
        const channelId = '862785768870641704'
        const embed =  new MessageEmbed()
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
        .setColor("#f16179")
        .setFooter("Bienvenue sur Sweety !")
        .setTimestamp();

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(embed)
    }
}

module.exports ={
    AddMember
}