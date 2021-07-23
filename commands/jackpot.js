const { MessageEmbed, MessageAttachment } = require("discord.js");
const jackpotImg = new MessageAttachment('./assets/img/jackpot.jpg');
const randomDice = () => Math.floor(Math.random() * 7 ) + 1;

module.exports = {
    name: 'jackpot',
    description: 'Renvoie 3 valeurs afin de gagner le jackpot.',
    execute(client, message, args) {
        const embed = new MessageEmbed()
        .setColor("#2f3136")
        .setTitle("Casino")
        .attachFiles(jackpotImg)
        .setThumbnail('attachment://jackpot.jpg')
        .addFields(
            { name: '#', value: randomDice(), inline: true},
            { name: '#', value: randomDice(), inline: true},
            { name: '#', value: randomDice(), inline: true}
        )
        message.channel.send(embed);
    }
}