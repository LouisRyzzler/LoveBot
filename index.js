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

const InviteId = '868906645277769758'
const channelId = '862785768870641704'

client.on('guildMemberAdd', (member) => {
    console.log(member)
    
    const embed =  new MessageEmbed()
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
        .setColor("#f16179")
        .setFooter("Bienvenue sur Sweety !")
        .setTimestamp();

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(embed)

    guild.fetchInvites().then((invites) => {
        const inviteCounter = {}

        invites.forEach((invite) => {
            const { uses, inviter } = invite
            const { username, discriminator } = inviter

            const name = `${username}#${discriminator}`

            inviteCounter[name] = (inviteCounter[name] || 0) + uses
        })

        let replyText = 'Invites:'

        for (const invite in inviteCounter) {
            const count = inviteCounter[invite]
            replyText += `\n${invite} a invité ${count} membre(s) !`
        }

            const embed2 = new MessageEmbed()
            .setColor("#f16179")
            .setDescription(`${invite} a invité ${count} membre(s) !`);
            const channel2 = member.guild.channels.cache.get(InviteId)
            channel2.send(embed2)
    })

})

client.login(process.env.TOKEN);