const { default: axios } = require("axios");
const { MessageEmbed } = require("discord.js")
module.exports=async (client)=>{    
    client.on('interactionCreate',interaction=>{
        if(!interaction.isCommand()) return;
        if(interaction.commandName === 'steam'){
            const steamid64 = interaction.options._hoistedOptions[0].value;
            axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API}&steamids=${steamid64}`)
            .then(async result=>{
                const friendlist = await axios.get(`http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${process.env.STEAM_API}&steamid=${steamid64}&relationship=friend`).catch(error=>{});
                const gamescount = await axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API}&steamid=${steamid64}&format=json`).catch(err=>{});
                const player = result.data.response.players[0];
                interaction.reply({ embeds: [new MessageEmbed({
                    author:{
                        name: player.personaname,
                        iconURL: player.avatar,
                        url: player.profileurl
                    },
                    fields:[
                    {
                        name: 'Profile',
                        value: player.communityvisibilitystate === 1?'Private': 'Public',
                        inline: true
                    },    
                    {
                        name:'Last logoff',
                        value: new Date(player.lastlogoff*1000).toLocaleDateString('It-it'),
                        inline: true
                    },
                    {
                        name: 'Created on',
                        value: new Date(player.timecreated*1000).toLocaleDateString('IT-it'),
                        inline: true
                    },
                    {
                        name:'Friends',
                        value: friendlist === undefined?'Private':`${friendlist.data.friendslist.friends.length}`
                    },
                    {
                        name: 'Games count',
                        value: gamescount === undefined?'Private':`${gamescount.data.response.game_count}`
                    }],
                    image:{
                        url: player.avatarfull
                    }
                    
                })], ephemeral: false });
            })
            .catch(errors=>{
                interaction.reply({ embeds: [new MessageEmbed({
                    description: 'Non valid steam ID'
                })], ephemeral: true });
                }
            )
            
        }
    })
    return{
        name: 'steam',
        description: 'Retrieve steam profile',
        options: [{
            type: 'STRING',
            name: 'steamid64',
            description: 'Your steam id 64',
            required: true,
        }],
        autocomplete: true,
    }
}