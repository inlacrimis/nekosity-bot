const fs = require("fs");
const Enmap = require("enmap");
const Discord = require("discord.js");
const bot = new Discord.Client();
const client = require('nekos.life');
const neko = new client();
const config = require("./config.json");
const embed = require('discord-embed-maker');
const COLORS = {
    Reset: "\x1b[0m",
    FBlack: "\x1b[30m",
    FRed: "\x1b[31m",
    FGreen: "\x1b[32m",
    FYellow: "\x1b[33m",
    FBlue: "\x1b[34m",
    FMagenta: "\x1b[35m",
    FCyan: "\x1b[36m",
    FWhite: "\x1b[37m",
    BBlack: "\x1b[40m",
    BRed: "\x1b[41m",
    BGreen: "\x1b[42m",
    BYellow: "\x1b[43m",
    BBlue: "\x1b[44m",
    BMagenta: "\x1b[45m",
    BCyan: "\x1b[46m",
    BWhite: "\x1b[47m"
};

bot.commands = new Enmap();

fs.readdir("C:/Users/HP/Desktop/Naisu/commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    bot.commands.set(ban, purge, baka, neko, invite, cointoss, ask, help, kick, avatar, bio, say, ping, props);
  });
});

bot.on("ready", () => {

  bot.user.setActivity(`Serving ${bot.users.size} users`);
  console.log(`Ready to serve in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`);

  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, message, args);
});

bot.login(config.token);
