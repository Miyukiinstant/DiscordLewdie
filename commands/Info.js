const { MessageEmbed, User, UserManager } = require("discord.js");
module.exports=async client=>{
    client.on('interactionCreate',async interaction=>{
        if(!interaction.isCommand())return;
        if(interaction.commandName==='info'){
            const user = interaction.options._hoistedOptions[0].member
            const g_user = await user.user.fetch(true)
                const embed = new MessageEmbed({
                    title: 'Info',
                    color: `${g_user.hexAccentColor}`,
                    description: `${g_user.tag}`,
                    thumbnail:{
                        url:user.displayAvatarURL({dynamic:true,format:'png'})
                    },
                    image:{
                        url:g_user.bannerURL({dynamic:true,format:'png',size:512})
                    },
                    fields: [
                        {
                            name:'Creation date',
                            value: `${g_user.createdAt.toLocaleDateString()}`,
                        }
                    ],
                    footer: {
                        text: `Information provided by ${client.user.tag}`
                    }                
                })
                interaction.reply({embeds:[embed],ephemeral:false})            
        }
    });
    return {
        name: 'info',
            description: 'About someone',
            options: [{
                type: 'USER',
                name: 'user',
                description: 'Guild user',
                required: true,
            }],
            autocomplete: true,
    }
}