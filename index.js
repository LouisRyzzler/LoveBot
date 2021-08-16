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
const { Casino } = require('./commands/casino.js');
const { Dice } = require('./commands/dice.js')
const { Gold } = require('./commands/gold.js')
const { Boost } = require('./commands/boost.js')
const { Helpcasino } = require('./commands/helpcasino.js')
const { C } = require('./commands/c.js')
const { Roulette } = require('./commands/roulette.js')
const { NSFW } = require('./commands/nsfw.js')



client.on('ready', async() => {
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
    new Gold( message, client).selector()
    new Boost( message, client).selector()
    new Helpcasino( message, client).selector()
    new C( message, client).selector()
    new Roulette( message, client).selector()
    new NSFW( message, client).selector()

})

const channelId = '834362034392924211'

client.on('guildMemberAdd', async( member ) => {

    const embed =  new MessageEmbed()
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
        .setColor("#f16179")
        .setFooter(`Bienvenue sur Sweety !`)
        .setTimestamp();

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(embed);
})

client.login(process.env.TOKEN);