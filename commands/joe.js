exports.run = (client, message, args) => {
   var Jimp = require("jimp");
   var Attachment = require('discord.js').Attachment;
   
   function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
   }
   
   Jimp.read("./img/bidenjeb.png").then(function (joe) {
      var attach = message.attachments.array();
      var toRead = args[0];
      if (attach[0] != null) {
         toRead = attach[0].url;
      }
      Jimp.read(toRead).then(function (image) {
         var clone = image.clone();
         var filename = "image" + getRandomInt(1000) + ".png";
         var height = image.bitmap.height;
         var width = image.bitmap.width;
         joe.resize(width, Jimp.AUTO);
         height -= joe.bitmap.height;
         width = (width / 2) - (joe.bitmap.width / 2);
         if (height < 0) {
            height = 0;
         } 
         if (width < 0) {
            width = 0;
         }
         clone.composite(joe, width, height);
         clone.getBuffer(Jimp.MIME_PNG, function(err, buff) {
            if (err) {
               return;
            } else {
               message.channel.send(new Attachment(buff, filename)).catch(console.error);
            }
         });
         message.delete().catch(console.error);
      }).catch(function (err) {
         console.log(err);
      });
   }).catch(function (err) {
      console.log(err);
   });
}
