exports.run = (client, message, args) => {
    message.channel.send("!break").catch(console.error);
}