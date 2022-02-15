'use strict';
require('dotenv').config();
const { Client, Intents, MessageEmbed } = require("discord.js");
const { readdirSync } = require('fs');
const client = new Client({intents: [Intents.FLAGS.GUILDS,
                                    Intents.FLAGS.DIRECT_MESSAGES,
                                    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
                                    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
                                    Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const path = './commands/';
client.on('ready',()=>{
    console.log(client.user.tag);
    client.user.setPresence({
        activities:[{
            name: 'water boil',
            type: 'WATCHING',
            url: 'https://imgur.com/',
        }]
    })
    const guild = client.guilds.cache.first();
    client.application.commands.set([]);
    for (const iterator of readdirSync(path,'utf-8')) {
        if(iterator.includes('.js')) {
            (require(`${path}/${iterator}`)(client))
            .then(command=>{
                guild.commands.create(command)
            })
        }
    }
});
client.login();