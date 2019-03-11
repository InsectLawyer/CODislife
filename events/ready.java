exports.run = (client) => {
   client.user.setActivity(`Call of Duty`);
   console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
   var channel = client.channels.get("187700521912500225");
   var interval = setInterval (function() {
      var date = new Date();
      var time = date.toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"});
      //console.log(`Checked time at :`, time);
      if (time  === "23:20") {
         // daylight time  === "00:20"
         // else === "23:20"
         channel.send("cod is life").catch(console.error);
      }
   }, 60000);
}
  
