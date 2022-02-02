'use strict';
require('dotenv').config();
const { Client, Intents } = require("discord.js");
const { readdirSync } = require('fs');
const client = new Client({intents: Intents.FLAGS.GUILDS});
const path = './commands/';
client.on('ready',()=>{
    for (const iterator of readdirSync(path,'utf-8')) {
        if(iterator.includes('.js')) require(`${path}/${iterator}`)(client);
    }    
});
client.login();