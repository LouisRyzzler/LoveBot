const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const gif = new MessageAttachment('./assets/img/rencontre.png');
const Levels = require('discord-xp')

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

const channelId = '881598135233830965'
const channelId2 = '881598135233830965'

client.on('guildMemberAdd', async( member ) => {

    const channel2 = member.guild.channels.cache.get(channelId2)
    channel2.send(`Bienvenue ${member}`)

    const embed =  new MessageEmbed()
        .setColor("#f16179")
        .setTitle("Bienvenue sur Rencontres")
        .setDescription("<a:4231grayarrowright:876772752474931260> <:8484greensmalldot:882148627101941790> <#881598134906683424>\n<a:4231grayarrowright:876772752474931260> <:8484greensmalldot:882148627101941790> <#881598134906683425>\n<a:4231grayarrowright:876772752474931260> <:8484greensmalldot:882148627101941790> <#881598135233830963>")
        .setThumbnail('attachment://rencontre.png')
        .attachFiles(gif);

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(embed)

    const addRole = member.guild.roles.cache.find(r => r.name === 'Membre')
    member.roles.add(addRole);
});


client.on('message', async message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    const prefix = '!'

    const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
    const command = args.shift().toLowerCase();



    const randomXp = Math.floor(math.random() * 9) + 1;
    const hasLeveledUp = await Levels.appendXp(message.autohr.id, message.guild.id, randomXp);

    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`Tu as atteint le niveau ${user.level} !`);
    }


    if(command === "rank") {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`Tu es Level **${user.level}** !`)
    }

    if(command === "leaderboard" || command === "lb") {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10);
        if (rawLeaderboard.length < 1) return reply("Personne n'est inscrit dans le leaderboard.");

        const leaderboard = Levels.computeLeaderboard(bot, rawLeaderboard);

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nlevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

        message.channel.send(`${lb.join("\n\n")}`)
    }
})







client.login(process.env.TOKEN);