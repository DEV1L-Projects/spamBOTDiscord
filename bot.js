const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const myid = ['440577280952238097'];
const prefix = ['-'];
const fs = require("fs");
const config = require("./config.json")

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});

const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
client.on("message", async msg => {
    if(!msg.guild) return;
    if(msg.author.bot) return;
if(!dinfo) dinfo = { // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        owner: "440577280952238097"
}});

client.on('message', message => {
    if(message.content === prefix+'d1'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'c1'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'r1'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on('message', message => {
    if(message.content === prefix+'p1'){
        message.channel.send("#profile")
    }
});

client.on('message', message => {
if (message.content === prefix+'s1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Hello Im Under The Water Please Help Me :joy:**`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"1") {
if (!dinfo.owner.includes(message.author.id)) return; 
let rank = message.guild.member(message.author).roles.find('name', 'Founder');
if (!rank) return  message.channel.send("Sorry You Dont My Owner").then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
    if(message.content === prefix+'d2'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'c2'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'r2'){
        message.channel.send('#rep <@286088294234718209>')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'p2'){
        message.channel.send('#profile')
    }
});

client2.on('message', message => {
if (message.content === prefix+'s2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**يا ابن العبيطههه :joy: :joy:**`)
          .then(m => {
            count++;
          })
          
        }
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
let rank = message.guild.member(message.author).roles.find('name', 'Founder');
if (!rank) return  message.channel.send("Sorry You Dont My Owner").then(m => m.delete(5000))
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
