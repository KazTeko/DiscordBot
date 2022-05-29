const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"]},{partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const mongoose = require("mongoose");

require ('dotenv').config();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler =>{require(`./handlers/${handler}`)(client, Discord);
})
mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(()=>{
    console.log("Connected To Database");
}).catch((err) =>{
    console.log(err);
});

client.login(process.env.DISCORD_TOKEN);