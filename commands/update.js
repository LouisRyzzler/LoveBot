const { MessageEmbed, MessageAttachment } = require("discord.js");
const { PREFIX } = require("../config");

class Update {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "update":
                    this.Update(); 
                    break; 
            }
        }
    }



    Update() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "862785070946189322") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "update") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setTitle("1.0.4")
                            .setColor("#f16179")
                            .setDescription("<:update:863386248734179338> <:pointer:863335546751287306> __Update :__ \n\nSorti de la commande ``casino``. Exécutable dans le salon <#868776883284758619> tapez ``!casino``. Si le casino est remporté: ``7 7 7``, vous gagnez un **rôle personnalisé**, toutes demandes se feront auprès du staff.\n\n Sorti de la commande ``dice``. Exécutable dans le salon <#868776883284758619> tapez ``!dice``. Si le dé est égal à: ``0``, vous gagnez un **Nitro Classic**, toutes demandes se feront auprès du staff.\n\nRetrait de la réaction ``❌`` dislike, pour la commande ``!rencontre``.")
                    ).then(async (message) => {
                        await message.react('<:update:863386248734179338>').then().catch(console.error);

                        const filter = (reaction, user) => reaction.emoji.name === "<:update:863386248734179338>" &&
                            user.id === this.message.author.id;

                        await message.awaitReactions(filter, {
                            max: 1,
                            errors: ["max"]
                        })
                    })
                }
            }    
        }
    }
}

module.exports ={
    Update
}