'use strict';
require('dotenv').config();
const { Client, Intents, MessageEmbed } = require("discord.js");
const { readdirSync } = require('fs');
const client = new Client({intents: Intents.FLAGS.GUILDS});
const path = './commands/';
client.on('ready',()=>{
    client.user.presence.set({
        status: 'online',
        activities: [{
            name:'water boil',
            type: 'WATCHING',
        }]
    })
    for (const iterator of readdirSync(path,'utf-8')) {
        if(iterator.includes('.js')) require(`${path}/${iterator}`)(client);
    }
});

client.login();