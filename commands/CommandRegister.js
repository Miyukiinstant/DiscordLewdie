module.exports = (client)=>{
    client.application.commands.set([]);
    const guild = client.guilds.cache.first();
    guild.commands.set([{
        name: 'hug',
        description: 'Hug someone',
        options: [{
            type: 'USER',
            name: 'user',
            description: 'Guild user',
            required: true,
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
    }]);
}