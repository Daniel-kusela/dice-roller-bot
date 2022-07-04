const Dsicord = require("discord.js")
require("dotenv").config()

const client = new Dsicord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log('logged in as dice roller')
});

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello world")
    }
})

client.login(process.env.TOKEN)