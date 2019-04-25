exports.run = (client, oldMember, newMember) => {
   // If someone is playing CSGO and enters a voice channel, Assembles crew
   var channel = client.channels.get("187700521912500225");
   //var voice = client.channels.get('226492992242843649')
   console.log(newMember.voiceChannel.name);
   if (newMember.voiceChannel.name.localeCompare("The Situation Room") == 0) {
      //console.log(newMember.voiceChannel);
      //var ppl = channel.members.size;
      //if (newMember.presence.game && newMember.presence.game.name === "Counter-Strike Global Offensive") {
         //var mes = '@everyone Assemble the Crew. ';
         //var limit = newMember.voiceChannel.userLimit;
         //if (limit > 0) {
         //   mes += ppl + "/" + limit + " assembled";
         //}
         var mes = "@everyone THERE IS A SITUATION ENTER THE SITUATION ROOM STAT";
         channel.send(mes).catch(console.error);
         channel.send("I am going to piss my pants").catch(console.error);
      //}
   }
}
