'use strict';
const { MessageEmbed } = require("discord.js");
const petPetGif = require('pet-pet-gif');
module.exports = async client=>{  
    client.on('interactionCreate',async interaction=>{
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'petpet'){
            const embed = new MessageEmbed();
            const user = interaction.options._hoistedOptions[0].member;
            const animatedGif = await petPetGif(user.displayAvatarURL({dynamic:true,format:'png'}))
            interaction.reply({ embeds: [new MessageEmbed({
            })],files:[
                {
                attachment:animatedGif,
                name:'petPetGif.gif'
            }
        ], ephemeral: false });
        }
    })
    return{
        name: 'petpet',
        description: 'Pet someone',
        options:[{
            name:'user',
            description:'pick user',
            type:'USER',
            required:true
        }],
        autocomplete:true
    }
}