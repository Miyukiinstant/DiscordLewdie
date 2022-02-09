'use strict';
const  axios = require("axios");
const { MessageEmbed } = require("discord.js");
module.exports = async (client)=>{
    const api = 'https://gelbooru.com/index.php?page=dapi&s=post&q=index&api_key=28ca13e2663daf40b08d2722e2ab8830a460f00ef07c76ee87b9c2f6f0fa3ccb&user_id=938617';
    client.on('interactionCreate',interaction=>{        
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'social'){
            const action = interaction.options._hoistedOptions[0].value;
            const user = interaction.options._hoistedOptions[1].value;
            axios.get(api,{
                params:{
                    json: 1,
                    tags: `yuri ${action} rating:safe`,
                }
            }).then(response=>{
                const image = response.data.post[Math.floor(Math.random()*response.data.post.length)];
                const embed = new MessageEmbed({
                    description: `<@${interaction.user.id}> ${action} for <@${user}>`,
                    image: {
                        url: image.sample_url === ''?image.file_url:image.sample_url,    
                    },
                    footer:{
                        text:'Powered by gelbooru.com'
                    }
                });
                interaction.reply({embeds: [embed], ephemeral: false })
            });
        }
    })
}