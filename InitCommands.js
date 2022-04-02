module.exports = client =>{
    const guild = client.guilds.cache.first();
    client.application.commands.set([
        {
            name: 'ping',
            description: 'Pong',
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
            name: 'petpet',
            description: 'Pet someone',
            options:[{
                name:'user',
                description:'pick user',
                type:'USER',
                required:true
            }],
            autocomplete:true
        },
        {
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
            name: 'inspiro',
            description: 'Some randomly generated inspirational quote',
        }
    ]);
}