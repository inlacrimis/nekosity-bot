exports.run = (config, bot, Discord, embed, colors, neko, app) => {
  if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
    return message.reply("",
      embed.setTitle(`Error:`),
      embed.setDescription(`NANI?! You don't have enough permissions.`)
  );

  let member = message.mentions.members.first();
  if(!member)
    return message.reply("",
      embed.setTitle(`Error:`),
      embed.setDescription(`Please mention a valid user. senpaiii ^w^`)
  );
  if(!member.bannable)
    return message.reply("",
      embed.setTitle(`Error:`),
      embed.setDescription(`Gomenasaii!!! (sorry) the person you wanted to ban has higher role than me ;-;`)
  );

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";

  await member.ban(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
  message.reply(``,
    embed.setTitle(`Senpaii i banned the user you wanted me to ban! ^w^`),
    embed.addField(`${member.user.tag} has been banned`, `by ${message.author.tag} because: ${reason}`, true)
  );
}
