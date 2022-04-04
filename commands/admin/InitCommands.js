'use strict'
const {MessageEmbed} = require('discord.js');
module.exports = (interaction,client) =>{
    if(!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return;
    interaction.reply({ embeds: [new MessageEmbed({
        description:"Reloading commands..."
    })], ephemeral: true });

    const guild = client.guilds.cache.first();
    commands = require('../../commands.json')
    guild.commands.set(commands);
    
    interaction.editReply({ embeds: [new MessageEmbed({
        description:"Realoded commands!"
    })], ephemeral: true });
}