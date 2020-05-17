// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const hastebins = require('hastebin-gen');
const pretty = require("pretty-ms");
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


//code


const myid = ['440577280952238097'];
const prefix = ['-']

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : 3bker `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`IM READY !! ' `);
   console.log(`----------------`);
});


client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === prefix + "help") {
    message.channel.send(`**Credits Bot Help
-
Prefix + d | لاخذ دايلي الحساب
-
Prefix + C | لمعرفة كم الكريديت الموجوده ب الحساب
-
Prefix + r | لاخذ ريب الحساب
-**

**__طريقة سحب الكريديت من الحساب__**

*الخطوة الاولي*

__Prefix + s + #credits + Mention + Amount__

*الخطوه الثانية*

__prefix + s + رقم تأكيد التحويل__`);
  }
});

client.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});


client.on('message', message => {
    if(message.content === prefix+'p'){
        message.channel.send('#profile')
    }
});

client.on('message', message => {
    if(message.content === prefix+'u'){
        message.channel.send('#user')
    }
});

client.on('message', message => {
    if(message.content === prefix+'i'){
        message.channel.send('#id')
    }
});

client.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});







client.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Abdo = [];
var AbdoSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client.on('message', message => {
    
     
    if (message.content === prefix + 'spam') { 
        if (AbdoSPAM.indexOf(message.channel.id) < 0) {
            AbdoSPAM.push(message.channel.id);
        }
        message.channel.send('**__تم تفعيل الاسبام__**');
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 120000);

        clearInterval(interval);
        if (AbdoSPAM.length > 0) {
            interval = setInterval(function() {
                if (AbdoSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Abdo.length > 0) {
                    if (Abdo[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Abdo[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(AbdoSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === prefix + 'stop') {
        var index = AbdoSPAM.indexOf(message.channel.id);
        if (index > -1) {
          AbdoSPAM.splice(index, 1);
        }
        message.channel.send('**___تــم ايقاف الاسبام__**');
      
        clearInterval(interval);
        if (AbdoSPAM.length > 0) {
            interval = setInterval(function() {
                if (AbdoSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Abdo.length > 0) {
                    if (Abdo[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Abdo[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(AbdoSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 28800000);
        }
    }
    
    if (message.content === prefix + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + AbdoSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});
client.login(process.env.BOT_TOKEN);
