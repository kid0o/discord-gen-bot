const Discord = require('discord.js')
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Bot Commands')
    .setColor(bot.color)
    .setDescription('Generator Commands')
    .addField('$help','Shows All Available Commands (this command)')
    .addField('$gen (acc type)','Generates An Account')
    .addField('$stock','Shows A List Of All Accounts In The Stock')
    .setFooter('Made by ZeRealOne#3663','')
    .setTimestamp()
       message.channel.send(embed)
       setTimeout(() => message.delete(), 10000);
    }
    
module.exports.help = {
    name: 'help',
    aliases: []
}