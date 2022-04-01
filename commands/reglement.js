const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../config");


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
            if(this.message.channel.id === "958786221411303445") { 
                
                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "reglement") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#f767b9")
                            .setDescription("**Fuji est un serveur communautaire, social qui reste proche de ses memebres. Un groupe pour se retrouver à chaque instant.** \n\nLe règlement est nécéssaire pour maintenir l'entente entre chacun d'entre nous. Accepter le pour accéder au contenu du serveur. \n\n```01. efzfefzefzefefezfefzefezfzefzefzefzefzeffezfezfzefzefzfez \n02. ezfzefezfzefzefzefzefzefzefzefzefzefzefzefzefzefzefzefzefzefzef \n03. fffiefezfifiiefiezfefuheuifefhifuizfuihefuuzehfuifu \n04. ggjgorgjireogjirjgijiogjiergjiojgiojoigoiergirgoiergjijergiojeroigjer \n05. gkergopropgkeprogpokregkeorkgpeprgoeprgopekgpokergopkergpoe \n06. gporkgopekrgkeprgpekorgkerkgerpogoerkgoeopgoergerg \n07. kgpokerogkoeprgkokergokopergkpoekgpokeropgkoperkgergergekg \n08. gokogkopregoreogkorekgkroegokgkergpkepgoepgergpkergkorkgoekrg \n09. regjregjgjiogoigiirogjiregjrejgjerogireogjoierjgoierjgoiejgregjgeriojg \n10. htrrthkoprtkrtophkortrtohkrotkprothkoprtkportkhotrkotrkhktrktrhkrtoph```")
                    )
                }
            }    
        }
    }
}

module.exports ={
    Reglement
}