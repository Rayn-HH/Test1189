const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("634765580787908609")
setInterval(function() {
channel.send(`Yo Wassap Yo Wassap YO WASSAP`);
}, 30)
})

client.login(process.env.BOT_TOKEN);