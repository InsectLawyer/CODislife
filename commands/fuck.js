exports.run = (client, message, args) => {
    message.channel.send("```css\nbees\n```").catch(console.error);
}