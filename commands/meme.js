exports.run = (client, message, args) => {
    import("jimp");

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
        image.autocrop();
        let filename = "MyMeme" + getRandomInt(1000) + ".png";
        let height = image.bitmap.height;
        let width = image.bitmap.width;

        image.resize(width, height + 300);

        Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(font => {
            // load font from .fnt file
            image.print(font, 0, 0, "TEST MESSAGE");
        });


        image.getBuffer(Jimp.MIME_PNG, function(err, buff) {
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