module.exports = {
    name: "purge",
    description: "purge",
     botPerms: ["MANAGE_MESSAGES"],
    userPerms: ["MANAGE_MESSAGES"],
             run: async(client, message, args) => {
       const msgnum = args.join(" ");
       message.reply('Purging...');
    message.channel.bulkDelete(msgnum);
    message.channel.send("Done,If you wish you can delete this");
   }
}