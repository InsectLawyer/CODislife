exports.run = (client, message, args) => {
    message.channel.send("!add !add foo").catch(console.error);
}