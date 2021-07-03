require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const prefix = "BIC//";

client.on('ready', () => {
    console.log('Bot logged in!')
    console.log(`Current bot username is: ${client.user.username}`)
    console.log(`Current bot tag is: ${client.user.tag}`)
    console.log(`Current bot ID is: ${client.user.id}`)
});

client.on('message', (message) => {
    console.log(`[${message.author.tag}] sent in ${message.channel}: ${message.content}`);
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(prefix.length)
        .split("/\s+/");
        console.log(CMD_NAME);
        console.log(args);

        if (CMD_NAME === 'testreply') {
            message.reply(`the reply test is succeeded if you can see this.`)
        }
        if (CMD_NAME === 'latestmissionscheduled') {
            message.reply('```INTELCOM SYSTEMS\n\nMISSION NAME: ZERO-CONTACT\nTASKED DIVISION: TFB\nTIME OF MISSION: 07:00 AM UTC-09:00 / 4:00 PM BST\nMISSION ORDER: FIND OUT WHAT HAPPENED IN THE SAFEHOUSE NEAR OUTPOST 114 AND ITS SURROUNDINGS.```')
        }
        if (CMD_NAME === 'searchpersonnelid') {
            messsage.reply('```INTELCOM SYSTEMS\n\nUNABLE TO INITIATE COMMAND, STILL WORK IN PROGRESS. SHUTTING DOWN REQUEST!```')
        }
        if (CMD_NAME === 'help') {
            message.reply('```INTELCOM SYSTEMS\n\n"testreply": Test the bot if it can see and reply to your command.\n"latestmissionscheduled": Show the latest mission order sent by the Hi-Com.\n"searchpersonnelid":ERROR. UNABLE TO DISPLAY HELP MESSAGE. ENTRY IN HELP.TXT MISSING, POTENTIALLY THE COMMAND IS CURRENTLY "WORK IN PROGRESS".```')
        }
    }
});

client.login(process.env.BOT_TOKEN);