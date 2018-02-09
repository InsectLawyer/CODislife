exports.run = (client, message, args) => {
    message.channel.send("for real").catch(console.error);
}