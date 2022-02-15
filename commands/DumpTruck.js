const { MessageEmbed } = require("discord.js");

module.exports= async client=>{
    client.on('interactionCreate',async interaction=>{
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'butt'){
            const user = await interaction.user.fetch(true);
            interaction.reply({ embeds: [new MessageEmbed({
                description: `<@${interaction.options._hoistedOptions[0].value}>'s butt is ${Math.floor(Math.random()*30)} :watermelon: wide :purple_heart:`,
                color: user.hexAccentColor
            })], ephemeral: false });
        }
    })
    return{
        name:'butt',
        description:'Measure-o-butt',
        options:[{
            name:'user',
            description:'pick user',
            type:'USER',
            required:true
        }
        ]
    }
}