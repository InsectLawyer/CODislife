exports.run = (client, oldMember, newMember) => {
   var channel = client.channels.get("187700521912500225");
   if (newMember.voiceChannel) {
      if (newMember.presence.game.name === "Counter-Strike Global Offensive") {
         channel.send('@everyone Assemble the Crew').catch(console.error);
      }
   }
}