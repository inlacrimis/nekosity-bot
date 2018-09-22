exports.run = (config, bot, Discord, embed, COLORS, bot, neko, responses) => {
  if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
    return message.reply("",
      embed.setTitle(`Error:`),
      embed.setDescription(`NANI?! You don't have enough permissions.`)
  );

  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.reply("",
      embed.setTitle(`Error:`),
      embed.setDescription(`Please mention a valid user. senpaiii ^w^`)
  );
  if(!member.kickable)
    return message.reply("",
      embed.setTitle(`Error:`),
      embed.setDescription(`Gomenasaii!!! (sorry) the person you wanted to ban has higher role than me ;-;`)
  )

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  await member.kick(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
  message.reply(``,
    embed.setTitle(`Senpaii i kicked the user you wanted me to kick! ^w^`),
    embed.addField(`${member.user.tag} has been kicked`, `by ${message.author.tag} because: ${reason}`, true)
  );
}
