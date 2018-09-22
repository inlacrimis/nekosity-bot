exports.run = (config, bot, Discord, embed, COLORS, bot, neko, responses) => {
    neko.getSFWBaka().then((baka) => message.channel.send({
      file: baka.url
    })
  );
};
