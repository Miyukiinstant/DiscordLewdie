'use strict';
const { default: axios } = require("axios");
const { MessageEmbed } = require("discord.js");
module.exports = async client=>{  
    client.on('interactionCreate',async interaction=>{
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'inspiro'){
            const user = interaction.options._hoistedOptions[0].member
            const g_user = await user.user.fetch(true)
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
    })
    return{
        name: 'inspiro',
        description: 'Some inspirational quote',
    }
}