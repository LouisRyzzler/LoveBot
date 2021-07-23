const { MessageEmbed, MessageAttachment } = require("discord.js");
const { PREFIX } = require("../config");
const zeroImg = new MessageAttachment('./assets/img/0.png')
const unImg = new MessageAttachment('./assets/img/1.png')
const deuxImg = new MessageAttachment('./assets/img/2.png')
const troisImg = new MessageAttachment('./assets/img/3.png')
const quatreImg = new MessageAttachment('/home/container/assets/img/4.png')
const cinqImg = new MessageAttachment('./assets/img/5.png')

class Avis {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }

    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "avis":
                    this.Avis(); 
                    break; 
            }
        }
    }

    Avis() {
        if(this.message.author.id !== this.client.user.id) {
            if(this.message.channel.id === "862784628980187157") { 

                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "avis") {
                    
                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .setTitle("Laisse un avis sur Sweety !")
                            .setDescription("Pour laisser un avis il te suffit d'écrire un message ici même, je me chargerai pour toi de poster ton avis.")
                    ).then(async (message) => {
                        const filter = message => message.author.id === this.message.author.id;

                        let reply = await message.channel.awaitMessages(filter, {
                            maxProcessed: 1,
                            time: 3600000,
                            errors: ["time"]
                        });
                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .addFields(
                                {
                                    name: "N'oublie pas de laisser une note !",
                                    value: "Coche la réacton correspondant au nombre d'étoile\n *Attendez que toutes les réactions soient ajoutés*",
                                    inline: false 
                                }
                            )
                    ).then(async (message) => {
                        await message.react('0️⃣').then().catch(console.error);
                        await message.react('1️⃣').then().catch(console.error);
                        await message.react('2️⃣').then().catch(console.error);
                        await message.react('3️⃣').then().catch(console.error);
                        await message.react('4️⃣').then().catch(console.error);
                        await message.react('5️⃣').then().catch(console.error);

                        const filter = (reaction, user) => reaction.emoji.name === "0️⃣" ||
                            reaction.emoji.name === "1️⃣" ||
                            reaction.emoji.name === "2️⃣" ||
                            reaction.emoji.name === "3️⃣" ||
                            reaction.emoji.name === "4️⃣" ||
                            reaction.emoji.name === "5️⃣" &&
                            user.id === this.message.author.id;

                        await message.awaitReactions(filter, {
                            max: 1,
                            errors: ["max"]
                        }).then(async collected => {
                            switch (collected.first().emoji.name) {
                                case "0️⃣":
                                    this.message.channel.send(
                                        new MessageEmbed()
                                            .setColor("#2f3136")
                                            .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                            .setDescription((reply.first().content))
                                            .attachFiles(zeroImg)
                                            .setThumbnail('attachment://0.png')
                                            .setTimestamp()

                                    ).then(async (message) => {
                                        await message.react('❤️').then().catch(console.error);

                                        const filter = (reaction, user) => reaction.emoji.name === "❤️" &&
                                            user.id === this.message.author.id;

                                        await message.awaitReactions(filter, {
                                            max: 1,
                                            errors: ["max"]
                                        })
                                    })    
                                    break       
                                case  "1️⃣":
                                    this.message.channel.send(
                                        new MessageEmbed()
                                            .setColor("#2f3136")
                                            .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                            .setDescription((reply.first().content))
                                            .attachFiles(unImg)
                                            .setThumbnail('attachment://1.png')
                                            .setTimestamp()
                                    ).then(async (message) => {
                                        await message.react('❤️').then().catch(console.error);

                                        const filter = (reaction, user) => reaction.emoji.name === "❤️" &&
                                            user.id === this.message.author.id;

                                        await message.awaitReactions(filter, {
                                            max: 1,
                                            errors: ["max"]
                                        })
                                    })    
                                    break       
                                case  "2️⃣":
                                    this.message.channel.send(
                                        new MessageEmbed()
                                            .setColor("#2f3136")
                                            .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                            .setDescription((reply.first().content))
                                            .attachFiles(deuxImg)
                                            .setThumbnail('attachment://2.png')    
                                            .setTimestamp()
                                    ).then(async (message) => {
                                        await message.react('❤️').then().catch(console.error);

                                        const filter = (reaction, user) => reaction.emoji.name === "❤️" &&
                                            user.id === this.message.author.id;

                                        await message.awaitReactions(filter, {
                                            max: 1,
                                            errors: ["max"]
                                        })
                                    })    
                                    break       
                                case  "3️⃣":
                                    this.message.channel.send(
                                        new MessageEmbed()
                                            .setColor("#2f3136")
                                            .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                            .setDescription((reply.first().content))
                                            .attachFiles(troisImg)
                                            .setThumbnail('attachment://3.png')   
                                            .setTimestamp()
                                    ).then(async (message) => {
                                        await message.react('❤️').then().catch(console.error);

                                        const filter = (reaction, user) => reaction.emoji.name === "❤️" &&
                                            user.id === this.message.author.id;

                                        await message.awaitReactions(filter, {
                                            max: 1,
                                            errors: ["max"]
                                        })
                                    })      
                                    break                  
                                case  "4️⃣":
                                    this.message.channel.send(
                                        new MessageEmbed()
                                            .setColor("#2f3136")
                                            .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                            .setDescription((reply.first().content))
                                            .attachFiles(quatreImg)
                                            .setThumbnail('attachment://4.png')   
                                            .setTimestamp()
                                    ).then(async (message) => {
                                        await message.react('❤️').then().catch(console.error);

                                        const filter = (reaction, user) => reaction.emoji.name === "❤️" &&
                                            user.id === this.message.author.id;

                                        await message.awaitReactions(filter, {
                                            max: 1,
                                            errors: ["max"]
                                        })
                                    })      
                                    break                      
                                case  "5️⃣":
                                    this.message.channel.send(
                                        new MessageEmbed()
                                            .setColor("#2f3136")
                                            .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                            .setDescription((reply.first().content))
                                            .attachFiles(cinqImg)
                                            .setThumbnail('attachment://5.png')   
                                            .setTimestamp()
                                    ).then(async (message) => {
                                        await message.react('❤️').then().catch(console.error);

                                        const filter = (reaction, user) => reaction.emoji.name === "❤️" &&
                                            user.id === this.message.author.id;

                                        await message.awaitReactions(filter, {
                                            max: 1,
                                            errors: ["max"]
                                        })
                                    })                      
                        }
                        })



                    })
                    })
                }
            }    
        }
    }
}

module.exports ={
    Avis
}