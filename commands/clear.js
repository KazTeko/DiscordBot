module.exports = {
    name: 'clear',
    aliases: ['cl'],
    cooldown: 10,
    discription: 'clear msg',
    async execute(client, message, args, Discord){
        if(!args[0]) return message.reply("Please Enter the amount of messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("please enter a real number");
        if (args[0] > 100) return message.reply("you can not delete more then 100 messages");
        if (args[0] < 0) return message.reply("you have to delete atleas one message");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })


    }
}