module.exports = {
    name: 'clear',
    description: 'Clear messages!',
    async execute(message, args, client) {
        if(!args[0]) return message.reply('please enter the amount of messages that you want to clear');
        if(isNaN(args[0])) return message.reply('please enter a real number');

        if(args[0] > 100) return message.reply("You can't delete more than 100 messages at once");
        if(args[0] < 1) return message.reply("You must delete atleast one message");
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages, true);
        });
    }
}