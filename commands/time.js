exports.run = (client, message, args) => {
      console.log(`Called`);
      var interval = setInterval (function() {
      var date = new Date();
      var time = date.toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"});
      //console.log(`Checked time at :`, time);
      if (time  === "17:20") {
         message.channel.send("test message at 5:20").catch(console.error);
      }
   }, 60000);
}