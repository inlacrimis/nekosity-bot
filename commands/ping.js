exports.run = (config, bot, Discord, embed, colors, neko, app) => {
  const m = await message.channel.send("Ping?");
  m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API is ${Math.round(bot.ping)}ms`);
}
