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
        let filename = "MyMeme" + getRandomInt(1000) + ".png";
        let height = image.bitmap.height;
        let width = image.bitmap.width;
        if (width < 750) width = 750;

        console.log("success preedit");
        new Jimp(height + 300, width, '#000000').then(function(err, newImage) {
            console.log("Made new image");
            newImage.composite(image, 0, 150);
            Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(font => {
                newImage.print(
                    font,
                    0,
                    0,
                    {
                        text: 'WHO DID THIS',
                        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                        alignmentY: Jimp.VERTICAL_ALIGN_TOP
                    }
                );
                console.log("printed text");

                newImage.getBuffer(Jimp.MIME_PNG, function(err, buff) {
                    if (err) {
                        return;
                    } else {
                        message.channel.send(new Attachment(buff, filename)).catch(console.error);
                    }
                });
            });
        }).catch(function (err) {
            console.log(err);
        });


        message.delete().catch(console.error);
    }).catch(function (err) {
        console.log(err);
    });
}
