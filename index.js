'use strict';
require('dotenv').config();
const { Client, Intents, MessageEmbed } = require("discord.js");
const { readdirSync } = require('fs');
const client = new Client({intents: [Intents.FLAGS.GUILDS,
                                    Intents.FLAGS.DIRECT_MESSAGES,
                                Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
                            Intents.FLAGS.DIRECT_MESSAGE_TYPING]});
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
    for (const iterator of readdirSync(path,'utf-8')) {
        if(iterator.includes('.js')) require(`${path}/${iterator}`)(client);
    }
    client.on('interactionCreate',async interaction=>{
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'restart') {
            client.destroy();
            client.login(process.env.DISCORD_TOKEN)
            interaction.reply({embeds: [new MessageEmbed({
                description:'BOT Restarted!',
                color: 'GREEN'})],ephemeral:true});
        }
    });
});

client.login();