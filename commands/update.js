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
                            .setTitle("1.0.2")
                            .setColor("#f16179")
                            .setDescription("<:update:863386248734179338> <:pointer:863335546751287306> __Update :__ \n\nLa commande ``!rencontre`` a été allégé. Désormais seule une courte description et une photo seront demandés pour poster votre annonce. De plus l'accès entier au serveur est disponible dès le départ, plus besoin d'executer la commande en question. \n\n Le préfix du bot a changé en ``!``")
                    )
                }
            }    
        }
    }
}

module.exports ={
    Update
}