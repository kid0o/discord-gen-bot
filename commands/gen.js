const Discord = require('discord.js')

module.exports.run = (bot, message, args, gen) => {
    //if(!gen.hasAccess(message.member)) return message.channel.send({embed:{title:`You don't have access Cry about it`, color:bot.color}})
    if(!gen.allowedChannel(message.channel)) return message.channel.send({embed:{title:`Gen can't be used in this channel!`, color:bot.color}})
    if (bot.cooldown.has(message.author.id)) {
            message.channel.send({embed:{title:`Please Wait For 5 Minute Cooldowm To Finish`, color:bot.color}})
    } else {
    let type = args[0]
    if(!type) return message.channel.send({embed:{title:`Usage: ${bot.prefix}gen <type>`, color:bot.color}})
    if(type==='free') return message.channel.send({embed:{title:`Please use ${bot.prefix}freegen`, color:bot.color}})
    let alt = gen.getAlt(type)
    if(!alt || alt === '') return message.channel.send({embed:{title:`We don't have those accounts in stock!`, color:bot.color}})
    let embed = new Discord.MessageEmbed()
    .setColor(bot.color)

    .setTitle('Enjoy Your Account!')
    .addField('Type', type)
    .addField('Username',alt.split(':')[0])
    .addField('Password',alt.split(':')[1])
    .addField('Important Message!','Do Not Change Login Information!')
    .setFooter('Made by ZeRealOne#3663','')
    .setTimestamp()
    message.author.send(embed)
    gen.removeAlt(type,alt)
    message.channel.send({embed:{title:`Account Sent To Your DMs`, color:bot.color}})
    bot.cooldown.add(message.author.id);
        setTimeout(() => {
          bot.cooldown.delete(message.author.id);
        }, 100000);
    // Its in milliseconds. 900000 = 15 mins so 300000 = 5 mins
    }
}

module.exports.help = {
    name: 'gen',
    aliases: ['generator']
}