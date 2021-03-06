'use strict';
const { MessageEmbed } = require("discord.js");
const { API } = require("nhentai-api");
const nhApi = new API();
module.exports = async interaction=>{
    nhApi.getBook(interaction.options.data[0].value).then(async result=>{
        const book = result;
        const embed = new MessageEmbed({
            author:{
                name:'NHentai',
                icon_url: 'https://i.imgur.com/D6eAme8.png',
            },
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
                    value: `${book.uploaded.toLocaleDateString()}`,
                    inline: true,
                },
                {
                    name:'Pages',
                    value: `${book.pages.length}`,
                    inline: true,
                }
            ],
            footer:{
                text: book.tags.join(', '),
                iconURL : 'https://i.imgur.com/D6eAme8.png'
            } 
        });
        interaction.reply({embeds: [embed], ephemeral: false });
    }).catch(error=>{
        console.log(error);
    });        
}