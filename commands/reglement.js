const { MessageEmbed, MessageAttachment } = require("discord.js");
const { PREFIX } = require("../config");
const parcheminImg = new MessageAttachment('./assets/img/parchemin.png');


class Reglement {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "reglement":
                    this.Reglement(); 
                    break; 
            }
        }
    }



    Reglement() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "862784552517894175") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "reglement") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#f16179")
                            .attachFiles(parcheminImg)
                            .setThumbnail('attachment://parchemin.png')
                            .setDescription("<:discord:862996341247967243> <:pointer:863335546751287306> Respectez les **[Guidelines](https://discord.com/guidelines)** et **[Termes](https://discord.com/terms)** de Discord. \n\n<:membre:862996342859235359> <:pointer:863335546751287306> Pour rester sur le serveur vous devez posséder [la mojorité numérique dans votre pays.](https://support.discord.com/hc/en-us/articles/360040724612) \n\n<:message:862996395513085952> <:pointer:863335546751287306> Toutes formes de discrimination, au même titre qu'insulter les autres sont interdis. Tout contenu choquant ou inapproprié fera l'objet d'une sanction. \n\n<:lock1:862996342450946068> <:pointer:863335546751287306> Ne divulguez pas vos informations personnelles: mot de passe, carte bancaire ou adresse. \n\n<:shild:862996341831893022> <:pointer:863335546751287306> Ne contestez pas les décisions du staff. Les doubles compte ou l'utilisation de bug issus du bot sont interdis. \n\n<:link1:862996342917955604> <:pointer:863335546751287306> Toutes formes de pub, sauf dans le salon réservé à cet effet est prohibé. \n\n<:recherche:862996342385541120> <:pointer:863335546751287306> Pour tout signalement, ouvrez un ticket ou contacter un modérateur. \n\n<:reglement:862996341483634718> <:pointer:863335546751287306> Gardez un profil approprié.")
                    )
                }
            }    
        }
    }
}

module.exports ={
    Reglement
}