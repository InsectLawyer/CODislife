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
        image.autocrop();
        let filename = "MyMeme" + getRandomInt(1000) + ".png";
        let height = image.bitmap.height;
        let width = image.bitmap.width;

        image.resize(width, height + 300);
        console.log(Jimp.FONT_SANS_64_WHITE);

        Jimp.loadFont("./node_modules/jimp/fonts/open-sans/open-sans-64-white/open-sans-64-white.fnt").then(font => {
            image.print(
                font,
                0,
                0,
                {
                    text: "TEST MESSAGE",
                    alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                    alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                }
                // maxWidth,
                // maxHeight
            ); // prints 'Hello world!' on an image, middle and center-aligned, when x = 0 and y = 0
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