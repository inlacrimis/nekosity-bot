exports.run = (config, bot, Discord, embed, COLORS, bot, neko, responses) => {
  if(message.channel.nsfw) {
    neko.getNSFWNeko().then((url1) => message.channel.send({
      file: url1.url
    })
    );
  }
  } else {
      neko.getSFWNeko().then((url1) => message.channel.send({
        file: url1.url
      })
      );
  };
