const Discord = require('discord.js')
const commando = require('discord.js-commando');
const client  = new commando.Client({
  commandPrefix: "\\"
});
const config = require("./config.json");
const ytdl = require('ytdl-core-discord')

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

global.servers = [];

client.on("ready", () =>{
  console.log('Bot Online');
  client.user.setActivity("\\help for info", {type: "PLAYING"}).catch(console.error);
})

client.on('message', message=>{

  if(message.author == client.user){
    return
  }
  
  let args = message.content.split(" ")
  
  if (args[0] === 'random') {
    try{
    if (args[1] && args[2] && !isNaN(args[1]) && !isNaN(args[2])) {
      var rand1 = args[1]
      var rand2 = args[2]
      var randomNum = Math.floor(Math.random()*(Math.abs(rand2-rand1)+1)+Math.min(rand1, rand2))
      message.channel.send(randomNum)
    }
      else {
        const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593098453869920257/confused.jpg')
        message.channel.send(conf);
      }
    }
    catch(ArrayIndexOutofBoundsError){ 
      const conf = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593098453869920257/confused.jpg')
      message.channel.send(conf);
    }
  }

  switch(message.content.toLowerCase()){
    case'i\'m hungry':
      var randomNumber = Math.floor(Math.random()*3+1)
      switch(randomNumber){
        case 1:
          message.channel.send('HAVE SOME LUCIO OHS')
        break;
        case 2:
          message.channel.send('ANDY HOT AND COOL')
        break;
        case 3:
          const kirbo = new Discord.Attachment('https://media.giphy.com/media/5ev3alRsskWA0/giphy.gif')
          message.channel.send(kirbo)
        break;
      }
    break;
    case '???':
    case '?!?!':
    case '!?!?':
        const nani = new Discord.Attachment('https://cdn.discordapp.com/attachments/592779094769401924/593073499522859008/Nani.gif')
        message.channel.send(nani)
    break;
    case 'bye':
      message.channel.send('https://clips.twitch.tv/BlueMoldyClipzRlyTho')
    break;
    case 'gg ez':
      var rand2 = Math.floor(Math.random()*6)
      const replies = ["Well played. I salute you all.",
      "For glory and honor! Huzzah comrades!",
      "I'm wrestling with some insecurity issues in my life but thank you all for playing with me.",
      "It's past my bedtime. Please don't tell my mommy.",
      "Gee whiz! That was fun. Good playing!",
      "I feel very, very small... please hold me..."
      ]
      message.channel.send(replies[rand2])
    break;
    case 'amazing':
      message.channel.send('A-MEI-ZING')
    break;
    case 'plan':
      message.channel.send('RUSH B NO STOP')
    break;
    case 'and dey say':
      message.channel.send('CHIVALRY IS DEAD')
    break;
    case 'mr. stark':
      message.channel.send('I don\'t feel so good')
    break;
    case 'lol':
      message.channel.send('no ian :)')
    break;
  }
  
  if (message.content.includes('thank')){
    message.channel.send("you're welcome :)")
  }
  if (message.content.includes('who ')){
    message.channel.send('me :)')
  }
  if (message.content.toLowerCase().includes('rishab')){
      message.channel.send('\"Andy owes me dinner\"')
}
  if (message.content.toLowerCase().substring(0,3).includes('is ') || 
           message.content.toLowerCase().substring(0,5).includes('does ') || 
           message.content.toLowerCase().substring(0,7).includes('should ') ||
           message.content.toLowerCase().substring(0,4).includes('was ') || 
           message.content.toLowerCase().substring(0,5).includes('will ') || 
           message.content.toLowerCase().substring(0,6).includes('could ') ||
           message.content.toLowerCase().substring(0,4).includes('can ')  ||
           message.content.toLowerCase().substring(0,4).includes('are ') ||
           message.content.toLowerCase().substring(0,3).includes('am ')) {
    var rand = Math.floor(Math.random()*3)
    if (rand === 0){
      message.channel.send('yes :)')
    }
    else if (rand === 1){
      message.channel.send('no :)')
    }
    else if (rand === 2){
      message.channel.send('perhaps :)')
    }
  }
  else if (message.content.includes('stop')){
    message.channel.send("no :)")
  }
  else if (message.content.includes('ok gene')){
    var rand = Math.floor(Math.random()*15)+1
      var os = ''
      var i = 0
      for (i = 0; i < rand; i++){
        os += 'o'
      }
      var okIan = os + 'k ian'
      message.channel.send(okIan)
  }
})

client.login(process.env.token);
