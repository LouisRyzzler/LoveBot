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
        const channelId = '862785768870641704'

        client.on('guldMemberAdd', (member) => {
            consol.log(member)

            const message = `Souhaitez la bienvenue à <@${member.id}> !`

            const channel = member.guild.channels.cache.get(channelId)
            channel.send(message)
        })
    }
}

module.exports ={
    Join 
}