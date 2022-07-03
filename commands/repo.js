const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
const disbut = require('discord-buttons');
disbut(client);

module.exports.run = async (bot, message, args, gen) => {
  let button = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://github.com/zerealone/discord-gen-bot')
  .setLabel('Click here')

    message.channel.send('This bot is made by ZeRealOne#3663, click on the button to go to the github repository of this bot.', button);
  }

module.exports.help = {
name: 'repo',
aliases: ['dev']
}