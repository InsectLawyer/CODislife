exports.run = (client, message, args) => {
    message.channel.send("!add").catch(console.error);
}