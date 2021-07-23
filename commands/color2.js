const { MessageEmbed, MessageAttachment } = require("discord.js");
const { PREFIX } = require("../config");
const ColorImg2 = new MessageAttachment('./assets/img/color2.png');


class Color2 {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "color2":
                    this.Color2(); 
                    break; 
            }
        }
    }



    Color2() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "862786357293744158") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "color2") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .attachFiles(ColorImg2)
                            .setImage('attachment://color2.png')
                    )
                }
            }    
        }
    }
}

module.exports ={
    Color2
}