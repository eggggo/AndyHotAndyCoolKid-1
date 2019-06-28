const ytdl = require('ytdl-core-discord');

const Discord = require('discord.js');
const client = new Discord.Client();

const play = async (connection, url) => {
  connection.play(await ytdl(url), { type: 'opus' });
};

client.on('message', async (message) => {

  const args = message.content.slice('!').trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === '!p') {
    const voiceConnection = await message.member.voice.channel;

    voiceConnection.join().then(async connection => {

      play(connection, args.toString());

      await message.channel.send(`Now playing ${args}`);
    }).catch(err => console.error(err));
  }
});