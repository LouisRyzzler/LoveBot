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

client.on('guildMemberAdd', (member) => {
    console.log(member)

    let guild = this.client.guilds.cache.some(fn => fn.id === "862781120540835901") ? this.client.guilds.cache.get("862781120540835901") : null;
    if(guild !== null) {
        let channel = guild.channels.cache.some(fn => fn.id === "862785768870641704") ? guild.channels.cache.get("862785768870641704") : null;
        if(channel !== null) {
            channel.send(
                 new MessageEmbed()
                .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
                .setColor("#f16179")
                .setDescription(`Souhaitez la bienvenue à ${member.displayName} !`)
            )
        }
    }
})

client.login(process.env.TOKEN);