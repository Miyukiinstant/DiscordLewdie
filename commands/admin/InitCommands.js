'use strict'
const {MessageEmbed} = require('discord.js');
module.exports = (interaction,client) =>{
    if(!interaction.memberPermissions.has('ADMINISTRATOR')) return;
    const guild = client.guilds.cache.first();
    const commands = require('../../commands.json')
    guild.commands.set(commands);
    
    interaction.reply({ embeds: [new MessageEmbed({
        description:"Reloaded commands",
        color: 'GREEN'
    })], ephemeral: true });
}