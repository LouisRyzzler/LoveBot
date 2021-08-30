const { MessageEmbed, MessageAttachment } = require("discord.js");
const gif = new MessageAttachment('./assets/img/gif.gif');
const { PREFIX } = require("../config");

class Info_Rencontre {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }

    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "inforencontre":
                    this.Info_Rencontre(); 
                    break; 
            }
        }
    }

    Info_Rencontre() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "881598134906683424") { 

                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "inforencontre") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#f16179")
                            .setTitle("Comment ajouter votre profil ?")
                            .setDescription("Tapez `!start` pour poster ton profil. \n\nJe vous enverrai des instructions en message privé, suivez les attentivement.")
                            .attachFiles(gif)
                            .setThumbnail('attachment://gif.gif')

                    )
                }
            }    
        }
    }
}

module.exports ={
    Info_Rencontre
}