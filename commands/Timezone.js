const { default: axios } = require("axios");
const { MessageEmbed } = require("discord.js");
module.exports=async (client)=>{
    const embed = new MessageEmbed({
        description: 'Pong',
    })    
    client.on('interactionCreate',interaction=>{
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'timezone'){
            //console.log(interaction.options._hoistedOptions[0].value)
            await axios.get(`https://worldtimeapi.org/api/timezone/${interaction.options._hoistedOptions[0].value}`)
            .then(result =>{
                console.log(result.datetime);
            })
            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    })
}