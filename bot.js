// get dotenv
require('dotenv').config();

// define intents
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages]});

// login message
client.once('ready', () => {
 console.log(`${client.user.tag} is now logged in.`);
});

// logging in bot
client.login(process.env.CLIENT_TOKEN);