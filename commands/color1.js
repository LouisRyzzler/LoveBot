const { MessageEmbed, MessageAttachment } = require("discord.js");
const { PREFIX } = require("../config");
const ColorImg1 = new MessageAttachment('./assets/img/color1.png');


class Color1 {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "color1":
                    this.Color1(); 
                    break; 
            }
        }
    }



    Color1() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "862786357293744158") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "color1") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .attachFiles(ColorImg1)
                            .setImage('attachment://color1.png')
                    )
                }
            }    
        }
    }
}

module.exports ={
    Color1
}