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
        description: 'Some yeeyee',
        options: [{
            type: 'STRING',
            name: 'query',
            description: 'Some good stuff',
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
    }]);
}