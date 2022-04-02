'use strict';
const { MessageEmbed } = require("discord.js");
module.exports = async interaction=>{
    const embed = new MessageEmbed({
        description: 'Pong!',
    })    
    interaction.reply({ embeds: [embed], ephemeral: true });
}