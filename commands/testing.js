exports.run = (client, message, args) => {
    message.channel.send("is it broke").catch(console.error);
}