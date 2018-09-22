exports.run = (config, bot, Discord, embed, COLORS, bot, neko, responses) => {
  let user = message.mentions.users.first() || message.author;
  let avatar = new Discord.RichEmbed()
  .setAuthor(`${user.username}`)
  .setImage (user.displayAvatarURL)

  message.channel.send(avatar)
};
