const express = require("express");
const session = require("express-session");
const request = require("request");
const app = express ();
app.get ('/', (req, res) => {
res.sendStatus (200);
});
app.listen (process.env.PORT);
function m() {
request.get(`https://${process.env.PROJECT_DOMAIN}.glitch.me/`, (error, response, body) => {
let ff = body;
return ff
}
)}
setInterval(m, 60000); 

  const Discord = require('discord.js');
  const { Client, RichEmbed } = require("discord.js");
  const client = new Client({ disableEveryone: false})
  const botversion = require('./package.json').vهersion;
  const fs = require('fs');
  const ms = require("ms");
  const prefix = '#'
  const devs = ['541532350719459348','99351862692544532']
  const moment = require('moment')
  client.login("NzMzMTExOTU3ODc1NTg5MTcx.Xw-ZxA.18o9l01tnqvBZVuDGDY241ybvnw");
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  })

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity(' #help-vip+ | Me Codes V5.0.2 ', { type: 'PLAYING' })
});

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "help-vip+")) {
    if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
  
  let embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setAuthor(`Me Codes VIP+ | V5.0.2`)
  .setDescription(`** 
قـائـمـه اولا : <:694579691209621654:697941185666351135> 

قـائـمـه ثـانـيـا : <:694579689469247539:697941183611273217> 

قـائـمـه ثـالـث : <:694579693063766126:697941183690833991>
**`)
message.channel.send(embed).then(async msg => {
                    await msg.react("🟢")
                    await msg.react("🟠")
                    await msg.react("🔴")
  const a = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "🟢" && user.id === message.author.id, {time: 86400000})
  const d = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "🟠" && user.id === message.author.id, {time: 86400000})
  const s = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "🔴" && user.id === message.author.id, {time: 86400000})
          a.on('collect', async r => {
              await r.remove(message.author)
                        embed.setDescription(`**
 #codes translator :  \` كود مترجم \`
 #codes weather :  \` كود الطقس \`
 #codes avatar :  \` كود صور البروفايل مطور \`
 #codes lyrics :  \`  عرض كلمات اغانى \`
 #codes clear :  \` مسح شات برو بوت \`
 #codes Cat pictures :  \` يطلع صور حيوانات كل شوى \`
 #codes Search for pictures :  \` كود بحث عن صور متحركه \`
 #codes welcome :  \` كود ترحيب \`
 #codes profile :  \` كود بروفايل \`
 #codes log :  \` كود لوق بجيسون \`
 #codes prove :  \` كود يطلع صور ثبت نفسك جاهزة \`
 #codes antibots :  \` كود حماية من بوتات \`
 #codes antispreed :  \` كود منع نشر روبط بجيسون \`
 #codes give role :  \` كود رول برو بوت \`
 #codes setprefix :  \` كود تغير برفكس \`
 #codes suggestions :  \`كود قتراحات \`
 #codes ban :  \` كود بان مطور \`
 #codes kick :  \` كود طرد مطور \`
 #codes submit :  \` كود تقديم مطور \`
 #codes giveaways :  \` كود قيف اوى \` **`)
                        embed.setAuthor(`${client.user.tag}`)
                        msg.edit(embed)
                    })
                    d.on('collect', async r => {
                        await r.remove(message.author);
                        embed.setDescription(`**
 #codes id :  \` كود اى دى برو بوت \`
 #codes ticket :  \` كود ت	كيت فى الخاص \`
 #codes xp :  \` كود اكس بى \`
 #codes help2 :  \` كود الهلب بشات معين \` 
 #codes buy :  \` كود شراء رتب بجيسون + لوق \`
 #codes rollreaction :  \` كود رول ركشن \`
 #codes play :  \` كود اغانى مطور \`
 #codes search youtube :  \` كود بحث فى يوتيوب \`
 #codes rep :  \` كود ريب شبه برو بوت \`
 #codes moji roll :  \` عطاء عضو رتب بركشن \` 
 #codes bc :  \` كود برودكاست \`
 #codes automatic roll :  \` رتب تلقائى لم عضو يدخل \`
 #codes topinvites :  \` توب عداد الدعوت \`
 #codes mutes :  \` كود ميوت بجيسون \`
 #codes bans :  \` كود قائمه باند فى سيرفرم \`
 #codes starch Infite :  \` نشاء ربط دعوه \`
 #codes Coved : \` حصائيات فيروس كورونا \` 
 #codes Date and time : \` معرفة الوقت + التاريخ \`
 #codes sans : \` كود سانس \`
 #codes minesweeper : \` لعبة minesweeper \`
**`) 
                        embed.setAuthor(`${client.user.tag}`)
                        msg.edit(embed)
                    })
  s.on('collect', async r => {
    await r.remove(message.author)
    embed.setAuthor(`${client.user.tag}`)
    embed.setDescription(`<a:575205174637887488:594174234134315028>  | ** جارى صنع الكود ** `)
    msg.edit(embed) 
})                
})
  }
})



client.on('message', message => {
if (message.content === '#codes translator') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/translator.txt');
const attachment = new Discord.Attachment(buffer, 'Translator.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes weather') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/weather.txt');
const attachment = new Discord.Attachment(buffer, 'Weather.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes avatar') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/avatar.txt');
const attachment = new Discord.Attachment(buffer, 'avatar.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes lyrics') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/lyrics.txt');
const attachment = new Discord.Attachment(buffer, 'lyrics.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});
client.on('message', message => {
if (message.content === '#codes clear') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/clear.txt');
const attachment = new Discord.Attachment(buffer, 'clear.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes cat pictures') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/Cat pictures.txt');
const attachment = new Discord.Attachment(buffer, 'Cat pictures.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes Search for pictures') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/Search for pictures.txt');
const attachment = new Discord.Attachment(buffer, 'Search for pictures.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes welcome') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/welcome.txt');
const attachment = new Discord.Attachment(buffer, 'Welcome.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes profile') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/profile.txt');
const attachment = new Discord.Attachment(buffer, 'Profile.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes log') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/log.txt');
const attachment = new Discord.Attachment(buffer, 'log.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes prove') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/prove.txt');
const attachment = new Discord.Attachment(buffer, 'Prove.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes antibots') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/antibots.txt');
const attachment = new Discord.Attachment(buffer, 'Anti Bots.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes antispreed') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/antispreed.txt');
const attachment = new Discord.Attachment(buffer, 'Anti Spreed.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes give role') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/give role.txt');
const attachment = new Discord.Attachment(buffer, 'Give Role.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes setprefix') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/setprefix.txt');
const attachment = new Discord.Attachment(buffer, 'Set Prefix.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes suggestions') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/suggestions.txt');
const attachment = new Discord.Attachment(buffer, 'Suggestions.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes ban') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/ban.txt');
const attachment = new Discord.Attachment(buffer, 'Ban.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes kick') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/kick.txt');
const attachment = new Discord.Attachment(buffer, 'Kick.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes submit') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/submit.txt');
const attachment = new Discord.Attachment(buffer, 'Submit.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes giveaways') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/giveaways.txt');
const attachment = new Discord.Attachment(buffer, '.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes id') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/id.txt');
const attachment = new Discord.Attachment(buffer, 'ID.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes ticket') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/ticket.txt');
const attachment = new Discord.Attachment(buffer, 'Ticket.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes xp') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/xp.txt');
const attachment = new Discord.Attachment(buffer, 'XP.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes help2') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/help2.txt');
const attachment = new Discord.Attachment(buffer, 'help.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes buy') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/buy.txt');
const attachment = new Discord.Attachment(buffer, 'Buy.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes rollreaction') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/rollreaction.txt');
const attachment = new Discord.Attachment(buffer, 'Roll Reaction.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes play') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/play.txt');
const attachment = new Discord.Attachment(buffer, 'play.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes search youtube') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/search youtube.txt');
const attachment = new Discord.Attachment(buffer, 'Search YouTube.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes rep') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/rep.txt');
const attachment = new Discord.Attachment(buffer, 'rep.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes moji roll') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/moji roll.txt');
const attachment = new Discord.Attachment(buffer, 'Moji Roll.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes bc') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/bc.txt');
const attachment = new Discord.Attachment(buffer, 'bc.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes automatic roll') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/automatic roll.txt');
const attachment = new Discord.Attachment(buffer, 'Automatic roll.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes topinvites') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/topinvites.txt');
const attachment = new Discord.Attachment(buffer, 'Top Invites.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes mutes') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/mutes.txt');
const attachment = new Discord.Attachment(buffer, 'mutes.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes bans') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/bans.txt');
const attachment = new Discord.Attachment(buffer, 'bans.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes starch Infite') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/Create an invitation link.txt');
const attachment = new Discord.Attachment(buffer, 'Create an invitation link.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes bot information') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/bot information.txt');
const attachment = new Discord.Attachment(buffer, 'Bot information.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes Coved') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/Coved.txt');
const attachment = new Discord.Attachment(buffer, 'Coved.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes photo memes') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/photo memes.txt');
const attachment = new Discord.Attachment(buffer, 'photo memes.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes Date and time') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/Date and time.txt');
const attachment = new Discord.Attachment(buffer, 'Date and time.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});	




const buy = JSON.parse(fs.readFileSync('./buy.json' , 'utf8'));
client.on('message',message =>{
  if(message.content.startsWith(prefix + 'buy 11111111111')) {
  if(!buy[message.guild.id]) buy[message.guild.id] = {
  role:'null',
  price:'null',
  transfer:'null',
  onoff:'Off'
  };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
  if(!message.member.hasPermission('MANAGE_GUILD')) return;
  let args = message.content.split(" ").slice(2).join(" ");
  if(!args) return message.channel.send(`🙄 Please Type the role Name/ID`);
  let role = message.guild.roles.find('name',args)||message.guild.roles.find('id',args);
  if(!role) return message.channel.send(`🙄 I Can't find this role`);
  buy[message.guild.id].role = role.id
  fs.writeFile("./buy.json", JSON.stringify(buy), (err) => {if (err) console.error(err)})
  message.channel.send(new Discord.RichEmbed()
  .setColor('#35393e').setFooter(message.author.tag,message.author.avatarURL).setTimestamp()
  .setAuthor('Change settings',message.guild.iconURL)
  .addField(`**Role Now**`,`**\`\`\`${role.name}\`\`\`**`,true)
  )
  }
  if(message.content.startsWith(prefix+'buy aaaa1')) {
  if(!message.member.hasPermission('MANAGE_GUILD')) return;
  if(!buy[message.guild.id]) buy[message.guild.id] = {
  role:'null',
  price:'null',
  transfer:'null',
  onoff:'Off'//
  };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
  let args = message.content.split(" ").slice(2).join(" ");
  if(!args) return message.channel.send(`🙄 Please Type the role Price`)
  if(isNaN(parseInt(args))) return message.channel.send(`🙄 The price is wrong!`)
  if(parseInt(args)<0) return message.channel.send(`🙄 The price is wrong!`)
  buy[message.guild.id].price = args
  fs.writeFile("./buy.json", JSON.stringify(buy),(err)=>{if(err)console.error(err)})
  message.channel.send(new Discord.RichEmbed()
  .setColor('#36393e').setFooter(message.author.tag,message.author.avatarURL).setTimestamp()
  .setAuthor('Change settings',message.guild.iconURL)
  .addField(`**Role Price Now**`,`**\`\`\`${args}$\`\`\`**`,true)
  )
  }
  if(message.content.startsWith(prefix+'buy 1111111')) {
  if(!message.member.hasPermission('MANAGE_GUILD')) return;
  if(!buy[message.guild.id]) buy[message.guild.id] = {
  role:'null',
  price:'null',
  transfer:'null',
  onoff:'Off'
  };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
  let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[2])
  buy[message.guild.id].transfer = user.id
  fs.writeFile("./buy.json", JSON.stringify(buy), (err) => {if (err) console.error(err)})
  message.channel.send(new Discord.RichEmbed()
  .setColor('#36393e').setFooter(message.author.tag,message.author.avatarURL).setTimestamp()
  .setAuthor('Change settings',message.guild.iconURL)
  .addField(`**Trans To**`,`**${user}**`,true)
  )
  }
  if(message.content.startsWith(prefix+'buy on')) {
  if(!message.member.hasPermission('MANAGE_GUILD')) return;
  if(!buy[message.guild.id]) buy[message.guild.id] = {
  role:'null',
  price:'null',
  transfer:'null',
  onoff:'Off'
  };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
  buy[message.guild.id].onoff = 'On'
  fs.writeFile("./buy.json", JSON.stringify(buy), (err) => {if (err) console.error(err)})
  let on1 = new Discord.RichEmbed()
  .setColor('#36393e')
  .setDescription(`**\`\`\`The BuyRole Has Been Enabled\`\`\`**`)
  message.channel.send(on1)
  }
  if(message.content.startsWith(prefix+'buy off')) {
  if(!message.member.hasPermission('MANAGE_GUILD')) return;
  if(!buy[message.guild.id]) buy[message.guild.id] = {
  role:'null',
  price:'null',
  transfer:'null',
  onoff:'Off'
  };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
  buy[message.guild.id].onoff = 'Off'
  fs.writeFile("./buy.json", JSON.stringify(buy), (err) => {if (err) console.error(err)})
  let off1 = new Discord.RichEmbed()
  .setColor('#36393e')
  .setDescription(`**\`\`\`The BuyRole has been disabled\`\`\`**`)
  message.channel.send(off1)
  }
  if(message == prefix + 'buy vip+') {
  if(!buy[message.guild.id]) buy[message.guild.id] = {
  role:'null',
  price:'null',
  transfer:'null',
  onoff:'Off'
  };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
  let pp = buy[message.guild.id].price
  let brole = message.guild.roles.find('id',buy[message.guild.id].role)
  let btrans = buy[message.guild.id].transfer
  if(!brole) return message.channel.send(`🙁 Please setup the command again`)
  if(!message.guild.members.find('id',buy[message.guild.id].transfer))return message.channel.send(`🙁 Please setup the command again`)
  if(buy[message.guild.id].onoff === 'Off') return message.channel.send(`🙁 - the command has been disabled\nplease type __${prefix}buy on__ to turn it on`)
  if(message.author.id === buy[message.guild.id].transfer) return message.channel.send(`you can't buy a rank because you can't transfer credits to your self 🤗`)
  if(message.member.roles.find(r=>r.id == buy[message.guild.id].role)) return message.reply(`**You already have the rank \`${brole.name}\` ✅**`);
  message.channel.send(new Discord.RichEmbed()
  .setColor('#36393e')
  .addField(`**Command:**`, `**\`#credits ${message.guild.members.get(buy[message.guild.id].transfer)} ${buy[message.guild.id].price}\`**`)).then(msgs=>{
  let lPrice = Math.floor(pp-(pp*(5/100)));
  let filter = response => response.author.id == "567703512763334685" && response.mentions._content.includes(`:moneybag: | ${message.author.username}, has transferred \`$${lPrice}\` to <@${buy[message.guild.id].transfer}>`);
  message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
  let log = message.guild.channels.find("name", `❖・log・vip2`);
  let gg = new Discord.RichEmbed()
  .setColor('#36393e')
  .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588151955063570433/582096911448801288.png`)
  .setAuthor(`New purchase`,`https://cdn.discordapp.com/attachments/584630360017469461/584687464334098432/581239984376381455.gif`)
  .addField(`**User :**`,`${message.author.id}، ${message.author}`,true)
  .addField(`**Role :**`,`\`\`\`${brole.name}\`\`\``,true)
  .addField(`**💰 Rank Price :**`,`\`\`\`${buy[message.guild.id].price}$\`\`\``,true)
  .addField(`**💳 Transferd To :**`,`<@${buy[message.guild.id].transfer}>`,true)
  .addField(`**Date:**`,`\`\`\`${moment(message.author).format('DD/MM/YYYY')}\`\`\` `,true)
  .setTimestamp();
  if(log) log.send(gg)
  const done = new Discord.RichEmbed()
  .setColor('#36393e')
  .setDescription(`**\`\`\`Done Buy Role ${brole.name}\`\`\`**`)
  .setTimestamp();
  message.member.addRole(brole)
  message.channel.send(done);
 var mmm = setTimeout(() => {
message.member.removeRole(brole)
}, 2592000000)
  message.author.send(new Discord.RichEmbed()
  .setColor("#36393e")
  .setTitle('Role VIP')
  .setDescription(`\`\`\`RANK NAME: ${brole.name} RANK PRICE: ${buy[message.guild.id].price}$ \`\`\``)
  .setFooter(message.guild.name,message.guild.iconURL))
})
})
}
});


client.on('message', message => {
if (message.content === '#codes sans') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/sans.txt');
const attachment = new Discord.Attachment(buffer, 'Sans.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});

client.on('message', message => {
if (message.content === '#codes minesweeper') {
if (message.channel.id !== '709679324709781545') return message.reply(`** No --- <#709679324709781545> **`)
let rank = message.guild.member(message.author).roles.find('name', '⌥ VIP +');
if (!rank) return message.channel.send('**  There is no matching rank __VIP +__ .. **');
const buffer = fs.readFileSync('codes/minesweeper.txt');
const attachment = new Discord.Attachment(buffer, 'Minesweeper.txt');
message.channel.send(`${message.author}, Done, Go ahead, Folder <:580185227381702676:677203444788101170> `, attachment);
}
});
