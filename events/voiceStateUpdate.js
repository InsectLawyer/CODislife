exports.run = (client, oldMember, newMember) => {
   // If someone is playing CSGO and enters a voice channel, Assembles crew
   var channel = client.channels.get("187700521912500225");
   if (newMember.voiceChannel && !newMember.voiceChannel.full) {
      console.log(newMember.voiceChannel);
      var ppl = channel.members.size;
      if (newMember.presence.game && newMember.presence.game.name === "Counter-Strike Global Offensive") {
         var mes = '@everyone Assemble the Crew. ';
         var limit = newMember.voiceChannel.userLimit;
         if (limit > 0) {
            mes += ppl + "/" + limit + " assembled";
         }
         channel.send(mes).catch(console.error);
      }
   }
}