exports.run = (client, message, args) => {
    message.channel.send("shack").catch(console.error);
}