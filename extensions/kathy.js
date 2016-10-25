/* Example file to demonstrate how to seperate botjs */

module.exports = function(controller) {
	controller.hears(['hi', 'hello'], 
	  ['ambient', 'direct_message','direct_mention','mention'], 
	  function (bot, message) {
	    bot.api.reactions.add({
	        timestamp: message.ts,
	        channel: message.channel,
	        name: 'robot_face',
	    }, function(err, res) {
	        if (err) {
	            bot.botkit.log('Failed to add emoji reaction :(', err);
	        }
	    });


	    controller.storage.users.get(message.user, function(err, user) {
	        if (user && user.name) {
	            bot.reply(message, 'Hello ' + user.name + '!!');
	        } else {
	            bot.reply(message, 'Hello!!!!!!');
	        }
	    });
	  //bot.reply(message, 'Hello.')
	})	
};

