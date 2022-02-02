'use strict';
const  axios = require("axios");
const { MessageEmbed } = require("discord.js");
module.exports = async (client)=>{
    const api = 'https://gelbooru.com/index.php?page=dapi&s=post&q=index&api_key=28ca13e2663daf40b08d2722e2ab8830a460f00ef07c76ee87b9c2f6f0fa3ccb&user_id=938617';
    client.on('interactionCreate',interaction=>{        
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'hug'){
            axios.get(api,{
                params:{
                    json: 1,
                    tags: 'yuri hug 2girls rating:safe',
                }
            }).then(response=>{
                const image = response.data.post[Math.floor(Math.random()*response.data.post.length)];
                const embed = new MessageEmbed({
                    description: `<@${interaction.user.id}> huggies for <@${interaction.options.data[0].user.id}>`,
                    image: {
                        url: image.sample_url === ''?image.file_url:image.sample_url,    
                    },
                });
                interaction.reply({embeds: [embed], ephemeral: false })
            });
        }
    })
}