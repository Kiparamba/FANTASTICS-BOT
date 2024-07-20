const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255715903030" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255715903030";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255715903030";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_57_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1NixcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk1LFxuICAgICAgICA1MyxcbiAgICAgICAgOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU1LFxuICAgICAgICA2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMyLFxuICAgICAgICA2MixcbiAgICAgICAgODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgNjksXG4gICAgICAgIDMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFL3NZNVVyMG5tU2lSUW1vb081cE5VZER4QzhORytyZ2NVYjJaTC9zWG1nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTcxNTkwMzAzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjg4OEQ5Njc0RDcxMEVERjY5NTJDQjM0RTA5QzI4QUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDgwMjE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzE1OTAzMDMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNzkyNTIwN0MzNkI5QzIyQzMxQTVGMUE3NUMyN0YzNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0ODAyMTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR2hXTmUwRnhUcDJsS3hESFVUUzFVZ1wiLFxuICBcInBob25lSWRcIjogXCJjZTgwZWNmMi03OTdhLTQwMDAtYjMzNC01NzcxMjMwMjQ5Y2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMTE3LFxuICAgICAgNzIsXG4gICAgICAxMjYsXG4gICAgICAyMjgsXG4gICAgICA0NSxcbiAgICAgIDU0LFxuICAgICAgMTkxLFxuICAgICAgMTUzLFxuICAgICAgODcsXG4gICAgICAxNjIsXG4gICAgICAyMTUsXG4gICAgICAxOTcsXG4gICAgICAxNjcsXG4gICAgICAxNzcsXG4gICAgICAzNCxcbiAgICAgIDExMixcbiAgICAgIDIwLFxuICAgICAgMzgsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAyMDUsXG4gICAgICAxMzQsXG4gICAgICA2NSxcbiAgICAgIDMzLFxuICAgICAgMjQ2LFxuICAgICAgMzgsXG4gICAgICAxNjksXG4gICAgICAyMzcsXG4gICAgICAxOTMsXG4gICAgICAyMzgsXG4gICAgICA2NCxcbiAgICAgIDM3LFxuICAgICAgNSxcbiAgICAgIDE1MCxcbiAgICAgIDE3NSxcbiAgICAgIDE1OSxcbiAgICAgIDIxMyxcbiAgICAgIDIyNSxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKUjk5RjExWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzE1OTAzMDMwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1Mzk1NzQxNDUxNDcwMzo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkNvb2wgS2lkIPCfjLlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOK2p6U3NRa09qdXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhKbERZVkNSSGQ5aUhLU0taMGVHbGk5M1hGRUpaNjNGeTFwNm44T0dEbUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicUpTSFdZb001RjZHazl4cFdrNGxSTjlYa25xaU9uQmRuR1JzaTdoeFk1UThTSFVLb0JUUFZER2w5ZmlubEFlSmpVL3NNOGx1amsrejErcVpqbldyQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM1orM0Z5aDErTjFUa1V5ZTRvNVhoRm96Vy9LNUhBa2dRWFU3VlFvSjVkVExncFUwdVlLL1o1eEpQeVkvRjlWMllnbjExZUVkT3QyQ0c0TGpnRURRQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzE1OTAzMDMwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0ODAyMTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJc25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlzbi5qc29uIjogIntcImtleURhdGFcIjpcIkRRUUF2N3RkNGQxMmtnMnFKcVFmTHFkVGtublNiSE1sYVdGV0k3K1RGMU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTE0NDM2NzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ4MDIxNjU5MVwifSIKfQ==  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
