const Dsicord = require("discord.js")
require("dotenv").config()

const client = new Dsicord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

//client.on("ready", () => {
//    console.log('logged in as dice roller')
//});
let bot = {
    client, 
    prefix: "!",
    owners: ["327174128270573568"]
}

client.commands = new Dsicord.Collection()
client.events = new Dsicord.Collection()

client.loadevent = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadcommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadevent(bot, false)
client.loadcommands(bot, false)

module.exports = bot

//client.on("messageCreate", (message) => {
//    if (message.content == "hi"){
//        message.reply("hello world")
//    }
//})

client.login(process.env.TOKEN)