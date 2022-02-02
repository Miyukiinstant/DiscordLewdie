'use strict';
const { MessageEmbed } = require("discord.js");
module.exports = async (client)=>{
    const embed = new MessageEmbed({
        description: 'Pong',
    })    
    client.on('interactionCreate',interaction=>{
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'ping'){
            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    })
}