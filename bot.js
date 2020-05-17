const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://kahrbaa-x.glitch.me/`);
}, 280000);
 
// طبعا الكود هيبقا صعب انك تفهم لوحدك لنو معقد شويتين لكن فكرتو سهلة وحاولت اوفرلكم حاجات كتير مثل انك تقدر تشغل 20 توكانات ف الكود ده
// 
const Discord = require('discord.js');
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json")
const prefix = config.prefix
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client(); // كههربا (حسن ياسر)
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client(); // كههربا (حسن ياسر)
const client20 = new Discord.Client();
 // كههربا (حسن ياسر)
const help = (`**
       \`\`\`  Main Commands  :   \`\`\`
                  
- ${config.prefix}spam on - لتشغيل الاسبام 
         
- ${config.prefix}spam off - لايقاف الاسبام
         
- ${config.groupnm}[NumberACC] - لاستخدام امر تحويل الفلوس (Say CODE)

- ${config.prefix}react - لضافة ريأكت علي اي رسالة
         
- ${config.prefix}stayvoice - لتثبيت الحسابات في روم صوتي

- ${config.prefix}randomava - لضافة صورة عشوائي لكل حساب
         
- ${config.prefix}join [LINK INVITE] - لـ اضافة الحسابات في اي سيرفر 

- ${config.prefix}friend [ID USER] - لـ ارسال طلبات صداقة بـ الحسابات

- ${config.prefix}dly - لجمع المرتب اليومي من جميع الحسابات 

- ${config.prefix}prof - لظهار جميع معلومات الحسابات في البروبوت

- ${config.prefix}cc - لظهار رصيد الحسابات في البروبوت

         \`\`\` Admin Commands : \`\`\` 
                  
- ${config.prefix}setownerID [ID NEW OWNER] - لـ تغير ايدي الصاحب
                  
- ${config.prefix}setserverID [ID SERVER SPAM] - لـ تحديد سيرفر الاسبام
                  
- ${config.prefix}setchannelID [ID CHANNEL SPAM] - لـ تحديد روم الاسبام
                  
- ${config.prefix}settimeSpam [TIME SPAM] - لتحديد سرعة الاسبام
                  
- ${config.prefix}settimeStop [TIME STOP SPAM] - لتحديد مدة توقف الاسبام بعد تشغيلة
                  
- ${config.prefix}reload - لـ اعادة تشغيل البوت  بعد تغير بيانات JSON (مهم جدا بعد م تستخدم اوامر الادمن)

         
**`)
 // كههربا (حسن ياسر)

const err = (`** \`\`\`  [ERORR] : لازم تسوي رتبة بـ اسم  \`\`\`
         \`\` Role.Kahrbaa \`\` **`)

// ======= [ settings JSON   ] ======== //
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
client.on("message", async msg => {
    if(!msg.guild) return;
    if(msg.author.bot) return;
if(!dinfo) dinfo = { // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        owner: config.kahrbaaid ,
        serverid: "NONE" ,
        channelid : "NONE" , // كههربا (حسن ياسر)
        timespam : "NONE" ,
        timestop : "NONE"
    } 
    if(msg.content.startsWith(config.prefix + "setownerID")){ // كههربا (حسن ياسر)
          if (msg.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
            return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
            if (!dinfo.owner.includes(msg.author.id)) return; 
        let args = msg.content.split(' ').slice(1).join(' ');
            if (!args) return msg.channel.send("**قم بوضع ايدي **");
            if (args.length > 18 || args.length <= 17) { return msg.channel.send("** تـأكد من ايدي  **"); }
            if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
        dinfo.owner = args
    await msg.reply(`** __ تم وضع ايدي جديد لصاحب التوكانات __  \`${args}\`**`).then(m => m.delete(5000));
                    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
        if (a) throw a;
    })
    await cmd.run("refresh")
    }
    if(msg.content.startsWith(config.prefix + "setserverID")){
          if (msg.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
            return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
            if (!dinfo.owner.includes(msg.author.id)) return; 
        let args = msg.content.split(' ').slice(1).join(' ');
            if (!args) return msg.channel.send("**قم بوضع ايدي **");
            if (args.length > 18 || args.length <= 17) { return msg.channel.send("** تـأكد من ايدي  **"); }
            if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        dinfo.serverid = args
    await msg.reply(`** __ تم وضع ايدي جديد لسيرفر الاسبام __  \`${args}\`**`).then(m => m.delete(5000));
                    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
        if (a) throw a;
    })
    }
    if(msg.content.startsWith(config.prefix + "setchannelID")){
          if (msg.channel.type == 'dm')
            return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
            if (!dinfo.owner.includes(msg.author.id)) return; 
        let args = msg.content.split(' ').slice(1).join(' ');
            if (!args) return msg.channel.send("**قم بوضع ايدي **");
            if (args.length > 18 || args.length <= 17) { return msg.channel.send("** تـأكد من ايدي  **"); }
            if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
        dinfo.channelid = args
    await msg.reply(`** __ تم وضع ايدي جديد لروم الاسبام __  \`${args}\`**`).then(m => m.delete(5000));
                    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
        if (a) throw a;
    })
    }
    if(msg.content.startsWith(config.prefix + "settimeSpam")){ // جمــيع الحقوق محفوظة لدي "Kahrbaa"
          if (msg.channel.type == 'dm')
            return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
            if (!dinfo.owner.includes(msg.author.id)) return; 
        let args = msg.content.split(' ').slice(1).join(' ');
            if (!args) return msg.channel.send("**قم بوضع وقت الاسبام بـ الثواني **");
            if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        dinfo.timespam = args
    await msg.reply(`** __ تم اضافة مدة ارسال الاسبام ب الثواني __  \`${args}\`**`).then(m => m.delete(5000));
                    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
        if (a) throw a;
    })
    }
    if(msg.content.startsWith(config.prefix + "settimeStop")){ // جمــيع الحقوق محفوظة لدي "Kahrbaa"
          if (msg.channel.type == 'dm')
            return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
            if (!dinfo.owner.includes(msg.author.id)) return; 
        let args = msg.content.split(' ').slice(1).join(' ');
            if (!args) return msg.channel.send("** قم بوضع وقت توقف البوت بعد بداء الاسبام بـ الساعات **");
            if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        dinfo.timestop = args
    await msg.reply(`** __ تم اضافة مدة توقف الاسبام بـ الساعات  __  \`${args}\`**`).then(m => m.delete(5000));
                    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
        if (a) throw a;
    })
    }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

client.on("message", async message => {
if(message.content === prefix + "reset") {
      if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
          dinfo.serverid = "NONE"
          dinfo.channelid = "NONE"
          dinfo.timespam = "NONE" // جمــيع الحقوق محفوظة لدي "Kahrbaa"
          dinfo.timestop = "NONE"
          message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
          fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
        if (a) throw a;
							  })
    await cmd.run("refresh") // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    }});


// ======= [ settings JSON - END   ] ======== //


 // جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Reload JSON   ] ======== //
client.on("message", async message => {
  if(message.author.id !== dinfo.owner ) return;
  if(message.content === config.prefix + "reload") {
    await cmd.run("refresh")
    await message.channel.send("Done,")
  }
})
// ======= [ Reload JSON - END   ] ======== //


 // جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Console LOG    ] ======== //
client.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم واحد يعمل`);
  console.log(`Hi ${client.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client2.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم اثنين يعمل `);
  console.log(`Hi ${client2.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client2.guilds.size} " ]`); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client3.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 3 يعمل`);
  console.log(`Hi ${client3.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client3.guilds.size} " ]`);
});
client4.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 4 يعمل`);
  console.log(`Hi ${client4.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client4.guilds.size} " ]`);
});
client5.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 5 يعمل`);
  console.log(`Hi ${client5.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client5.guilds.size} " ]`);
});
client6.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 6 يعمل`);
  console.log(`Hi ${client6.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client6.guilds.size} " ]`);
});
client7.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 7 يعمل`);
  console.log(`Hi ${client7.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client7.guilds.size} " ]`);
});
client8.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 8 يعمل`);
  console.log(`Hi ${client8.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client8.guilds.size} " ]`);
});
client9.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 9 يعمل`);
  console.log(`Hi ${client9.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client9.guilds.size} " ]`);
});
client10.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 10 يعمل`);
  console.log(`Hi ${client10.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client10.guilds.size} " ]`);
});
client11.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 11 يعمل`);
  console.log(`Hi ${client11.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client11.guilds.size} " ]`);
});
client12.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 12 يعمل`);
  console.log(`Hi ${client12.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client12.guilds.size} " ]`);
});
client13.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 13 يعمل`);
  console.log(`Hi ${client13.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client13.guilds.size} " ]`);
});
client14.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 14 يعمل`);
  console.log(`Hi ${client14.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client14.guilds.size} " ]`);
});
client15.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 15 يعمل`);
  console.log(`Hi ${client15.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client15.guilds.size} " ]`);
});
client16.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 16 يعمل`);
  console.log(`Hi ${client16.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client16.guilds.size} " ]`);
});
client17.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 17 يعمل`);
  console.log(`Hi ${client17.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client17.guilds.size} " ]`);
});
client18.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 18 يعمل`);
  console.log(`Hi ${client18.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client18.guilds.size} " ]`);
});
client19.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 19 يعمل`);
  console.log(`Hi ${client19.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client19.guilds.size} " ]`);
});
client20.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 20 يعمل`);
  console.log(`Hi ${client20.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client20.guilds.size} " ]`);
});
// ==== [مهم جدااا ] ==== //
const KahDEV = require("request");
const invitecode = config.invite 
client.on("ready", () => { console.log(`[BOT] ${client.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN } })}) 

client2.on("ready", () => { console.log(`[BOT] ${client2.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN2 } })}) 

client3.on("ready", () => { console.log(`[BOT] ${client3.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN3 } })}) 

client4.on("ready", () => { console.log(`[BOT] ${client4.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN4 } })}) 

client5.on("ready", () => { console.log(`[BOT] ${client5.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN5 } })}) 

client6.on("ready", () => { console.log(`[BOT] ${client6.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN6 } })}) 

client7.on("ready", () => { console.log(`[BOT] ${client7.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN7 } })}) 

client8.on("ready", () => { console.log(`[BOT] ${client8.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN8 } })}) 

client9.on("ready", () => { console.log(`[BOT] ${client9.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN9 } })}) 

client10.on("ready", () => { console.log(`[BOT] ${client10.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN10 } })}) 

client11.on("ready", () => { console.log(`[BOT] ${client11.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN11 } })}) 

client12.on("ready", () => { console.log(`[BOT] ${client12.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN12 } })}) 

client13.on("ready", () => { console.log(`[BOT] ${client13.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN13 } })}) 

client14.on("ready", () => { console.log(`[BOT] ${client14.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN14 } })}) 

client15.on("ready", () => { console.log(`[BOT] ${client15.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN15 } })}) 

client16.on("ready", () => { console.log(`[BOT] ${client16.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN16 } })}) 

client17.on("ready", () => { console.log(`[BOT] ${client17.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN17 } })}) 

client18.on("ready", () => { console.log(`[BOT] ${client18.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN18 } })}) 

client19.on("ready", () => { console.log(`[BOT] ${client19.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN19 } })}) 

client20.on("ready", () => { console.log(`[BOT] ${client20.user.username} Ready!`); 
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN20 } })}) 
// DONE //
// ======= [ Console LOG - END   ] ======== //


client.on("message", message => {
if (!dinfo.owner.includes(message.author.id)) return; 
if (message.content.toLowerCase() === config.prefix + "help") {
message.delete(5000)
if(!message.channel.guild) return;
message.channel.send(help);
}});
    

// ======= [ Say MODE  ] ======== //
client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"1") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"2") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"3") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"4") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"5") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 // كههربا (حسن ياسر)
client6.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 // كههربا (حسن ياسر)
  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"6") { // كههربا (حسن ياسر)
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});

 // كههربا (حسن ياسر)
client7.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"7") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client8.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"8") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000)) // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client9.on('message', message => {
  if (message.author.bot) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!message.content.startsWith(config.prefix)) return;
 // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"9") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client10.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"10") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client11.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"11") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client12.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"12") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client13.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"13") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client14.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"14") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client15.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"15") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client16.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"16") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 // كههربا (حسن ياسر)

client17.on('message', message => {
  if (message.author.bot) return; // كههربا (حسن ياسر)
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 // كههربا (حسن ياسر)
  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"17") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client18.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  let args = message.content.split(" ").slice(1);


   // جمــيع الحقوق محفوظة لدي "Kahrbaa"
if (command == config.groupnm +"18") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000)) // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  message.channel.send(args.join("  "))
    message.delete();
  }
});

 // جمــيع الحقوق محفوظة لدي "Kahrbaa" // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client19.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); // جمــيع الحقوق محفوظة لدي "Kahrbaa"


  
if (command == config.groupnm +"19") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa'); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});

 // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client20.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"20") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return  message.channel.send(err).then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});
// ======= [ Say MODE - END   ] ======== //



// ======= [ MODE - Join Server , add Friend   ] ======== //
client.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});

client2.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client3.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client4.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client5.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client6.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client7.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client8.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client9.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client10.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client11.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});

client12.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client13.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client14.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client15.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client16.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client17.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client18.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client19.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
client20.on("message", async(message) => {
	if (!dinfo.owner.includes(message.author.id)) return; 
  if(message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message)
  } else if(message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message)
  } else return null;
});
// ======= [ MODE - Join Server , add Friend END  ] ======== //

// ======= [ MODE - React MSG  ] ======== //
client.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client2.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client2.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) { // كههربا (حسن ياسر)
        return;
      } // كههربا (حسن ياسر)
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      } // كههربا (حسن ياسر)
    }
  } // كههربا (حسن ياسر)
}) // كههربا (حسن ياسر)
client3.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client3.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client4.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client4.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client5.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client5.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client6.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client6.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client7.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try { // جمــيع الحقوق محفوظة لدي "Kahrbaa"

        await msg.react(client7.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      }
    } else { // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        
      } catch(e) { // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        return;
      }
    }
  }
})
client8.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client8.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client9.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client9.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client10.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client10.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client11.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client11.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client12.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client12.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client13.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client13.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client14.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client14.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client15.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client15.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client16.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client16.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client17.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client17.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client18.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client18.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client19.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client19.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})
client20.on("message", async message => {
  if(message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; 
    let args = message.content.split(" ").slice(1);
    console.log(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":"))
    if(!args[0]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``');
    if (args[0].length > 18 || args[0].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الروم``').then(message => message.delete(4000)) };
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[1]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) { return message.channel.send(' Error : ``تاكد من ايدي الرسالة``').then(message => message.delete(4000)) };
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if(!args[2]) return message.channel.send(' Error : ``'+prefix+'react <ChannelID> <MessageID> <Emoji>``').then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0])
    if(!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if(!msg) return;
    if(!args.slice(2)) return;
    if(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2] && args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2].length == 18) {
      try {

        await msg.react(client20.emojis.get(args.slice(2).join(" ").replace(/\<|\>/g, "").split(":")[2]));
        
      } catch(e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
        
      } catch(e) {
        return;
      }
    }
  }
})

// ======= [ MODE - React MSG END  ] ======== //



// ======= [ functions - Join Server , add Friend   ] ======== //
  async function joinServer(invite, message) {
    console.log(invite);
    (require("request"))(
      {
        method: "POST",
        url: `https://discordapp.com/api/v6/invites/${invite}`,
        json: true,
        headers: {
          authorization: message.client.token
        }
      },
      async (err, res, body) => {
        if (err) {
          console.log(err);
          await console.log(`[ERROR] - ${err}`);
          return;
        } else {
          if (body.message.includes("Unknown Invite"))
            return console.log("[ERROR] - Unkown Invite.");
          if (body.message.includes("banned"))
            return console.log("[ERROR] - Banned from this server.");
          await console.log(`[INFO] - Done.`);
        }
      }
    );
  }
  
async function addFriend(id, message) {
  try {
    let user = await message.client.fetchUser(id);
    await (require("request"))(
    {
      url: `https://discordapp.com/api/v6/users/@me/relationships`,
      method: "POST",
      json: true,
      headers: {
        "Content-Type": "application/json",
        "authorization": message.client.token
      }, 
      body: {
        "username": user.username,
        "discriminator": parseInt(user.discriminator)
      }
    }, async (err, res, body) => {
        if (err) {
          await console.log(err);
          await console.log(`[ERROR] - ${err}`);
          return;
        } else {
          await console.log(body? body.message : "No status message.");
          await console.log(`[INFO] - Done.`);
        }
    })
  } catch(e) {
    console.log(`[ERROR] - ${e}`)
  }
}

// ======= [ functions - Join Server , add Friend END  ] ======== //


// ======= [ StayVoice - MODE  ] ======== //
client.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client2.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client3.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client4.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client5.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client6.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client7.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client8.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client9.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client10.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else { // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client11.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join() // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  } // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client12.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return;  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client13.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client14.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client15.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client16.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client17.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client18.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client19.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
client20.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stayvoice') {
  if (!dinfo.owner.includes(message.author.id)) return; 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('**DONE ..**!');
        })
        .catch(console.log);
    } else {
      message.reply('**- لازم تخش روم صوتي!**');
    }
  }
});
// ======= [ StayVoice - MODE END  ] ======== //




// ======= [ RANDOM - AVATAR  ] ======== //
const kahAVA = 'Ava';
client.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client2.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client2.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client3.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client3.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client4.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client4.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client5.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client5.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client6.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client6.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client7.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client7.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client8.on('message', message => {
 // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
       if(message.content.startsWith(prefix + 'randomava')) {
        client8.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client9.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)]; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client9.user.setAvatar(randomf); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client10.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client10.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client11.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client11.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client12.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client12.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client13.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client13.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client14.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client14.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client15.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client15.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client16.on('message', message => { // جمــيع الحقوق محفوظة لدي "Kahrbaa"

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + ''; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
       if(message.content.startsWith(prefix + 'randomava')) {
        client16.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client17.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
       if(message.content.startsWith(prefix + 'randomava')) {
        client17.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client18.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)]; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client18.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client19.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client19.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client20.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!dinfo.owner.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client20.user.setAvatar(randomf);
		        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
// ======= [ RANDOM - AVATAR end ] ======== //



// ======= [ SPAM - MODE  ] ======== //

client.on('warn', console.warn);
client.on('error', console.error);
const child_process = require("child_process");
client.on('message', message => {
if(message.content === prefix + "spam on") {
        if(dinfo.serverid === 'NONE') return message.reply(`**لم يتم وضع ايدي سيرفر الاسبام \`${prefix}setserverID\`**`).then(m => m.delete(5000));
        if(dinfo.channelid === 'NONE') return message.reply(`**لم يتم وضع ايدي روم الاسبام \`${prefix}setchannelID\`**`).then(m => m.delete(5000));
        if(dinfo.timespam === 'NONE') return message.reply(`**لم يتم وضع وقت الاسبام - بـ الثواني \`${prefix}settimeSpam\`**`).then(m => m.delete(5000));
        if(dinfo.timestop === 'NONE') return message.reply(`**لم يتم وضع وقت توقف الاسبام بـ الساعات \`${prefix}settimeStop\`**`).then(m => m.delete(5000));
      if (!dinfo.owner.includes(message.author.id)) return;
          message.channel.send(`**⚠️ | SPAM ON , <@${dinfo.owner}>**`);
        child_process.fork(__dirname + "/spam.js");
        console.log("[SYSTEM-SPAM] - تم التفعيل ..");
    }
  
  });
// ======= [ SPAM - MODE end ] ======== //


// ======= [ Credits - INFO ] ======== //

client.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client2.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client3.on('message', message => {
  	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client4.on('message', message => {
  	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client5.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client6.on('message', message => {
  	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client7.on('message', message => {
  	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client8.on('message', message => {
  	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client9.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client10.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client11.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client12.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client13.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client14.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client15.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client16.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client17.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client18.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client19.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});
client20.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
        message.channel.send('#credit')
  }});

// ======= [ Credits - INFO end ] ======== //



// ======= [ Daily - INFO ] ======== //

client.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client2.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client3.on('message', message => {
 	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client4.on('message', message => {
  	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client5.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client6.on('message', message => {
  	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client7.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client8.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client9.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client10.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client11.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client12.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client13.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client14.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client15.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client16.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client17.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client18.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client19.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});
client20.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
        message.channel.send('#daily')
    }});

// ======= [ Daily - INFO end ] ======== //



// ======= [ PROFILE - INFO ] ======== //

client.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }
});
client2.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }
});
client3.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }
});
client4.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }
});
client5.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }
});
client6.on('message', message => { // جمــيع الحقوق محفوظة لدي "Kahrbaa"
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }
});
client7.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }
});
client8.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client9.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    }
});
client10.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){ // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        message.channel.send('#profile')
    }});
client11.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }});
client12.on('message', message => { // جمــيع الحقوق محفوظة لدي "Kahrbaa"
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }});
client13.on('message', message => { // جمــيع الحقوق محفوظة لدي "Kahrbaa"
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }});
client14.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }});
client15.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }});
client16.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }});
client17.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }});
client18.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }});
client19.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }});
client20.on('message', message => {
	  if (!dinfo.owner.includes(message.author.id)) return;
    if(message.content === prefix +'prof'){
        message.channel.send('#profile')
    }}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

// ======= [ PROFILE - INFO end ] ======== //

 // جمــيع الحقوق محفوظة لدي "Kahrbaa"




client.login(process.env.KahTOKEN);
client2.login(process.env.KahTOKEN2);
client3.login(process.env.KahTOKEN3); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client4.login(process.env.KahTOKEN4);
client5.login(process.env.KahTOKEN5);
client6.login(process.env.KahTOKEN6);
client7.login(process.env.KahTOKEN7);
client8.login(process.env.KahTOKEN8);
client9.login(process.env.KahTOKEN9);
client10.login(process.env.KahTOKEN10); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client11.login(process.env.KahTOKEN11);
client12.login(process.env.KahTOKEN12);
client13.login(process.env.KahTOKEN13); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client14.login(process.env.KahTOKEN14);
client15.login(process.env.KahTOKEN15);
client16.login(process.env.KahTOKEN16);
client17.login(process.env.KahTOKEN17);
client18.login(process.env.KahTOKEN18);
client19.login(process.env.KahTOKEN19);
client20.login(process.env.KahTOKEN20);