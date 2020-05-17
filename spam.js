const Discord = require('discord.js');
const fs = require("fs");
const cmd = require("node-cmd");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client(); // كههربا (حسن ياسر)
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client(); // كههربا (حسن ياسر)
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client(); // كههربا (حسن ياسر)
const client16 = new Discord.Client();
const client17 = new Discord.Client(); // كههربا (حسن ياسر)
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
const tstop = dinfo.timestop * 1000 * 60 * 60 // العملية الحسابية بـ الساعات عشان البوت يوقف اسبام
const nstop = dinfo.timestop * 1000 * 60 * 60  - 10000 // العملية الحسابية بـ الساعات ناقصة 10 ثواني لارسال رسالة كم جمع البوت

const filename = 'spam';
client.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client2.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n'); // كههربا (حسن ياسر)
  setInterval(() => {
client2.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client3.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client3.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client4.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client5.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client6.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client6.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client7.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client7.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client8.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client8.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client9.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client9.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client10.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client10.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client11.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client11.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client12.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client12.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client13.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + ''; // كههربا (حسن ياسر)
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client13.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client14.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err; // كههربا (حسن ياسر)
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client14.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000); // كههههرباااا
})});
client15.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client15.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client16.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client16.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client17.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client17.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client18.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client18.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client19.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client19.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});
client20.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client20.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},dinfo.timespam *1000);
})});






// ======= [ #Credit NOTICE ] ======== //

client.on('ready', async () => {
  setInterval(() => {
client.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client2.on('ready', async () => {
  setInterval(() => {
client2.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client3.on('ready', async () => {
  setInterval(() => {
client3.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client4.on('ready', async () => {
  setInterval(() => {
client4.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client5.on('ready', async () => {
  setInterval(() => {
client5.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client6.on('ready', async () => {
  setInterval(() => {
client6.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client7.on('ready', async () => {
  setInterval(() => {
client7.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client8.on('ready', async () => {
  setInterval(() => {
client8.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client9.on('ready', async () => {
  setInterval(() => {
client9.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client10.on('ready', async () => {
  setInterval(() => {
client10.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client11.on('ready', async () => {
  setInterval(() => {
client11.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client12.on('ready', async () => {
  setInterval(() => {
client12.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client13.on('ready', async () => {
  setInterval(() => {
client13.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client14.on('ready', async () => {
  setInterval(() => {
client14.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client15.on('ready', async () => {
  setInterval(() => {
client15.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client16.on('ready', async () => {
  setInterval(() => {
client16.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client17.on('ready', async () => {
  setInterval(() => {
client17.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client18.on('ready', async () => {
  setInterval(() => {
client18.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client19.on('ready', async () => {
  setInterval(() => {
client19.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});
client20.on('ready', async () => {
  setInterval(() => {
client20.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`#credit`);
},nstop );
});

// ======= [ #Credit Notice END ] ======== //

// ======= [ Refresh MODE] ======== //

client.on('ready', async () => {
  setInterval(() => {
client.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`** تم أعادة تشغيل البوتات .. **`);
client.guilds.get(dinfo.serverid).channels.get(dinfo.channelid).send(`@everyone , @here`);
cmd.run("refresh")
},tstop);
});
// ======= [ Refresh MODE end] ======== //


// ======= [ Spam MODE OFF ] ======== //
const config = require("./config.json")
const prefix = config.prefix
client.on('message', message => {
if(message.content === prefix + "spam off") {
      if (!dinfo.owner.includes(message.author.id)) return;
          message.channel.send(`**⚠️ SPAM OFF , <@${dinfo.owner}>**`);
        console.log(`⚠️ SPAM OFFING ..`);
        client.destroy();
        client2.destroy();
        client3.destroy();
        client4.destroy();
        client5.destroy();
        client6.destroy();
        client7.destroy();
        client8.destroy();
        client9.destroy();
        client10.destroy();
        client11.destroy();
        client12.destroy();
        client13.destroy();
        client14.destroy();
        client15.destroy();
        client16.destroy();
        client17.destroy();
        client18.destroy();
        client19.destroy();
        client20.destroy();
        console.log(`SPAM OFF By : ${dinfo.owner}`);
    }});
// ======= [ Refresh MODE end] ======== //



client.login(process.env.KahTOKEN);
client2.login(process.env.KahTOKEN2);
client3.login(process.env.KahTOKEN3);
client4.login(process.env.KahTOKEN4);
client5.login(process.env.KahTOKEN5);
client6.login(process.env.KahTOKEN6);
client7.login(process.env.KahTOKEN7);
client8.login(process.env.KahTOKEN8);
client9.login(process.env.KahTOKEN9);
client10.login(process.env.KahTOKEN10);
client11.login(process.env.KahTOKEN11);
client12.login(process.env.KahTOKEN12);
client13.login(process.env.KahTOKEN13);
client14.login(process.env.KahTOKEN14);
client15.login(process.env.KahTOKEN15);
client16.login(process.env.KahTOKEN16);
client17.login(process.env.KahTOKEN17);
client18.login(process.env.KahTOKEN18);
client19.login(process.env.KahTOKEN19);
client20.login(process.env.KahTOKEN20);