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
        this.client.channels.cache.get('862785768870641704').send(
            new MessageEmbed()
            .setAuthor(this.message.author.username, this.message.author.avatarURL())
            .setColor("#35f92")
            .setFooter("Un utilisateur a rejoins")
            .setTimestamp()
        )
    }
}

module.exports ={
    Join 
}