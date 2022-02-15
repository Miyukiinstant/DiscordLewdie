const { MessageEmbed } = require("discord.js");

module.exports= async client=>{
    client.on('interactionCreate',async interaction=>{
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'weewee'){
            const user = await interaction.user.fetch(true);
            interaction.reply({ embeds: [new MessageEmbed({
                description: `<@${interaction.options._hoistedOptions[0].value}>'s weewee is ${Math.floor(Math.random()*30)}cm schlong :purple_heart:`,
                color: user.hexAccentColor
            })], ephemeral: false });
        }
    })
    return{
        name:'weewee',
        description:'Measure-o-weewee',
        options:[{
            name:'user',
            description:'pick user',
            type:'USER',
            required:true
        }
        ]
    }
}