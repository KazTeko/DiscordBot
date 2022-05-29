module.exports = {
    name: 'rules',
    description: 'rule command',
     execute(message, args, Discord, client){
 
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Rules')
            .setDescription('Server Rules You Must Follow')
            .addFields(
                { name: 'Rule 1', value: 'Respect Everyone We Are All Human!', inline: false },
                { name: 'Rule 2', value: 'No Explicit Content Will Resault In Instant Ban', inline: false },
                { name: 'Rule 3', value: 'Do Not Spam @ Mods Or Owners You Will be Kicked If Repeat Offence = Ban', inline: false },
                { name: 'Rule 4', value: 'Each Channel Has Its Own Use So Use The Right One Please', inline: false },
                { name: 'Rule 5', value: 'No Trolling/Spamming This Resaults In Kick', inline: false },
                { name: 'Rule 6', value:'Any Exploiting of the Roleplay bot will resault in a character reset please report any bugs or exploits that are found Thanks.'},
                { name: 'Do You Agree', value: 'if you agree to the rules please click the tick below if you do not follow the rules you agree to will consit of punishments.'}
            )
 
        message.channel.send(embed);
       
        }
    }   