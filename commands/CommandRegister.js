const { default: axios } = require("axios");
const json = require('./json/tm.json');

module.exports = (client)=>{
    client.application.commands.set([]);
    const guild = client.guilds.cache.first();
    var tmChoices = [];
    for (let index = 0; index < 25; index++) {
        if(json[index]=== undefined) return;
        tmChoices.push({
            name:json[index],
            value: json[index]
        })        
    }
    guild.commands.set([{
        name: 'social',
        description: 'touchies',
        options: [{
            type: 'STRING',
            name: 'action',
            choices: [{
                name: 'hug',
                value: 'hug'
            },
            {
                name: 'kiss',
                value: 'kiss'
            },
            {
                name: 'lick',
                value: 'lick'
            },
            {
                name: 'feet',
                value: 'feet'
            }],
            description: 'pick an action',
            required: true,
        },
        {
            type: 'USER',
            name: 'user',
            description: 'pick a user',
            required: true
        }],
        autocomplete: true,
        },
        {
            name: 'gelbooru',
            description: 'Anime/Hentai gallery',
            options: [{
                type: 'STRING',
                name: 'tags',
                description: 'Separated by space',
                required: true,
            }],
            autocomplete: true,
        },
        {
            name: 'nhentai',
            description: 'Search some doujin',
            options: [{
                type: 'INTEGER',
                name: 'search-numbers',
                description: '6-digit',
                required: true,
            }],
            autocomplete: true,
        },
        {
            name: 'ping',
            description: 'Pong',
        },
        {
            name: 'info',
            description: 'About someone',
            options: [{
                type: 'USER',
                name: 'user',
                description: 'Guild user',
                required: true,
            }],
            autocomplete: true,
        },
        {
            name: 'restart',
            description: 'Restart bot',
            autocomplete: true,
        },
        {
            name: 'steam',
            description: 'Retrieve steam profile',
            options: [{
                type: 'STRING',
                name: 'steamid64',
                description: 'Your steam id 64',
                required: true,
            }],
            autocomplete: true,
        },
        ]);
}