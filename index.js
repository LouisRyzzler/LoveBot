const { Client, MessageEmbed, MessageAttachment } = require('discord.js');

const client = new Client();
const { Avis } = require('./commands/avis.js');
const { Reglement } = require('./commands/reglement.js');
const { Reglement2 } = require('./commands/reglement2.js');
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
const { nsfwinfos } = require('./commands/nsfwinfos.js')


client.on('ready', async() => {
    console.log(`${client.user.tag} est connecté !`);
    
});

client.on('message', message => {
    new Avis( message, client).selector()
    new Reglement( message, client).selector()
    new Reglement2( message, client).selector()
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
    new nsfwinfos( message, client).selector()
})

//########################### JOIN MEMBER MESSAGE ###########################//

const channelId = '881598135233830965'
const channelId2 = '881598135233830965'
const sexGif = new MessageAttachment('./assets/img/Gifpp.gif');

client.on('guildMemberAdd', async( member ) => {

    const channel2 = member.guild.channels.cache.get(channelId2) //Envoie du pseudo
    channel2.send(`Bienvenue ${member}`)

    const embed =  new MessageEmbed() //Definir l'Embed 1
        .setColor('RANDOM')
        .setTitle("Bienvenue Sur Sweety")
        .setDescription("<a:4231grayarrowright:882148688447811594> <:8484greensmalldot:882148627101941790> <#881598134906683427>\n<a:4231grayarrowright:882148688447811594> <:8484greensmalldot:882148627101941790> <#881598135233830963>")
        .setThumbnail('attachment://Gifpp.gif')
        .attachFiles(sexGif)

        
    
        
    const channel = member.guild.channels.cache.get(channelId)
    channel.send(embed) // Envoie de l'Embed 


    const addRole = member.guild.roles.cache.find(r => r.name === 'Membre')
    member.roles.add(addRole);
});


client.login(process.env.TOKEN);