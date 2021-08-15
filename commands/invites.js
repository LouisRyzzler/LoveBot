const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../config");
const channelInv = '836216581264244756'

class Invites {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "invites":
                    this.Invites(); 
                    break; 
            }
        }
    }

    Invites() {
        if(this.message.channel.id !== this.client.user.id) {
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "invites") {

                    let user = message.mention.users.first() || message.author 
                    let invites = await message.guild.fetchInvites();
                    let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)
                
                    if(userInv.size <= 0) {
                        return message.channel.send(`${user.username} n'a pas d'invitations`)
                    }
                
                    let i = 0;
                    userInv.forEach(inv => i += inv.uses)
                
                    const embed1 = new MessageEmbed()
                        .setColor("#f16179")
                        .setTitle(`${user.username} Invites`)
                        .addField('Invitations', i)
                        .setTimestamp()
                
                    const channel1 = member.guild.channels.cache.get(channelInv)
                    channel1.send(embed1);
                }
        }
    }
}

module.exports ={
    Invites 
}