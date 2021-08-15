const { Client, MessageEmbed } = require('discord.js');

const { promisify } = require('util');
const wait = promisify(setTimeout);
let invites;
const id = '834348938584522782'

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
const { Invites } = require('./commands/invites.js')


client.on('ready', async() => {
    console.log(`${client.user.tag} est connecté !`);

    await wait(2000);

    client.guilds.cache.get(id).fetchInvites().then(inv => {
        invites = inv;
    })
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
    new Invites( message, client).selector()

})





const channelId = '834362034392924211'
const channelInv = '836216581264244756'

client.on('guildMemberAdd', async(member, message ) => {
    console.log(member)
    
    const embed =  new MessageEmbed()
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
        .setColor("#f16179")
        .setFooter(`Bienvenue sur Sweety !`)
        .setTimestamp();

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(embed);




    console.log(member)
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

    const channel = member.guild.channels.cache.get(channelInv)
    channel.send(embed1);
})

client.login(process.env.TOKEN);