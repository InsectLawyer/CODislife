exports.run = (client, message, args) => {
    message.channel.send("!minimum").catch(console.error);
}