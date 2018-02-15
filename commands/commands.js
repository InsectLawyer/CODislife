exports.run = (client, message, args) => {
   const fs = require('fs');
   var files = fs.readdirSync('./commands');
   message.channel.send(files);
}