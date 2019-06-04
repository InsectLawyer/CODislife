exports.run = (client, message, args) => {

    let Jimp = require("jimp");
    let Attachment = require('discord.js').Attachment;

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    let attach = message.attachments.array();
    let toRead = args[0];
    if (attach[0] != null) {
        toRead = attach[0].url;
    }
    Jimp.read(toRead).then(function (image) {
        let clone = image.clone();
        let filename = "MyMeme" + getRandomInt(1000) + ".png";
        let height = image.bitmap.height;
        let width = image.bitmap.width;

        clone.resize(width, height + 300);

        Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(font => {
            clone.print(font, 10, 10, "TEST MESSAGE");
        });


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
    // }).catch(function (err) {
    //     console.log(err);
    // });
}
