module.exports = (bot, config, discord, embed, enmap, fs, ready, message) => {
  bot.on("ready", () => {
    bot.user.setActivity(`Serving ${bot.users.size} users`);
    console.log(`Ready to serve in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`);
  });

  bot.login(config.token);
}
