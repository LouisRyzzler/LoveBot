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


client.on('ready', () => {
    console.log(`${client.user.tag} est connecté !`);

    await wait(2000);

    client.guild.cache.get(id).fetchInvites().fetchInvites(inv => {
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

})





const channelId = '834362034392924211'

client.on('guildMemberAdd', async(member) => {
    console.log(member)
    
    const embed =  new MessageEmbed()
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
        .setColor("#f16179")
        .setFooter(`Bienvenue sur Sweety ${member} !`)
        .setTimestamp();

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(embed);





    if(member.guild.id !== id) return;

    member.guild.fetchInvites().then(gInvites => {
        const invite1 = gInvites.find((inv) => invites.get(inv.code).uses < inv.uses);

        const channel1 = member.guild.channels.cache.get('836216581264244756');

        channel1.send(`${member} a été invité par ${invite1.inviter} et son code est ${invite1.code}`);
    })
})

client.login(process.env.TOKEN);