const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const gif = new MessageAttachment('./assets/img/gif.gif');

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
const channelId2 = '834362034392924211'

client.on('guildMemberAdd', async( member ) => {

    const channel2 = member.guild.channels.cache.get(channelId2)
    channel2.send(`Bienvenue ${member}`)

    const embed =  new MessageEmbed()
        .setColor("#f16179")
        .setTitle("Bienvenue sur Sweety `🍒`")
        .setDescription("⌒⌒⌒⌒⌒⌒⌒ \n\n<a:4231grayarrowright:876772752474931260> <:8484greensmalldot:876766756771872809> <#876528588067835914>\n <a:4231grayarrowright:876772752474931260> <:8484greensmalldot:876766756771872809> <#876529883000504420>\n <a:4231grayarrowright:876772752474931260> <:8484greensmalldot:876766756771872809> Amuse toi bien !")
        .setFooter(`✨ Profite bien parmis nous !`)
        .setThumbnail('attachment://gif.gif')
        .attachFiles(gif)
        .setTimestamp();

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(embed);
})


client.login(process.env.TOKEN);