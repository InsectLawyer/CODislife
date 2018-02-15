exports.run = (client, message, args) => {
    message.channel.send("appear").catch(console.error);
}