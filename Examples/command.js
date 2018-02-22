exports.run = (client, message, args) => {
    message.channel.send("Your Text Here").catch(console.error);
}