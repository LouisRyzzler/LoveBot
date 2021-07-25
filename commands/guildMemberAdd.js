const { MessageEmbed, MessageAttachment } = require("discord.js");
const { PREFIX } = require("../config");

class guildMemberAdd {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
            }
        }
    }



    guildMemberAdd() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "862785768870641704") { 
                    this.message.channel.send(
                        new MessageEmbed()
                            .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
                            .setColor("#35f092")
                            .setDescription("Un nouveau membre est arrivé souhaite lui la bienvenue !")
                    )
            }    
        }
    }
}

module.exports ={
    guildMemberAdd
}