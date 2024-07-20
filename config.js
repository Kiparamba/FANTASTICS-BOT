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


global.devs = "0715903030 " // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= 255715903030process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255715903030";




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
global.save_status_from =  225715903030process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255715903030";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  " "SUHAIL_07_31_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA4LFxuICAgICAgICA3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDc4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgODUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzLFxuICAgICAgICA5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDc5LFxuICAgICAgICA1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDk5LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDbDQyQ2pDUytVTVdZcWUyYU1TVHduRVBDR1RTaGhHQ1VUajlQQW4xblgwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTcxNTkwMzAzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUJBQkYyMzk2Q0I4MzczRTREMTYxNEU1RDg2QzVCMDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDYwNzExXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzE1OTAzMDMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MDNGRTRCQUIwODIyOEMxMjRGMzdENDhFMzgyQTA0QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0NjA3MTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRDNZR3dCZXRRYkdNS3dURnJxZEl4Z1wiLFxuICBcInBob25lSWRcIjogXCI1MDUxMjhiNi03OTg0LTQ0ZGYtYmQ0Yy1lZjllYWY2NGUxMzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICAyNDcsXG4gICAgICAxNzksXG4gICAgICAzNixcbiAgICAgIDI1NCxcbiAgICAgIDQsXG4gICAgICAyMDMsXG4gICAgICAxMDcsXG4gICAgICA3MyxcbiAgICAgIDE1OCxcbiAgICAgIDQsXG4gICAgICAyNTUsXG4gICAgICAxNzksXG4gICAgICA4NyxcbiAgICAgIDczLFxuICAgICAgMjcsXG4gICAgICAxMDgsXG4gICAgICAxNjMsXG4gICAgICAxNzksXG4gICAgICAxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDIzMSxcbiAgICAgIDIzOCxcbiAgICAgIDE3OSxcbiAgICAgIDU3LFxuICAgICAgMTIwLFxuICAgICAgMTYwLFxuICAgICAgNTYsXG4gICAgICAxNjAsXG4gICAgICA0LFxuICAgICAgOSxcbiAgICAgIDgsXG4gICAgICAxNzUsXG4gICAgICA0NyxcbiAgICAgIDIyLFxuICAgICAgMTAsXG4gICAgICA2NCxcbiAgICAgIDE5NSxcbiAgICAgIDg1LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFlBNFZRRURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTcxNTkwMzAzMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTM5NTc0MTQ1MTQ3MDM6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDb29sIEtpZCDwn4y5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnlqelNzUTNzL3R0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4SmxEWVZDUkhkOWlIS1NLWjBlR2xpOTNYRkVKWjYzRnkxcDZuOE9HRG1JPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxhYW40bjliSFZCQ1dUQ0Y2NGorVDNMRWZlNmppOXdsampXSXhXR2t1Z3U0ZjA2eTBzM0RFbGZabUtMcnVBUUxLaVdrbUZSNG5INE8xWmRlNjFQMkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInY2SmYvYTZ3OWU1bWtEOEFtR3dRQ0JuN3Z2VzNCaXBDbjZ1N2JqNWRlSUZxeC8yZThCNTVSUEF4N3YxZ0ptODNlQkE4cmdKUkFLR1pvL0dURWpvV2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTcxNTkwMzAzMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDYwNzA2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXNqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJc2ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEUWZaNWpNSmxwK09FSHY2L3FUL0R3Q3UxcFJpc2YzNXpMQXl5ZnVpUnA4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxNDQzNjc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NjA3MDg5NjVcIn0iCn0=  // PUT your SESSION_ID  

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
