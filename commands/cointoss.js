function coinToss() {
  var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];
  return rand[Math.floor(Math.random()*rand.length)];
}

exports.run = (config, bot, Discord, embed, COLORS, bot, neko, responses) => {
  message.channel.send(coinToss())
};
