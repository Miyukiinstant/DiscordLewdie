module.exports=async client=>{
    client.on('interactionCreate',async interaction=>{
        if(!interaction.isCommand())return;
        if(interaction.commandName==='images'){
            var json_images = {
                urls:[]
            }
            var urls = ""
            const channelID = interaction.options._hoistedOptions[0].value;
            const channels = interaction.guild.channels.cache
            channels.map(async (index)=>{
                if (`${index.id}` === `${channelID}`) { //935251511234138112
                    const res = await index.messages.fetch();
                        res.map((index)=>{
                            index.attachments.map(async (value)=>{
                                json_images.urls.push(JSON.stringify(value.attachment,null,'\t'))
                            })                        
                        }) 
                         
                    }
                    console.log(json_images);
            })                        
        }
    })
}