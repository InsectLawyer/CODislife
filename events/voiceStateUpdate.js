exports.run = (client, oldMember, newMember) => {
   // If someone is playing CSGO and enters a voice channel, Assembles crew
   var channel = client.channels.get("187700521912500225");
   if (newMember.voiceChannel) {
      if (newMember.presence.game) {
         if (newMember.presence.game.name === "Counter-Strike Global Offensive") {
            channel.send('@everyone Assemble the Crew').catch(console.error);
         }
      }
   }
}