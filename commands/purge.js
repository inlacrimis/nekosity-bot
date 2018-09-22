exports.run = (config, bot, Discord, embed, colors, neko, app) => {
  const deleteCount = parseInt(args[0], 10);
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("",
    embed.setTitle(`Error:`),
    embed.setDescription(`Please provide a number between 2 - 100 senpaiii ^w^`)
  );

  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}
