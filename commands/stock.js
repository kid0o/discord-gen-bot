const Discord = require('discord.js')
 
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.MessageEmbed()
     .setTitle('Accounts in stock')
     .setColor(bot.color)
     .setFooter('Made by ZeRealOne#3663')
     .setTimestamp()
     gen.calculateStock()
     setTimeout(() => {
         const stock = gen.stock
        for(const type of stock) {
            embed.addField(type[0], type[1], true)
        }
        message.channel.send(embed)
        setTimeout(() => message.delete(), 10000);
     }, 200);
     
 }
 module.exports.help = {
     name: 'stock',
     aliases: ['accounts', 'allstock']
 }