'use strict';
const { MessageEmbed } = require("discord.js");
const { API } = require("nhentai-api");
const nhApi = new API();
module.exports = async (client)=>{
    client.on('interactionCreate',interaction=>{        
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'nhentai'){
            nhApi.getBook(interaction.options.data[0].value).then(async result=>{
                const book = result;
                const embed = new MessageEmbed({
                    title: book.title.pretty,
                    url: `https://nhentai.net/g/${book.id}`,
                    
                    image: {
                        url: nhApi.getImageURL(book.cover),    
                    },
                    color: [122,0,122],
                    fields: [
                        {
                            name:'ID',
                            value: `${book.id}`,
                            inline: true,
                        },
                        {
                            name:'Uploaded',
                            value: `${book.uploaded}`,
                            inline: true,
                        },
                        {
                            name:'Pages',
                            value: `${book.pages.length}`,
                            inline: true,
                        }
                    ]
                });
                interaction.reply({embeds: [embed], ephemeral: false })
            }).catch(error=>{
                console.log(error);
            });
                
        }
    })
}