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
        name: 'ping',
        description: 'Pong',
    }]);
}