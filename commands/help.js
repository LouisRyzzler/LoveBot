const { MessageEmbed, MessageAttachment } = require("discord.js");
const exclamation = new MessageAttachment('./assets/img/exclamation.png');
const { PREFIX } = require("../config");

class Help {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "help":
                    this.Help(); 
                    break; 
            }
        }
    }



    Help() {
        if(this.message.channel.id !== this.client.user.id) 
            
            this.message.delete().then().catch(console.error)
            if(this.args[0] === PREFIX + "help") {
                this.message.send(
                    new MessageEmbed()
                        .setAuthor(this.message.guild.name, this.message.guild.iconURL())
                        .setColor("#f16179")
                        .attachFiles(exclamation)
                        .setThumbnail('attachment://exclamation.png')
                        .addFields(
                            { name: "Prefix", value: "Mon prefix sur Sweety est: ``!`` \n\nPour entrer une commande sur le serveur il vous suffit d'écrire le prefix puis le nom de la commande, *suivre le model ci-contre :* ``!help``", inline: false },
                            { name: "Commandes", value: "<:pointer:863335546751287306> ``!rencontre`` si tapé dans le salon <#862784305439834142> cela vous permettra de poster votre profil.\n <:pointer:863335546751287306> ``!avis`` si tapé dans le salon <#862784628980187157> cela vous permettra de poster votre avis.\n <:pointer:863335546751287306> ``!casino`` si tapé dans le salon <#868776883284758619> vous permettra de jourer au casino. Si vous tomber sur ``7 7 7`` vous gagnerez un rôle personnalisé.\n <:pointer:863335546751287306> ``!dice`` si tapé dans le salon <#868776883284758619> vous ppermettra de jouer aux dés. Si vous tomber sur ``0`` vous gagnerez un Nitro Classic.", inline: false},
                            { name: "Rôles", value: "<:pointer:863335546751287306> <@&868813991630237706> ce rôle s'obtient en invitant ``3`` personnes sur le serveur. Taper la commande ``!gold`` vous montreras tous les avantages de ce rôle."},
                            { name: "Liens utiles", value: "<:pointer:863335546751287306> Invitation du serveur: https://discord.gg/c56RxVhfr\n <:pointer:863335546751287306> Serveur secondaire: https://discord.gg/u8juXJapRQ", inline: false }
                        )
                )
            }
    }
}

module.exports ={
    Help
}