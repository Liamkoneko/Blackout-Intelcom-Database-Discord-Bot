require('dotenv').config();

const fs = require("fs");

const { Client } = require('discord.js');
const { waitForDebugger } = require('inspector');
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
        if (CMD_NAME === 'analyzefile>>242426.wad') {
            message.reply('```Request understood. Checking file.........```')
            message.channel.send('```INTELCOM SYSTEMS\n\nANALYSIS DONE! DISPLAYING RESULTS:\nFILESIZE: 14MB\nJUNKDATA SIZE: 13MB\nRECOVERABLE DATA: YES\nRECOVERABLE DATA TYPE: TEXT\nRECOVERABLE DATA TEXT: "Genata have been the ones responsible apparently for giving the blueprints of the 1000lb bomb to the PoD, Genata wanted the PoD to sell this data to dark corporations around the world, but we came back in time and Liamkoneko with Virt deleted the files from the servers, we thought it was the end, but Genata wanted these files back, since their copies seem to have been deleted by a defective agent which wanted to be back free, and which, from my darkweb files, is currently located in the Canada. So yeah, thats basically it. We`ll see more later down the road"```')
        }
        if (CMD_NAME === 'latestmissionscheduled') {
            const extractfsstringname = fs.readFileSync('./src/missionmessagesstoragemissionname.txt', 'utf-8');
            const extractfsstringtime = fs.readFileSync('./src/missionmessagesstoragemissiontime.txt', 'utf-8');
            const extractfsstringtasked = fs.readFileSync('./src/missionmessagesstoragetaskeddiv.txt', 'utf-8');
            const extractfsstringdesc = fs.readFileSync('./src/missionmessagesstoragedesc.txt', 'utf-8');
            console.log(extractfsstringname)
            console.log(extractfsstringtime)
            console.log(extractfsstringtasked)
            console.log(extractfsstringdesc)
            message.reply('')
            message.channel.send('```INTELCOM SYSTEMS - MISSION VIEWER' + '\nMISSION NAME: ' + extractfsstringname + '\nTASKED DIVISION: ' + extractfsstringtasked + '\nOPERATION TIME: ' + extractfsstringtime + '\nMISSION ORDER ' + extractfsstringdesc)
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