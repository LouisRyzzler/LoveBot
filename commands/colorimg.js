const { MessageEmbed, MessageAttachment } = require("discord.js");
const { PREFIX } = require("../config");
const ColorGif = new MessageAttachment('./assets/img/colorGif.gif');


class Colorimg {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "colorimg":
                    this.Colorimg(); 
                    break; 
            }
        }
    }



    Colorimg() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "862786357293744158") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "colorimg") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .attachFiles(ColorGif)
                            .setImage('attachment://colorGif.gif')
                    )
                }
            }    
        }
    }
}

module.exports ={
    Colorimg
}