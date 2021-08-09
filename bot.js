const Discord = require('discord.js');
const { DISCORD_BOT_TOKEN } = process.env;
const client = new Discord.Client();

const MongoDB = require('mongodb');
const { MONGODB_URL } = process.env
const mongoDBClient = new MongoClient(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = new db("test", MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

client.once('ready', () => {
    console.log('Ready!');
    client.user.setPresence({
        status: 'online',
        activity: {
            name: 'we do a little botting',
            type: 'LISTENING',
        },
    });
    console.log(client);
});

client.on('message', (message) => {
    if (message.content == 'c!helloworld') {
        message.channel.send('hello world');
    }
    if (message.content == 'c!insertshit') {
        db.user.insert({ name: "ae", id: 42052457938467932452523485284529845275489238945230230101548302 })
        message.channel.send('inserted');
    }
    if (message.content == 'c!readdb') {
        message.channel.send(db.user.find({}));
    }
});

client.login(DISCORD_BOT_TOKEN);
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
