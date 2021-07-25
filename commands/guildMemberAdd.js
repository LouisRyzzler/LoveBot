const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = (client) => {
    const embed = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayName())
        .setColor("#35f92")
        .setFooter("Un utilisateur a rejoins")
        .setTimestamp();

    client.channels.cache.get('862785768870641704').send(embed)
    
}