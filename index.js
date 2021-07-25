const { Client, MessageEmbed } = require('discord.js');

const client = new Client();
const { Rencontre } = require('./commands/rencontre.js') 
const { Info_Rencontre } = require('./commands/info_rencontre.js');
const { Avis } = require('./commands/avis.js');
const { Reglement } = require('./commands/reglement.js');
const { Update } = require('./commands/update.js');
const { Colorimg } = require('./commands/colorimg.js');
const { Color1 } = require('./commands/color1.js');
const { Color2 } = require('./commands/color2.js');
const { Informations } = require('./commands/informations.js');
const { Help } = require('./commands/help.js');
const { Casino } = require('./commands/jackpot.js');
const { Dice } = require('./commands/dice.js')


client.on('ready', () => {
    console.log(`${client.user.tag} est connecté !`);
});

client.on('message', message => {
    new Rencontre( message, client).selector()
    new Info_Rencontre( message, client).selector()
    new Avis( message, client).selector()
    new Reglement( message, client).selector()
    new Update( message, client).selector()
    new Colorimg( message, client).selector()
    new Color1( message, client).selector()
    new Color2( message, client).selector()
    new Informations( message, client).selector()
    new Help( message, client).selector()
    new Casino( message, client).selector()
    new Dice( message, client).selector()
})

const channelId = '862785768870641704'

client.on('guildMemberAdd', (member) => {
    console.log(member)
    
    const embed =  new MessageEmbed()
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
        .setColor("#f16179")
        .setDescription("Bienvenue sur Sweety ``🍎``\n\n N'hésite pas à poster ton profil dans le salon <#862784305439834142> \net à faire le max de rencontres tout en amusant !")
        .setTimestamp();

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(embed)
})

client.login(process.env.TOKEN);