const { MessageEmbed } = require("discord.js");
const channelId = '834362034392924211'

class Member {
    constructor(message, member, client) {
        this.member = member;
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }

    selector() {
        
    }

    Member() {
        
        const embed =  new MessageEmbed()
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
        .setColor("#f16179")
        .setFooter(`Bienvenue sur Sweety !`)
        .setTimestamp();

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(embed);
        
    }
}

module.exports ={
    Member
}