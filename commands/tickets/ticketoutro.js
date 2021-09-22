/*
  _   _                  ____        _     ____                          _                    _ 
 | | | |_   _ _ __   ___| __ )  ___ | |_  |  _ \ ___ _ __ ___   __ _ ___| |_ ___ _ __ ___  __| |
 | |_| | | | | '_ \ / _ \  _ \ / _ \| __| | |_) / _ \ '_ ` _ \ / _` / __| __/ _ \ '__/ _ \/ _` |
 |  _  | |_| | |_) |  __/ |_) | (_) | |_  |  _ <  __/ | | | | | (_| \__ \ ||  __/ | |  __/ (_| |
 |_| |_|\__, | .__/ \___|____/ \___/ \__| |_| \_\___|_| |_| |_|\__,_|___/\__\___|_|  \___|\__,_|
        |___/|_|                                                                                
            
We have tried our very hardest to make this the #1 Discord bot around to date! With tons of new
features that not even some of the current bots around have! As-well with the new updated frame-
work on DiscordJS V13! We have hopefull mastered this new land, and we plan to keep it that way!
*/

const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args, con) => {
    if(message.guild.id !== client.config.your_guild_id) return message.channel.send({ content: "This command can only be ran in the main guild." }).catch(e => {});
    let check = await client.utils.permCheck(client, message, 'support')
    if(!check) return message.channel.send({ content: "You don't have permission to use this command." }).catch(e => {});
    if(!client.config.tickets_module.enabled) return message.channel.send({ content: "This module is currently disabled." }).catch(e => {});
    if(!message.channel.name.startsWith(`ticket-`)) return message.channel.send({ content: `This channel is not a ticket.` }).catch(e => {})
    const claimEmbed = new MessageEmbed()
    .setColor(client.config.colorhex)
    .setDescription(`Thank you for choosing __${message.guild.name}__!\nSincerely ~ **${message.author.username}**`)
    .setTimestamp()
    .setFooter(`${client.config.copyright}`)
    
    message.channel.send({ embeds: [claimEmbed] })
}

exports.info = {
    name: 'ticketoutro',
    description: 'A command.',
    aliases: ['outroduce', 'outroduction', 'outro']
}