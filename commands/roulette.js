const { MessageEmbed, MessageAttachment } = require("discord.js");
const bleu = new MessageAttachment('./assets/img/bleu.png');
const rouge = new MessageAttachment('./assets/img/rouge.png');
const randomDice = () => Math.floor(Math.random() * 2 ) + 1;
const { PREFIX } = require("../config");

class Roulette {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }


    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "roulette":
                    this.Roulette(); 
                    break; 
            }
        }
    }



    Roulette() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "881598135510642780") { 

                    this.message.delete().then().catch(console.error)
                    if(this.args[0] === PREFIX + "roulette") {

                        this.message.channel.send(
                            new MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle("La roulette")
                                .setDescription("```Mise sur le rouge ou sur le bleu```")
                        ).then(async (message) => {
                            await message.react('🔴').then().catch(console.error);
                            await message.react('🔵').then().catch(console.error);

                            const filter = (reaction, user) => reaction.emoji.name === "🔴" ||
                                reaction.emoji.name === "🔵" &&
                                user.id === this.message.author.id;

                                await message.awaitReactions(filter, {
                                    max: 1,
                                    errors: ["max"]
                                }).then(async collected => {
                                    switch (collected.first().emoji.name) {
                                        case "🔴":
                                            if(randomDice() === 1) {
                                                this.message.channel.send(
                                                    new MessageEmbed()
                                                        .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                        .setColor("#4992ff")
                                                        .attachFiles(bleu)
                                                        .setThumbnail('attachment://bleu.png')
                                                        .setDescription("Tu as perdu")
                                                        .setFooter("Tape !roulette pour jouer.")
                                                )
                                            } else {
                                                this.message.channel.send(
                                                    new MessageEmbed()
                                                        .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                        .setColor("#ff4962")
                                                        .attachFiles(rouge)
                                                        .setThumbnail('attachment://rouge.png')
                                                        .setDescription("Tu as gagné")
                                                        .setFooter("Tape !roulette pour jouer.")
                                                )
                                                this.message.author.send(
                                                    new MessageEmbed()
                                                        .setColor("#f16179")
                                                        .setTitle("Surprise Surprise `👀`")
                                                        .setDescription("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                                                )
                                            }
                                            break
                                        case "🔵":
                                            if(randomDice() === 1) {
                                                this.message.channel.send(
                                                    new MessageEmbed()
                                                        .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                        .setColor("#4992ff")
                                                        .attachFiles(bleu)
                                                        .setThumbnail('attachment://bleu.png')
                                                        .setDescription("Tu as gagné")
                                                        .setFooter("Tape !roulette pour jouer.")
                                                )
                                                this.message.author.send(
                                                    new MessageEmbed()
                                                        .setColor("#f16179")
                                                        .setTitle("Surprise Surprise `👀`")
                                                        .setDescription("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                                                )
                                            } else {
                                                this.message.channel.send(
                                                    new MessageEmbed()
                                                        .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                        .setColor("#ff4962")
                                                        .attachFiles(rouge)
                                                        .setThumbnail('attachment://rouge.png')
                                                        .setDescription("Tu as perdu")
                                                        .setFooter("Tape !roulette pour jouer.")
                                                )
                                            }
                                            break
                                    }
                                })
                            });
                    }
            }    
        }
    }
}

module.exports ={
    Roulette
}