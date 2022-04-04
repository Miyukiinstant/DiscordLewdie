'use strict'
module.exports = async client =>{
    const path = './commands/';
    function requireCommand(path,name,type){
        require(`${path}/${name}`)(type)
    }
    client.on('interactionCreate',interaction=>{
        if(!interaction.isCommand()) return;
        switch(interaction.commandName){
            case 'ping':
                requireCommand(path,'Ping',interaction)
                break;
            case 'info':
                requireCommand(path,'Info',interaction)
                break;
            case 'steam':
                requireCommand(path,'Steam',interaction)
            break;
            case 'linspiro':
                requireCommand(path,'Inspirobot',interaction)
            break;
            case 'reload':
                requireCommand(path,'admin/InitCommands',interaction)
            break;
        }
    })
}