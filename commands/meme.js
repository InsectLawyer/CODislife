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
        let height = image.bitmap.height + 300;
        let width = image.bitmap.width;
        if (width < 900) width = 900;

        //console.log("success preedit");
        //console.log(height);
        //console.log(width);
        new Jimp(width, height, 0x00ff001C, (err, newImage) => {
            //console.log("Made new image");
            newImage.composite(image, 0, 150);
            //console.log("composited");
            Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(font => {
                newImage.print(font, 0, 0, "WHO DID THIS"); 
                     //{
                        //"WHO DID THIS",
                        //Jimp.HORIZONTAL_ALIGN_CENTER,
                        //Jimp.VERTICAL_ALIGN_TOP
                    //},
                    //width,
                    //150
                //);
                //console.log("printed text");

                newImage.getBuffer(Jimp.MIME_PNG, function(err, buff) {
                    if (err) {
                        return;
                    } else {
                        message.channel.send(new Attachment(buff, filename)).catch(console.error);
                    }
                });
            }).catch(function (err) {
                console.log(err);
            });
        });
        message.delete().catch(console.error);
    }).catch(function (err) {
        console.log(err);
    });
};
