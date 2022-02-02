'use strict';
const { MessageEmbed } = require("discord.js");
const embed = new MessageEmbed().setDescription('Pong!');
module.exports = async (client)=>{
    client.application.commands.create({
        name: 'ping',
        description: 'Pong',
      })
        .then(console.log)
        .catch(console.error);
    client.on('interactionCreate',interaction=>{
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'ping'){
            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    })
}