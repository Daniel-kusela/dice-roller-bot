 module.exports = {
     name: "boop",
     category: "info",
     permissions: [],
     devOnly: false,
     run: async ({client, message, args}) => {
        
         console.log(client.users.cache.id)
         message.reply(`you booped <@${client.users.cache}>`);
    
        
     }
 }