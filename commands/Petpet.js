'use strict';
const { MessageEmbed } = require("discord.js");
const petPetGif = require('pet-pet-gif');
module.exports = async interaction=>{
    const user = interaction.options._hoistedOptions[0].member;
    const g_user = await user.user.fetch(true)
    const animatedGif = await petPetGif(user.displayAvatarURL({dynamic:true,format:'png'}),{
        resolution: 128, // The width (or height) of the generated gif
    })
    interaction.reply({ embeds: [new MessageEmbed({
        description: `Petpet <@${user.id}>`,
        color: g_user.hexAccentColor
    })],files:[
        {
        attachment:animatedGif,
        name:'petPetGif.gif'
    }
], ephemeral: false });
}