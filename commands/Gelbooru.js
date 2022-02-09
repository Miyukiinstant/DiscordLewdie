'use strict';
const  axios = require("axios");
const { MessageEmbed } = require("discord.js");
module.exports = async (client)=>{
    const api = 'https://gelbooru.com/index.php?page=dapi&s=post&q=index&api_key=28ca13e2663daf40b08d2722e2ab8830a460f00ef07c76ee87b9c2f6f0fa3ccb&user_id=938617';
    client.on('interactionCreate',interaction=>{        
        if(!interaction.isCommand()) return;
        if(!interaction.channel.nsfw&&interaction.commandName === 'gelbooru'){
            interaction.reply({embeds: [new MessageEmbed({
                description:"Channel is not NSFW marked",
                color: 'RED',
            })], ephemeral: true })
        }
        if(interaction.commandName === 'gelbooru'){
            axios.get(api,{
                params:{
                    json: 1,
                    tags: interaction.options.data[0].value,
                }
            }).then(response=>{
                const image = response.data.post[Math.floor(Math.random()*response.data.post.length)];
                const embed = new MessageEmbed({
                    title: image.owner,
                    url: image.source,
                    footer: {
                        text: image.tags,
                    },
                    image: {
                        url: image.file_url
                    },
                    color: [122,0,122],
                    fields: [
                        {
                            name:'Query',
                            value: interaction.options.data[0].value,
                            inline: false,
                        }
                    ]
                });
                interaction.reply({embeds: [embed], ephemeral: false }).catch(error=>{
                    interaction.reply({embeds: [new MessageEmbed({
                        description:"Sorry but I couldn't find anything",
                        color: 'RED',
                    })], ephemeral: true })
                })

            })
            .catch(error=>{ 
                interaction.reply({embeds: [new MessageEmbed({
                    description:"Sorry but I couldn't find anything",
                    color: 'RED',
                })], ephemeral: true })
            });
        }
    })
}