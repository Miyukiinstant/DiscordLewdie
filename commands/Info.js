const { MessageEmbed, User, UserManager } = require("discord.js");

module.exports=(client)=>{
    client.on('interactionCreate',async interaction=>{
        if(!interaction.isCommand())return;
        if(interaction.commandName==='info'){
            
            const user = interaction.options._hoistedOptions[0].user.fetch(true).then(user=>{
                const embed = new MessageEmbed({
                    title: 'Info',
                    color: `${user.hexAccentColor}`,
                    description: `${user.tag}`,
                    thumbnail:{
                        url:user.displayAvatarURL({dynamic:true,format:'png'})
                    },
                    image:{
                        url:user.bannerURL({dynamic:true,format:'png',size:512})
                    },
                    fields: [
                        {
                            name:'Creation date',
                            value: `${user.createdAt.toLocaleDateString()}`,
                        }
                    ],
                    footer: {
                        text: `Information provided by ${client.user.tag}`
                    }                
                })
                interaction.reply({embeds:[embed],ephemeral:false})
            });
            
        }
    });
}