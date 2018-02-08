exports.run = (client, message, args) => {
    message.channel.send("you alive?").catch(console.error);
}