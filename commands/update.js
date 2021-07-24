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
                            .setTitle("1.0.3")
                            .setColor("#f16179")
                            .setDescription("<:update:863386248734179338> <:pointer:863335546751287306> __Update :__ \n\nSorti de la commande ``help``. Exécutable n'importe où sur le serveur mais de préférence dans le salon <#862785192628060171> et tapez ``!help``.")
                    )
                }
            }    
        }
    }
}

module.exports ={
    Update
}