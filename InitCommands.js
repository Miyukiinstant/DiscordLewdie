module.exports = client =>{
    const guild = client.guilds.cache.first();
    commands = require('./commands.json')
    client.application.commands.set(commands);
}