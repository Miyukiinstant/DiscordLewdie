'use strict';
const { default: axios } = require("axios");
const { MessageEmbed } = require("discord.js");
module.exports = async interaction=>{
    const g_user = await interaction.user.fetch(true)
    const inspiro = await axios.get('https://inspirobot.me/api?generate=true')
    interaction.reply({ embeds: [new MessageEmbed({
        color: `${g_user.hexAccentColor}`,
        image:{
            url: inspiro.data
        },
        footer:{
            text:'Randomly generated inspirational quote provided by inspirobot.me'
        }
    })], ephemeral: false});
}