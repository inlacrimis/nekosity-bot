exports.run = (config, bot, Discord, embed, colors, neko, app) => {
  message.channel.send("",
    embed.setAuthor(`My biography:`),
    embed.setTitle(`Click here to invite me!`).setURL(`https://bit.ly/2OIzzNF`),
    embed.setThumbnail("https://i.imgur.com/1jrAE1m.jpg"),
    embed.addField(`Full Name:`, `Naisu Martini`, true),
    embed.addField(`Nickname:`, `nekosity`, true),
    embed.addField(`Age:`, `14`, true),
    embed.addField(`Gender:`, `Female`, true),
    embed.addField(`Built:`, `Atom 21/9/2018`, true),
    embed.addField(`Nationality:`, `Turkish :flag_tr:`, true),
    embed.addField(`Zodiac:`, `Libra`, true),
    embed.addField(`Blood type:`, `O`, true),
    embed.addField(`Owner:`, `<@278223330706980864>`, true),
  );
};
