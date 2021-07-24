const { MessageEmbed, MessageAttachment } = require("discord.js");
const pecheImg = new MessageAttachment('./assets/img/84451.png');
const ceriseImg = new MessageAttachment('./assets/img/7889.png');
const melonImg = new MessageAttachment('./assets/img/5556.png');
const raisinImg = new MessageAttachment('./assets/img/765560.png');
const { PREFIX } = require("../config");

class Rencontre {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }

    
    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "rencontre":
                    this.rencontre(); 
                    break; 
            }
        }
    }

    rencontre() {
        if(this.message.author.id !== this.client.user.id) {
            if(this.message.channel.id === "862784305439834142") {

                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "rencontre") {
                    
                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .setDescription("Bonjour ! que dirais-tu de poster ton profil afin de rencontrer le type de personne que tu cherches ?\n ```Pour commencer décris toi brièvement ici.```")
                    ).then(async (message) => {
                        const filter = message => message.author.id === this.message.author.id;

                        let reply7 = await message.channel.awaitMessages(filter,  {
                            maxProcessed: 1,
                            time: 3600000,
                            errors: ["time"]
                        });    

                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .setDescription("Après t'être décris envoie une photo de ton choix.\n ```Il te suffit de joindre une image par discord pour finaliser ton profil.```")
                    ).then(async (message) => {
                        const filter = message => message.author.id === this.message.author.id;

                        let reponse = await message.channel.awaitMessages(filter, {
                            maxProcessed: 1,
                            time: 3600000,
                            errors: ["time"]
                        });

                        this.message.author.send(
                            new MessageEmbed()
                                .setColor("#2f3136")
                                .addFields(
                                    {
                                        name: "Quel type de rencontre recherchez-vous ?.",
                                        value: "```🍑 pour trouver un coup d'un soir. \n🍒 pour trouver votre moitié. \n🍉 pour trouver un sexfirend. \n🍇 pour trouver des amis.```",
                                        inline: false
                                    }
                                )
                        ).then(async (message) => {
                            await message.react('🍑').then().catch(console.error);
                            await message.react('🍒').then().catch(console.error);
                            await message.react('🍉').then().catch(console.error);
                            await message.react('🍇').then().catch(console.error);

                            const filter = (reaction, user) => reaction.emoji.name ===  "🍑" ||
                                reaction.emoji.name === "🍒" ||
                                reaction.emoji.name === "🍉" ||
                                reaction.emoji.name === "🍇" &&
                                user.id === this.message.author.id;

                            await message.awaitReactions(filter, {
                                max: 1,
                                errors: ["max"]
                            }).then(async collected => {
                                switch (collected.first().emoji.name) {
                                    case "🍑":
                                        this.message.author.send(
                                            new MessageEmbed()
                                                .setColor("#2f3136")
                                                .addFields(
                                                    {
                                                        name: "Confirmer ou non la réaction du sondage.",
                                                        value: "```Réagis par ✅ pour confirmer ; Réagis par ❌ pour avorter.```",
                                                        inline: false
                                                    }
                                                )
                                        ).then(async (message) => {
                                            await message.react('✅').then().catch(console.error);
                                            await message.react('❌').then().catch(console.error);

                                            const filter = (reaction, user) => reaction.emoji.name === "✅" ||
                                                reaction.emoji.name === "❌" &&
                                                user.id === this.message.author.id;

                                            await message.awaitReactions(filter, {
                                                max: 1,
                                                errors: ["max"]
                                            }).then(async collected => {
                                                switch (collected.first().emoji.name) {
                                                    case "✅":
                                                        this.message.member.roles.add("862837471774638110").then().catch(console.error)
                                                        let guild = this.client.guilds.cache.some(fn => fn.id === "862781120540835901") ? this.client.guilds.cache.get("862781120540835901") : null;
                                                        if(guild !== null) {
                                                            let channel = guild.channels.cache.some(fn => fn.id === "862836441600360478") ? guild.channels.cache.get("862836441600360478") : null;
                                                            if(channel !== null) {
                                                                channel.send(
                                                                    new MessageEmbed()
                                                                    .setColor("#ff9e80")
                                                                    .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                                    .setDescription(`**Ma description:** \n${(reply7.first().content)} \n \n` + `\n\n Auteur: ${this.message.author}`)
                                                                    .attachFiles(pecheImg)
                                                                    .setThumbnail('attachment://84451.png')
                                                                    .setImage(reponse.first().attachments.array()[0].proxyURL)
                                                                    .setFooter(this.message.guild.name, this.message.guild.iconURL()) 
                                                                ).then(async (message) => {
                                                                    await message.react('❌').then().catch(console.error);
                                                                    await message.react('❤️').then().catch(console.error);
                                                                    await message.react('💛').then().catch(console.error);

                                                                    const filter = (reaction, user) => reaction.emoji.name === "❌" ||
                                                                        reaction.emoji.name === "❤️" ||
                                                                        reaction.emoji.name === "💛" &&
                                                                        user.id === this.message.author.id;

                                                                    await message.awaitReactions(filter, {
                                                                        max: 1,
                                                                        errors: ["max"]
                                                                    })
                                                                })
                                                            }
                                                        }
                                                        message.edit(
                                                            `Vous avez ajouté avec succès votre présentation !`
                                                        ).then().catch(console.error);
                                                        break;
                                                    case "❌":
                                                        await this.message.author.send(
                                                            `WARNING: Vous avez décidé d'annuler l'opération.`
                                                        ).then().catch(console.error);
                                                        break;
                                                };
                                            });
                                        }).then().catch(console.error);
                                        break;
                                    case "🍒":
                                        this.message.author.send(
                                            new MessageEmbed()
                                                .setColor("#2f3136")
                                                .addFields(
                                                    {
                                                        name: "Confirmer ou non la réaction du sondage.",
                                                        value: "```Réagis par ✅ pour confirmer ; Réagis par ❌ pour avorter.```",
                                                        inline: false
                                                    }
                                                )
                                        ).then(async (message) => {
                                            await message.react('✅').then().catch(console.error);
                                            await message.react('❌').then().catch(console.error);

                                            const filter = (reaction, user) => reaction.emoji.name === "✅" ||
                                                reaction.emoji.name === "❌" &&
                                                user.id === this.message.author.id;

                                            await message.awaitReactions(filter, {
                                                max: 1,
                                                errors: ["max"]
                                            }).then(async collected2 => {
                                                switch (collected2.first().emoji.name) {
                                                    case "✅":
                                                        this.message.member.roles.add("862837471774638110").then().catch(console.error)
                                                        let guild = this.client.guilds.cache.some(fn => fn.id === "862781120540835901") ? this.client.guilds.cache.get("862781120540835901") : null;
                                                        if(guild !== null) {
                                                            let channel = guild.channels.cache.some(fn => fn.id === "862836441600360478") ? guild.channels.cache.get("862836441600360478") : null;
                                                            if(channel !== null) {
                                                                channel.send(
                                                                    new MessageEmbed()
                                                                .setColor("#db4437")
                                                                .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                                .setDescription(`**Ma description:** \n${(reply7.first().content)} \n \n` + `\n\n Auteur: ${this.message.author}`)
                                                                .attachFiles(ceriseImg)
                                                                .setThumbnail('attachment://7889.png')
                                                                .setImage(reponse.first().attachments.array()[0].proxyURL)
                                                                .setFooter(this.message.guild.name, this.message.guild.iconURL())
                                                                ).then(async (message) => {
                                                                    await message.react('❌').then().catch(console.error);
                                                                    await message.react('❤️').then().catch(console.error);
                                                                    await message.react('💛').then().catch(console.error);

                                                                    const filter = (reaction, user) => reaction.emoji.name === "❌" ||
                                                                        reaction.emoji.name === "❤️" ||
                                                                        reaction.emoji.name === "💛" &&
                                                                        user.id === this.message.author.id;

                                                                    await message.awaitReactions(filter, {
                                                                        max: 1,
                                                                        errors: ["max"]
                                                                    })
                                                                })
                                                            }
                                                        }
                                                        message.edit(
                                                            `Vous avez ajouté avec succès votre présentation !`
                                                        ).then().catch(console.error);
                                                        break;
                                                    case "❌":
                                                        await this.message.author.send(
                                                            `WARNING: Vous avez décidé d'annuler l'opération.`
                                                        ).then().catch(console.error);
                                                        break;  
                                                };
                                            });
                                        }).then().catch(console.error);
                                        break; 
                                    case "🍉":
                                        this.message.author.send(
                                            new MessageEmbed()
                                                .setColor("#2f3136")
                                                .addFields(
                                                    {
                                                        name: "Confirmer ou non la réaction du sondage.",
                                                        value: "```Réagis par ✅ pour confirmer ; Réagis par ❌ pour avorter.```",
                                                        inline: false
                                                    }
                                                )
                                        ).then(async (message) => {
                                            await message.react('✅').then().catch(console.error);
                                            await message.react('❌').then().catch(console.error);

                                            const filter = (reaction, user) => reaction.emoji.name === "✅" ||
                                                reaction.emoji.name === "❌" &&
                                                user.id === this.message.author.id;

                                            await message.awaitReactions(filter, {
                                                max: 1,
                                                errors: ["max"]
                                            }).then(async collected3 => {
                                                switch (collected3.first().emoji.name) {
                                                    case "✅":
                                                        this.message.member.roles.add("862837471774638110").then().catch(console.error)
                                                        let guild = this.client.guilds.cache.some(fn => fn.id === "862781120540835901") ? this.client.guilds.cache.get("862781120540835901") : null;
                                                        if(guild !== null) {
                                                            let channel = guild.channels.cache.some(fn => fn.id === "862836441600360478") ? guild.channels.cache.get("862836441600360478") : null;
                                                            if(channel !== null) {
                                                                channel.send(
                                                                    new MessageEmbed()
                                                                .setColor("#f05b5a")
                                                                .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                                .setDescription(`**Ma description:** \n${(reply7.first().content)} \n \n` + `\n\n Auteur: ${this.message.author}`)
                                                                .attachFiles(melonImg)
                                                                .setThumbnail('attachment://5556.png')
                                                                .setImage(reponse.first().attachments.array()[0].proxyURL)
                                                                .setFooter(this.message.guild.name, this.message.guild.iconURL())
                                                                ).then(async (message) => {
                                                                    await message.react('❌').then().catch(console.error);
                                                                    await message.react('❤️').then().catch(console.error);
                                                                    await message.react('💛').then().catch(console.error);

                                                                    const filter = (reaction, user) => reaction.emoji.name === "❌" ||
                                                                        reaction.emoji.name === "❤️" ||
                                                                        reaction.emoji.name === "💛" &&
                                                                        user.id === this.message.author.id;

                                                                    await message.awaitReactions(filter, {
                                                                        max: 1,
                                                                        errors: ["max"]
                                                                    })
                                                                })
                                                            }
                                                        }
                                                        message.edit(
                                                            `Vous avez ajouté avec succès votre présentation !`
                                                        ).then().catch(console.error);
                                                        break;
                                                    case "❌":
                                                        await this.message.author.send(
                                                            `WARNING: Vous avez décidé d'annuler l'opération.`
                                                        ).then().catch(console.error);
                                                        break;
                                                }; 
                                            });
                                        }).then().catch(console.error);
                                        break;    
                                    case "🍇":
                                        this.message.author.send(
                                            new MessageEmbed()
                                                .setColor("#2f3136")
                                                .addFields(
                                                    {
                                                        name: "Confirmer ou non la réaction du sondage.",
                                                        value: "```Réagis par ✅ pour confirmer ; Réagis par ❌ pour avorter.```",
                                                        inline: false
                                                    }
                                                )
                                        ).then(async (message) => {
                                            await message.react('✅').then().catch(console.error);
                                            await message.react('❌').then().catch(console.error);

                                            const filter = (reaction, user) => reaction.emoji.name === "✅" ||
                                                reaction.emoji.name === "❌" &&
                                                user.id === this.message.author.id;

                                            await message.awaitReactions(filter, {
                                                max: 1,
                                                errors: ["max"]
                                            }).then(async collected4 => {
                                                switch (collected4.first().emoji.name) {
                                                    case "✅":
                                                        this.message.member.roles.add("862837471774638110").then().catch(console.error)
                                                        let guild = this.client.guilds.cache.some(fn => fn.id === "862781120540835901") ? this.client.guilds.cache.get("862781120540835901") : null;
                                                        if(guild !== null) {
                                                            let channel = guild.channels.cache.some(fn => fn.id === "862836441600360478") ? guild.channels.cache.get("862836441600360478") : null;
                                                            if(channel !== null) {
                                                                channel.send(
                                                                    new MessageEmbed()
                                                                    .setColor("#9266cc")
                                                                    .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                                    .setDescription(`**Ma description:** \n${(reply7.first().content)} \n \n` + `\n\n Auteur: ${this.message.author}`)
                                                                    .attachFiles(raisinImg)
                                                                    .setThumbnail('attachment://765560.png')
                                                                    .setImage(reponse.first().attachments.array()[0].proxyURL)
                                                                    .setFooter(this.message.guild.name, this.message.guild.iconURL())
                                                                ).then(async (message) => {
                                                                    await message.react('❌').then().catch(console.error);
                                                                    await message.react('❤️').then().catch(console.error);
                                                                    await message.react('💛').then().catch(console.error);

                                                                    const filter = (reaction, user) => reaction.emoji.name === "❌" ||
                                                                        reaction.emoji.name === "❤️" ||
                                                                        reaction.emoji.name === "💛" &&
                                                                        user.id === this.message.author.id;

                                                                    await message.awaitReactions(filter, {
                                                                        max: 1,
                                                                        errors: ["max"]
                                                                    })
                                                                })
                                                            }
                                                        }
                                                        message.edit(
                                                            `Vous avez ajouté avec succès votre présentation !`
                                                        ).then().catch(console.error);
                                                        break;
                                                    case "❌":
                                                        await this.message.author.send(
                                                            `WARNING: Vous avez décidé d'annuler l'opération.`
                                                        ).then().catch(console.error);
                                                        break;   
                                                };
                                            });
                                        }).then().catch(console.error);
                                        break;   

                                };  
                            })
                        })  
                    })
                    }) 
                }
            }
        }
    }
}  

module.exports ={
    Rencontre
}