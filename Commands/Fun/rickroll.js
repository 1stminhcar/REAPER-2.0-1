const Discord = module.require("discord.js");
module.exports = {
    name: "rickroll",
    description: "Show the rickroll",
    nsfwOnly: false // True if the command can be used in nsfw channels only,
    ownerOnly: false // True if the command can be used by owner only,
    run: async(client, message, args) => {
       var links = [
      `https://player.vimeo.com/video/636800637?autoplay=1&loop=1&autopause=0`,
    ];

    const embed = new Discord.MessageEmbed()
      .setTitle("Here is your Nitro")
      .setDescription(links[Math.floor(Math.random() * links.length)])
      .setColor("RANDOM");
    message.reply({ embeds: [embed] });
  },
};
    }
}
