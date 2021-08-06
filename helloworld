const Discord = require('discord.js');
const token = DISCORD_BOT_TOKEN;
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
    client.user.setPresence({
        status: "online",
        activity: {
            name: "we do a little botting",
            type: "LISTENING"
        }
    });
    console.log(client);
});
client.on('message', message => {
    if (message.content == "cob!helloworld") { 
        message.channel.send("hello world");
    }
});
client.login(token);
