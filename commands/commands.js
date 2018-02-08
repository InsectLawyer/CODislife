exports.run = (client, message, args) => {
   const readline = require('readline');
   const fs = require('fs');
   var lineReader = require('readline').createInterface({
      input: fs.createReadStream('..\\cod\\commands\\commands.txt')
   });
   var response = [];
   lineReader.on('line', function (line) {
         response.push('!' + line);
   });
   console.log('response', response);
   message.channel.send(response.toString()).catch(console.error);
}