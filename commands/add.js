exports.run = (client, message, args) => {
   const fs = require('fs');
   var filename = args[0];
   if (filename === "add" | filename === "commands" | filename === "time") {
      message.channel.send("Fuck You John");
      return console.log('Fuckeroni');
   }
   var response = args.slice(1).join(" ");
   var content = "exports.run = (client, message, args) => {\n" + 
         "    message.channel.send(\"" + response +
         "\").catch(console.error);\n" + "}";
   var js = "./commands/" + filename + ".js";
   fs.writeFile(js, content, (err) => { 
      if (err) {
         message.channel.send("Error: Bad Input");
         return console.log(err);
      }
      
      console.log(`Saved command : !`, filename);
      console.log(`Response :`, response);
      message.channel.send("Saved command : !" + filename).catch(console.error);
      message.channel.send("Response : " + response).catch(console.error);
      
      fs.appendFile('./commands/commands.txt', "\n" + filename, function (err) {
         if (err) throw err;
         console.log('Logged Command');
      });
   });
   
}