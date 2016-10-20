controller.hears(['test', 'testing'],
  'direct_message,direct_mention,mention,ambient', function(bot, message) {
    bot.reply(message, 'hello cruel world')
})