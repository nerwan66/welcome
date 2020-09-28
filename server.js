require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs, TOKEN } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"); //تعديل اساسي سوي اي بي اي جديد
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"; ///تعديل اساسي سوي اي بي اي جديد
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
// ==================== ( playing ) ==================== //
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(prefix + "help", { type: "PLAYING" });
});
// ==================== ( help ) ==================== //

client.on("message", fixup => {
  if (fixup.content === prefix + "help") {
    let Dashboard = `**First Part For Everyone :

> ${prefix}members
> ${prefix}invite
> ${prefix}join
> ${prefix}roles
> ${prefix}allbots
> ${prefix}ping
> ${prefix}emojilist
> ${prefix}botinfo
> ${prefix}date
> ${prefix}savatar
> ${prefix}sbot
Second Page For Roles :
> ${prefix}say
> ${prefix}websay
> ${prefix}embed
> ${prefix}lock
> ${prefix}unlock
> ${prefix}banlist
> ${prefix}unbanall
> ${prefix}clear
Third Page For Welcome & left :
> welcome **
> 𝙻𝙸𝙵𝚃**`;
    var addserver = `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`;
    var SUPPORT = `https://discord.gg/6ASrSeG`;
    let mrfixup = new Discord.RichEmbed().setTitle(`Helpful Links`)
      .setDescription(`                                                                                                               
**[Add To Your Server ](${addserver})** | **[ Server Support](${SUPPORT})**
**${Dashboard}**
`);
    fixup.react("✅");
    fixup.author.send(mrfixup);
  }
});
// =================================[ voice active ]===================================
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "join") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**Joined**");
        })
        .catch(console.log);
    } else {
      message.reply("**Firs You Join A Voice**");
    }
  }
});
// =================================[ roles ]===================================
client.on("message", message => {
  if (message.content === prefix + "roles") {
    var roles = message.guild.roles.map(roles => `${roles.name}, `).join(" ");
    const embed = new Discord.RichEmbed()
      .setColor("WHITE")
      .addField("Server Roles :", `**[${roles}]**`);
    message.channel.sendEmbed(embed);
  }
});
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;
  if (message.content === prefix + "banlist") {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("You Dont Have `MANAGE_EMOJIS` Permission .");
    message.guild.fetchBans().then(bans => {
      let i = 1;
      let b = bans.size;
      let bb = bans.map(a => `${i++} - ${a}`).join(" \n ");
      let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Found ${b} bans in this server`)
        .setDescription(`${bb}`)
        .setFooter(`${client.user.username}`, client.user.avatarURL)
        .setTimestamp();
      message.channel.send(embed);
    });
  }
});
/// /===============================================[ • responder • ]=============================================\\\\

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == prefix + "allbots") {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(
        `**Found ${
          message.guild.members.filter(m => m.user.bot).size
        } bots in this Server**
${botssize.join("\n")}`
      )
      .setImage(
        "https://media.discordapp.net/attachments/697272909890060349/738603930128220270/image0.gif"
      )
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();
    message.channel.send(embed);
  }
});
// ===========( sbot ) ========
client.on("message", message => {
  if (message.content === prefix + "sbot") {
    if (!message.channel.guild) return;
    if (message.content < 1023) return;
    const Embed11 = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setDescription(
        `*** This Bot Joined In This Servers : ${
          client.guilds.size
        } \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join("\n")}***`
      )
      .setImage(
        "https://media.discordapp.net/attachments/725981750135619594/738126545704452236/image0.gif"
      );
    message.channel.sendEmbed(Embed11);
  }
});

// ======================================[say embed]======================================
client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {
    if (!message.channel.guild)
      return message.channel
        .send("ئەم فەرمانە تەنھا بۆ سێرڤەرە")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("ببورە تۆ ڕۆڵت نییە ، ADMINISTRATOR");
    message.delete();
    message.channel.sendMessage(args.join(" "));
  }

  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send("ئەم فەرمانە تەنھا بۆ سێرڤەرە")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("ببورە تۆ ڕۆڵت نییە ، ADMINISTRATOR");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor("RANDOM");
    message.channel.sendEmbed(say);
    message.delete();
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "websay")) {
    const args = message.content.substring(prefix.length).split(" ");

    message.delete();
    args.shift();
    let msg = args.join(" ");
    message.channel
      .createWebhook(message.author.username, message.author.avatarURL)
      .then(wb => {
        const user = new Discord.WebhookClient(wb.id, wb.token);
        user.send(msg);
        user.delete();
      })
      .catch(console.error);
  }
});
// ======================================[close open]======================================

client.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.channel.guild)
      return message.reply("❌ | ئەم فەرمانە تایبەتە بە سێرڤەر");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("❌ | ببورە تۆ ڕۆڵت نییە");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("** ✔ | چات داخرا **");
      });
  }
  if (message.content === prefix + "unlock") {
    if (!message.channel.guild)
      return message.reply("❌ | ئەم فەرمانە تایبەتە بە سێرڤەر");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("❌ | ببورە تۆ ڕۆڵت نییە");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("** ✔ | چات کرایەوە **");
      });
  }
});
client.on("error", err => {
  console.log(err);
});
// ======================================[member count chat]======================================
client.on("message", message => {
  if (message.content == prefix + "members") {
    const embed = new Discord.RichEmbed().setDescription(`**Cases oF Members :  
  (online) : ${
    message.guild.members.filter(m => m.presence.status == "online").size
  }
  (Busy) : ${message.guild.members.filter(m => m.presence.status == "dnd").size}
  (idle) : ${
    message.guild.members.filter(m => m.presence.status == "idle").size
  }   
  (offline) : ${
    message.guild.members.filter(m => m.presence.status == "offline").size
  } 
  (All) : ${message.guild.memberCount}**`);
    message.channel.send({ embed });
  }
});
// ==================== ( server ) ==================== //
// ==================== ( emoji list ) ==================== //
client.on("message", message => {
  if (message.content.startsWith(prefix + "emojilist")) {
    const List = message.guild.emojis.map(e => e.toString()).join(" ");

    const EmojiList = new Discord.RichEmbed()
      .setTitle("**Emojis**")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setColor("RANDOM")
      .setDescription(List)
      .setFooter(message.guild.name);
    message.channel.send(EmojiList);
  }
});
// ============== ( ban list ) =============

// ============== (botinfio) =============

client.on("message", message => {
  if (message.content.startsWith(prefix + "botinfo")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle("``Info Bot™``")
        .addField(
          "**My Ping**",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField(
          "**RAM Usage**",
          `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`,
          true
        )
        .addField("**Servers**", [client.guilds.size], true)
        .addField("**Channels**", `[ ${client.channels.size} ]`, true)
        .addField("**Users**", `[ ${client.users.size} ]`, true)
        .addField("**My Name**", `[ ${client.user.tag} ]`, true)
        .addField("**My ID**", `[ ${client.user.id} ]`, true)
        .addField("**DiscordJS**", `[ ${Discord.version} ]`, true)
        .addField("**NodeJS**", `[ ${process.version} ]`, true)
        .addField("**Arch**", `[ ${process.arch} ]`, true)
        .addField("**Platform**", `[ ${process.platform} ]`, true)
        .addField("**My Prefix**", `[ ${prefix} ]`, true)
        .addField("**My Language**", `[ JavaScript | Node.js ]`, true)
        .setFooter("By : NIRWAN & ")
    });
  }
});
// ============== ( unban ) =============
client.on("message", async message => {
  if (message.content === prefix + "unbanall") {
    var user = message.mentions.users.first();
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "❌|** You Dont Have `ADMINISTRATOR` Perm . **"
      );
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

    message.guild.fetchBans().then(ba => {
      ba.forEach(ns => {
        message.guild.unban(ns);
        const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(
            "Succes!",
            "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455"
          )
          .setDescription(`**:white_check_mark: Has Been Unban For All**`)
          .setFooter(
            "Requested by " + message.author.username,
            message.author.avatarURL
          );
        message.channel.sendEmbed(embed);
        guild.owner.send(`Server : ${guild.name}
  **Everyone was unbanned by** : <@${message.author.id}>`);
      });
    });
  }
});
// ==================== ( date ) ==================== //
const HeRo = new Discord.Client();
client.on("message", message => {
  if (message.content === prefix + "date") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers **");
    var currentTime = new Date(),
      Year = currentTime.getFullYear(),
      Month = currentTime.getMonth() + 1,
      Day = currentTime.getDate();

    var Date15 = new Discord.RichEmbed()
      .setTitle("**-[ مانگ و ساڵ ]-**")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("" + Day + "-" + Month + "-" + Year + "");
    message.channel.sendEmbed(Date15);
  }
});
// ==================== ( clear  ) ==================== //

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "clear")) {
    if (!message.channel.guild)
      return message.reply(`** This Command For Servers Only**`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`** You don't have Premissions!**`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message
        .reply(`** The number can't be more than **100** .**`)
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";
    message.channel
      .fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages))
      .then(msgs => {
        message.channel
          .send(`** Done , Deleted \`${msgs.size}\` messages.**`)
          .then(messages => messages.delete(5000));
      });
  }
});
// ==================== ( avatar ) ==================== //

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "avatar")) {
    const mention = message.mentions.users.first();

    if (!mention) return console.log("");
    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(
        `${mention.username}#${mention.discriminator}`,
        `${mention.avatarURL}`
      )
      .setTitle("Avatar Link")
      .setURL(`${mention.avatarURL}`)
      .setImage(`${mention.avatarURL}`)
      .setFooter(
        `Requested By ${message.author.tag}`,
        `${message.author.avatarURL}`
      );
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "savatar")) {
    let doma = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setTitle("Avatar Link")
      .setURL(message.guild.iconURL)
      .setImage(message.guild.iconURL)
      .setFooter(
        `Requested By ${message.author.tag}`,
        message.author.avatarURL
      );
    message.channel.send(doma);
  } else if (message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    client.fetchUser(avt).then(user => {
      avt = user;
      let embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor(`${avt.tag}`, avt.avatarURL)
        .setTitle("Avatar Link")
        .setURL(avt.avatarURL)
        .setImage(avt.avatarURL)
        .setFooter(
          `Requested By ${message.author.tag}`,
          message.author.avatarURL
        );
      message.channel.send(embed);
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    // الامر

    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("**🆔 Server ID:**", message.guild.id, true)
      .addField(
        "**📅 Created On**",
        message.guild.createdAt.toLocaleString(),
        true
      )
      .addField(
        "**👑 Owned by**",
        `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`
      )
      .addField("**👥 Members**", `[${message.guild.memberCount}]`, true)
      .addField(
        "**💬 Channels **",
        `**${message.guild.channels.filter(m => m.type === "text").size}**` +
          " text | Voice  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField("**🌍 Others **", message.guild.region, true)
      .addField(
        "**🔐 Roles **",
        `**[${message.guild.roles.size}]** Role `,
        true
      )
      .setColor("RANDOM");
    message.channel.sendEmbed(embed);
  }
});
// ==================== ( ping ) ==================== //
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "ping")) {
    if (!message.channel.guild) return;
    var msg = `${Date.now() - message.createdTimestamp}`;
    var api = `${Math.round(client.ping)}`;
    if (message.author.bot) return;
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("#5016f3")
      .addField("**Time Taken:**", msg + " ms :signal_strength: ")
      .addField("**WebSocket:**", api + " ms :signal_strength: ")
      .setTimestamp();
    message.channel.send({ embed: embed });
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    let invite = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTitle(" Invite Link ")
      .setURL(
        `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`
      )
      .setImage(
        "https://media.discordapp.net/attachments/725981750135619594/738126545704452236/image0.gif"
      );
    message.channel.sendEmbed(invite);
  }
});
client.on("guildMemberRemove", member => {
  let welcomer = member.guild.channels.find(channel => channel.name === "𝙻𝙸𝙵𝚃");
  if (!welcomer) return;
  if (welcomer) {
    moment.locale("en-ly");
    var h = member.user;
    let norelden = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(h.avatarURL)
      .setAuthor(h.username, h.avatarURL)
      .addField("🧔🏻| Server Member :", member.guild.memberCount)
      .addField(
        "⌚️|Create Your Account Time :",
        `${moment(member.user.createdAt).format(
          "D/M/YYYY h:mm a"
        )} **\n** \`${moment(member.user.createdAt).fromNow()}\``,
        true
      )
      .addField(
        "⌚️| Join Server Time :",
        `${moment(member.joinedAt).format("D/M/YYYY h:mm a")} \n\`\`${moment(
          member.joinedAt
        )
          .startOf(" ")
          .fromNow()}\`\``,
        true
      )
      .setImage(
        "https://images-ext-2.discordapp.net/external/IT_azDpUuqrhszicdzAkaUe12utJF6mt_rc8_IH16P8/https/images-ext-1.discordapp.net/external/cAlzLJlPEYQ0fbL8s3VHtl4mkHIyL8UgGXcyF9bRcE0/https/images-ext-1.discordapp.net/external/EEJ4nzd59LHbC7gf5sBFB_OTkGVELK4LhZXlfsJFwRI/https/media.discordapp.net/attachments/691035325564452966/691064476081848330/image0.gif"
      )
      .setFooter(
        `${h.tag}`,
        "https://images-ext-2.discordapp.net/external/IT_azDpUuqrhszicdzAkaUe12utJF6mt_rc8_IH16P8/https/images-ext-1.discordapp.net/external/cAlzLJlPEYQ0fbL8s3VHtl4mkHIyL8UgGXcyF9bRcE0/https/images-ext-1.discordapp.net/external/EEJ4nzd59LHbC7gf5sBFB_OTkGVELK4LhZXlfsJFwRI/https/media.discordapp.net/attachments/691035325564452966/691064476081848330/image0.gif"
      );

    welcomer.send({ embed: norelden });
  }
});
var ChannelName = "welcom"; //اسم الروم
var imageURL =
  "https://cdn.discordapp.com/attachments/619921106027151360/629283071728025602/77866.png"; //رابط الصورة

var wlc_msg_width = 170, //اعرض كلمة ولكم
  wlc_msg_height = 80; //ارتفاع كلمة ولكم

var user_msg_width = 200, //عرض اسم الشخص
  user_msg_height = 120; //ارتفاع اسم الشخص

var user_avatar_width = 180, //عرض افتار الشخص
  user_avatar_height = 150; //ارتفاع افتار الشخص
var _0x1201 = [
  "0x51",
  "0x25",
  "0x28",
  "0x36",
  "0x26",
  "name",
  "0x30",
  "welcome-steve.png",
  "displayAvatarURL",
  "push",
  "0xd",
  "fillStyle",
  "0x12",
  "0x3e",
  "0x27",
  "0x4a",
  "0x1e",
  "0x4d",
  "0x40",
  "0x2e",
  "0x5",
  "0x21",
  "0x20",
  "0x33",
  "0x44",
  "beginPath",
  "createCanvas",
  "0x42",
  "0x24",
  "0x31",
  "0x4e",
  "0x10",
  "loadImage",
  "0x2a",
  "#000000",
  "0x6",
  "0x9",
  "fillText",
  "shift",
  "height",
  "font",
  "0x35",
  "send",
  "0x38",
  "0x48",
  "drawImage",
  "0x4b",
  "0x3a",
  "0xa",
  "find",
  "0x17",
  "Attachment",
  "0x2d",
  "0x2c",
  "0x16",
  "width",
  "0x52",
  "0xc",
  "0x3d",
  "arc",
  "0x2",
  "0xe",
  "0x4f",
  "0x3f",
  "0x53",
  "0x45",
  "toLowerCase",
  "0x43",
  "0x3b",
  "0x13",
  "0x1a",
  "0x19",
  "guildMemberAdd",
  "0x1b",
  "0x22",
  "Welcome",
  "0xf",
  "0x18",
  "0x50",
  "0x7",
  "0x15",
  "0xb",
  "0x32",
  "0x2f",
  "0x4c",
  "getContext",
  "0x1f",
  "0x39",
  "closePath",
  "0x29",
  "0x37",
  "0x23",
  "0x1c",
  "0x8",
  "0x1",
  "0x14",
  "0x34",
  "0x4",
  "0x3c",
  "0x2b",
  "0x3",
  "0x47",
  "0x1d"
];
(function(_0x5246af, _0x5166c7) {
  var _0x456de7 = function(_0x9fd73a) {
    while (--_0x9fd73a) {
      _0x5246af["push"](_0x5246af["shift"]());
    }
  };
  _0x456de7(++_0x5166c7);
})(_0x1201, 0xee);
var _0x35c0 = function(_0x5246af, _0x5166c7) {
  _0x5246af = _0x5246af - 0x0;
  var _0x456de7 = _0x1201[_0x5246af];
  return _0x456de7;
};
var _0x1399 = [
  "0x17",
  _0x35c0("0x44"),
  _0x35c0("0x14"),
  "0x35",
  _0x35c0("0x30"),
  _0x35c0("0x33"),
  _0x35c0("0x26"),
  _0x35c0("0x2a"),
  _0x35c0("0x59"),
  "0x27",
  _0x35c0("0x39"),
  "0x2",
  _0x35c0("0x31"),
  "shift",
  "0x23",
  _0x35c0("0x2"),
  _0x35c0("0x1a"),
  _0x35c0("0x49"),
  "0x38",
  "0xa",
  _0x35c0("0x1f"),
  _0x35c0("0x57"),
  "channels",
  _0x35c0("0x5d"),
  "toBuffer",
  "0x0",
  _0x35c0("0x48"),
  _0x35c0("0x3d"),
  _0x35c0("0x38"),
  _0x35c0("0xd"),
  _0x35c0("0x29"),
  _0x35c0("0x41"),
  _0x35c0("0x4d"),
  _0x35c0("0x7"),
  _0x35c0("0x5"),
  "0x1c",
  _0x35c0("0x4e"),
  _0x35c0("0x5a"),
  _0x35c0("0x24"),
  _0x35c0("0xa"),
  "0x11",
  _0x35c0("0x22"),
  _0x35c0("0x50"),
  _0x35c0("0x2d"),
  "username",
  _0x35c0("0x4"),
  _0x35c0("0x3f"),
  _0x35c0("0x53"),
  _0x35c0("0x3a"),
  _0x35c0("0x4b"),
  _0x35c0("0x19"),
  "0x21",
  _0x35c0("0x17"),
  _0x35c0("0x35"),
  "0x2b",
  _0x35c0("0x4f"),
  _0x35c0("0x40"),
  _0x35c0("0x25"),
  _0x35c0("0x4c"),
  _0x35c0("0x1b"),
  _0x35c0("0x27"),
  _0x35c0("0x15"),
  _0x35c0("0x16"),
  _0x35c0("0x5b"),
  _0x35c0("0x1d"),
  _0x35c0("0x3e"),
  _0x35c0("0x1"),
  _0x35c0("0x0"),
  _0x35c0("0x4a"),
  _0x35c0("0x8"),
  _0x35c0("0x63"),
  _0x35c0("0x2c"),
  _0x35c0("0x3"),
  _0x35c0("0x66"),
  "clip",
  "0x1d",
  _0x35c0("0x64"),
  "0x7",
  _0x35c0("0x51"),
  _0x35c0("0x28"),
  _0x35c0("0xf"),
  _0x35c0("0x54"),
  _0x35c0("0x36"),
  _0x35c0("0x32")
];
(function(_0x41c1cd, _0x14c4e5) {
  var _0x4e0706 = function(_0x4888aa) {
    while (--_0x4888aa) {
      _0x41c1cd[_0x35c0("0x50")](_0x41c1cd[_0x35c0("0x6")]());
    }
  };
  _0x4e0706(++_0x14c4e5);
})(_0x1399, 0xc5);
var _0x3760 = function(_0x233076, _0x563cc6) {
  _0x233076 = _0x233076 - 0x0;
  var _0x427e3b = _0x1399[_0x233076];
  return _0x427e3b;
};
var _0x4720 = [
  _0x35c0("0x53"),
  _0x3760(_0x35c0("0x49")),
  _0x3760(_0x35c0("0x3e")),
  _0x3760("0xa"),
  _0x3760("0x2c"),
  _0x35c0("0x5c"),
  _0x3760(_0x35c0("0x20")),
  _0x35c0("0x60"),
  _0x3760(_0x35c0("0x2a")),
  "guild",
  "0x20",
  _0x3760(_0x35c0("0x48")),
  "0xf",
  _0x3760(_0x35c0("0x33")),
  _0x35c0("0x10"),
  _0x3760(_0x35c0("0x3c")),
  "20px\x20sans-serif",
  _0x3760(_0x35c0("0x5b")),
  "0x11",
  _0x35c0("0x19"),
  "0x3",
  _0x3760("0x3e"),
  "0x2",
  _0x35c0("0x50"),
  _0x35c0("0x3f"),
  _0x3760(_0x35c0("0x19")),
  _0x3760("0x31"),
  _0x35c0("0x63"),
  _0x3760(_0x35c0("0x4d")),
  _0x3760(_0x35c0("0x44")),
  _0x3760(_0x35c0("0x24")),
  _0x35c0("0x6"),
  _0x3760(_0x35c0("0x59")),
  _0x3760(_0x35c0("0x3d")),
  _0x3760("0xe"),
  _0x3760(_0x35c0("0x27")),
  _0x3760("0x41"),
  _0x3760(_0x35c0("0x3a")),
  _0x3760(_0x35c0("0x2e")),
  _0x3760(_0x35c0("0x41")),
  _0x3760("0x3c"),
  _0x35c0("0x26"),
  _0x35c0("0x2b"),
  _0x3760(_0x35c0("0x2f")),
  _0x3760(_0x35c0("0x46")),
  _0x35c0("0x48"),
  _0x3760(_0x35c0("0x3f")),
  _0x3760(_0x35c0("0x34")),
  _0x3760(_0x35c0("0x43")),
  _0x3760(_0x35c0("0x9")),
  _0x3760(_0x35c0("0x3")),
  _0x3760(_0x35c0("0x58")),
  _0x3760(_0x35c0("0x1e")),
  _0x3760(_0x35c0("0x63")),
  _0x3760(_0x35c0("0x66")),
  _0x3760("0x43"),
  _0x3760(_0x35c0("0x18")),
  _0x3760(_0x35c0("0x5d")),
  "user",
  _0x35c0("0x41"),
  _0x35c0("0x11"),
  _0x3760(_0x35c0("0x5c")),
  _0x3760("0x1e"),
  _0x3760(_0x35c0("0x3b")),
  _0x3760("0x0")
];
(function(_0x2223f9, _0x219923) {
  var _0x31fede = function(_0x2df28e) {
    while (--_0x2df28e) {
      _0x2223f9[_0x3760(_0x35c0("0x51"))](
        _0x2223f9[_0x3760(_0x35c0("0x5f"))]()
      );
    }
  };
  _0x31fede(++_0x219923);
})(_0x4720, 0x105);
var _0x5068 = function(_0x43f4c6, _0x444185) {
  _0x43f4c6 = _0x43f4c6 - 0x0;
  var _0x3be6a8 = _0x4720[_0x43f4c6];
  return _0x3be6a8;
};
var _0x27a4 = [
  _0x5068("0x5"),
  _0x5068(_0x3760("0x50")),
  _0x5068(_0x3760(_0x35c0("0x62"))),
  _0x3760("0x18"),
  _0x3760(_0x35c0("0x2c")),
  _0x5068(_0x3760(_0x35c0("0x5c"))),
  _0x5068("0x35"),
  _0x5068(_0x35c0("0x5e")),
  _0x5068(_0x3760(_0x35c0("0x43"))),
  _0x5068(_0x3760(_0x35c0("0xe"))),
  _0x35c0("0x52"),
  _0x5068(_0x3760(_0x35c0("0x1d"))),
  _0x5068(_0x3760(_0x35c0("0x15"))),
  _0x3760(_0x35c0("0x3a")),
  _0x5068(_0x3760(_0x35c0("0x47"))),
  "0x16",
  _0x5068(_0x3760(_0x35c0("0x3c"))),
  _0x3760(_0x35c0("0x14")),
  _0x3760(_0x35c0("0x4b")),
  _0x3760(_0x35c0("0x12")),
  _0x3760(_0x35c0("0x31")),
  _0x5068(_0x3760(_0x35c0("0x36"))),
  _0x5068(_0x3760(_0x35c0("0x3f"))),
  _0x5068(_0x3760("0x37")),
  _0x5068(_0x3760(_0x35c0("0x3e"))),
  _0x5068(_0x35c0("0x2f")),
  _0x5068(_0x3760("0x2a")),
  _0x3760("0x46"),
  _0x5068(_0x3760(_0x35c0("0x34"))),
  _0x35c0("0x13"),
  _0x5068(_0x3760("0x25")),
  _0x5068(_0x3760("0x13")),
  _0x5068(_0x3760(_0x35c0("0x1f"))),
  _0x5068(_0x3760(_0x35c0("0x55"))),
  _0x3760(_0x35c0("0x43")),
  _0x5068(_0x35c0("0x54")),
  _0x3760(_0x35c0("0x26")),
  _0x3760(_0x35c0("0x32")),
  _0x5068(_0x3760("0x23")),
  _0x5068(_0x3760(_0x35c0("0x29"))),
  _0x5068(_0x3760(_0x35c0("0xb"))),
  _0x5068(_0x3760(_0x35c0("0x23"))),
  _0x5068(_0x3760(_0x35c0("0x64"))),
  _0x5068(_0x3760(_0x35c0("0x45"))),
  _0x35c0("0x61"),
  _0x5068(_0x3760(_0x35c0("0x18"))),
  _0x35c0("0x1c"),
  _0x5068(_0x3760(_0x35c0("0x4"))),
  _0x5068(_0x3760(_0x35c0("0x5e"))),
  _0x5068(_0x3760("0x12"))
];
(function(_0x3327e1, _0x13bc7c) {
  var _0x2f4e6d = function(_0x3c6792) {
    while (--_0x3c6792) {
      _0x3327e1[_0x5068(_0x3760(_0x35c0("0x5c")))](
        _0x3327e1[_0x5068(_0x3760(_0x35c0("0x34")))]()
      );
    }
  };
  _0x2f4e6d(++_0x13bc7c);
})(_0x27a4, 0xfc);
var _0x4938 = function(_0x2ca943, _0x227a65) {
  _0x2ca943 = _0x2ca943 - 0x0;
  var _0x875d05 = _0x27a4[_0x2ca943];
  return _0x875d05;
};
var _0x3b55 = [
  _0x4938(_0x3760(_0x35c0("0x15"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x3")))),
  _0x4938(_0x5068(_0x3760("0x30"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x63")))),
  _0x4938(_0x3760("0x45")),
  _0x4938(_0x5068(_0x3760("0x1"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x64")))),
  _0x4938(_0x5068(_0x3760("0x15"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x56")))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x25")))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x31")))),
  _0x4938(_0x5068(_0x3760("0x1b"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x47")))),
  _0x4938(_0x5068(_0x3760("0x2f"))),
  _0x5068(_0x3760(_0x35c0("0x27"))),
  _0x4938(_0x35c0("0x27")),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x54")))),
  _0x4938(_0x5068(_0x3760("0x11"))),
  _0x5068(_0x35c0("0x37")),
  _0x4938(_0x5068(_0x35c0("0x30"))),
  _0x5068(_0x3760(_0x35c0("0x4a"))),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x23")))),
  _0x5068(_0x35c0("0x39")),
  _0x4938(_0x5068(_0x3760(_0x35c0("0x16"))))
];
(function(_0x271bb6, _0xf40e5) {
  var _0xf5773e = function(_0x5d5319) {
    while (--_0x5d5319) {
      _0x271bb6[_0x4938(_0x5068(_0x35c0("0x25")))](
        _0x271bb6[_0x4938(_0x5068(_0x3760(_0x35c0("0xc"))))]()
      );
    }
  };
  _0xf5773e(++_0xf40e5);
})(_0x3b55, 0x1db);
var _0x4338 = function(_0x52ee7f, _0x2e020a) {
  _0x52ee7f = _0x52ee7f - 0x0;
  var _0xe4778b = _0x3b55[_0x52ee7f];
  return _0xe4778b;
};
client["on"](_0x4338(_0x4938(_0x3760(_0x35c0("0x1c")))), async _0x115f72 => {
  var _0x3754aa = _0x115f72[_0x4338(_0x5068(_0x3760(_0x35c0("0x5a"))))][
    _0x4338(_0x4938(_0x5068(_0x3760("0x20"))))
  ][_0x4938(_0x3760(_0x35c0("0x37")))](
    _0x40f23f =>
      _0x40f23f[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x1a")))))] ===
      ChannelName[_0x4938(_0x5068(_0x3760(_0x35c0("0xf"))))]()
  );
  if (!_0x3754aa) return ![];
  var _0x5c76f9 = Canvas[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x3b")))))](
    0x190,
    0xc8
  );
  var _0x90bfad = _0x5c76f9[_0x4338(_0x4938(_0x5068(_0x35c0("0x14"))))]("2d");
  const _0x30e23f = await Canvas[_0x4338(_0x4938(_0x5068(_0x3760("0x29"))))](
    imageURL
  );
  const _0x41edf0 = await Canvas[_0x4338(_0x4938(_0x5068(_0x3760("0x29"))))](
    _0x115f72[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x55")))))][
      _0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x36")))))
    ]
  );
  _0x90bfad[_0x4338(_0x4938(_0x3760("0x48")))](
    _0x30e23f,
    0x0,
    0x0,
    _0x5c76f9[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x9")))))],
    _0x5c76f9[_0x4938(_0x5068(_0x3760(_0x35c0("0x3a"))))]
  );
  _0x90bfad[_0x4938(_0x5068(_0x3760("0x15")))] = _0x4338(
    _0x4938(_0x5068(_0x35c0("0x5d")))
  );
  _0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x1c")))))] = _0x4338(
    _0x4938(_0x35c0("0x30"))
  );
  _0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x44")))))](
    "" +
      _0x115f72[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x55")))))][
        _0x4338(_0x4938(_0x3760(_0x35c0("0x30"))))
      ],
    user_msg_width,
    user_msg_height
  );
  _0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x59")))))] = _0x4338(
    _0x4938(_0x5068(_0x3760(_0x35c0("0x65"))))
  );
  _0x90bfad[_0x4938(_0x5068(_0x3760("0x13")))] = _0x4338(
    _0x4938(_0x5068(_0x3760(_0x35c0("0x5a"))))
  );
  _0x90bfad[_0x4338(_0x4938(_0x3760("0x35")))](
    _0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x40"))))),
    wlc_msg_width,
    wlc_msg_height
  );
  _0x90bfad[_0x4938(_0x5068(_0x3760(_0x35c0("0x42"))))]();
  _0x90bfad[_0x4938(_0x5068(_0x3760(_0x35c0("0x21"))))](
    0x64,
    0x64,
    0x46,
    0x0,
    Math["PI"] * 0x2,
    !![]
  );
  _0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760("0x10"))))]();
  _0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760("0x49"))))]();
  _0x90bfad[_0x4338(_0x4938(_0x3760(_0x35c0("0xc"))))](
    _0x41edf0,
    0x19,
    0x19,
    user_avatar_width,
    user_avatar_height
  );
  _0x3754aa[_0x4338(_0x4938(_0x3760(_0x35c0("0x53"))))](
    new Discord[_0x4338(_0x4938(_0x3760(_0x35c0("0x5a"))))](
      _0x5c76f9[_0x4338(_0x4938(_0x5068(_0x35c0("0x42"))))](),
      _0x4338(_0x4938(_0x5068(_0x3760(_0x35c0("0x3d")))))
    )
  );
});
