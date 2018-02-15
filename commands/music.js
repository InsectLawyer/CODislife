exports.run = (client, message, args) => {
//const ytdl = require('..');
const fs = require('fs');
var filename = './music/' + args[0] + '.wav';
console.log(filename);
 if (message.member.voiceChannel) {
   message.member.voiceChannel.join()
     .then(connection => { // Connection is an instance of VoiceConnection
       message.reply('I have successfully connected to the channel!');
       var dispatcher = connection.playFile(filename);
        //const url = 'https://www.youtube.com/watch?v=wAu_fYHZKLs&list=LLcwy7e-9ADZK7BMxtd8B5AA&index=7';
        //const stream = ytdl('https://www.youtube.com/watch?v=wAu_fYHZKLs&list=LLcwy7e-9ADZK7BMxtd8B5AA&index=7', { filter: 'audioonly' });
        //const dispatcher = connection.playStream(stream);
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave();
        });
         
      dispatcher.on('error', e => {
        // Catch any errors that may arise
        console.log(e);
        message.reply('Bad input :(');
      });
     })
     .catch(console.log);
 } else {
   message.reply('You need to join a voice channel first!');
 }
}