const { MessageEmbed, MessageAttachment } = require("discord.js");
const { PREFIX } = require("../config");

class Join  {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "join":
                    this.Join(); 
                    break; 
            }
        }
    }



    Join() {
        let guild = this.client.guilds.cache.some(fn => fn.id === "862781120540835901") ? this.client.guilds.cache.get("862781120540835901") : null;
        if(guild !== null) {
            let channel = guild.channels.cache.some(fn => fn.id === "862785768870641704") ? guild.channels.cache.get("862785768870641704") : null;
            if(channel !== null) {

                client.on('guildMemberAdd', (member) => {
                    channel.send(
                        new MessageEmbed()
                        .setColor("#f16179")
                        .setDescription(`Souhaitez la bienvenue à <@${member.id}> !`)
                    )
                })
            }
        }
    }
}

module.exports ={
    Join 
}