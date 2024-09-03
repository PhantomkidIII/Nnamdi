//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2347079991421";
global.owner = process.env.OWNER_NUMBER || "2347079991421";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU83eGR5b2VLMlN1dzFOc0I5L2lJcEMyWlAzY3YzWHQvaG53WEE4ZDduUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmQxVWF2L2tIVzdKdWFSQmdhaG44NUFVYllKblhwNU5BRVY3d0lnZ28zUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRFpUdU1DcFB4bnFoZkgySUpEQXFwUG1UWGczZndEQU5GT200clhRR2tBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtMDlvS1JkMXVwSmJGS3UwY29qR0NoQ3VwdmltUDQwMkM0dk9Pbi9hQW13PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCdE9LOTBGd2NYbjhWc1E1Q1E3T2xkY1VveTYwNXZZZmUrUitaUTBRVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl4eHA3QlM4cG0wMC9PemdXSVlqeCtxZmRDMFh2TTFSdGdoMDU4T05IVjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU02N3VDZS9QUEF4NGpJd0JTSnZwR1JXMkRERGZreGpoUm9vNjdHSW8zVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnU4cXlEbzVqbDFyQnVzNzhHYm9ib29RZjFuTDZwL0hKamRESTM2aUtSST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJZ0NkMmVrZWVmVmRsUmdMQ0tXOWtaNFdpdkZrRHhDSzNvNmJYSFNxZEtHS29RNXZpcDR3bWJlV1ZVaDVCMC9Fb2RsM0dSMytEd25RL24vUkQyY2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6ImlVUkFTK0NhL1Z2ZERDdEMvc2l3dlY2TGRKaFhvaUlzZFBiUnNvdE9mbU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA3OTk5MTQyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMTgzRkYxOEJEMUY5MkM5NzkyRkEyNzI1NEYzQkYzNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1MzY2ODIyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDc5OTkxNDIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJENERGNzIxRTEzNUI4RDFCQTZCQzMxNzg2RjlGN0QzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjUzNjY4MjJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJrQi1vUW0zVGlTeC1uWXpqY2dtUWciLCJwaG9uZUlkIjoiZGI4YzE3MWQtYTE5MS00YTQ0LTljOTAtZTFjYmI1ODU2ZmFiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRBWE52Rkc5cXptRndLZG1WK0dqcUEyUndNQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqOUdON3g1RmNSOEZrN3BMSVQ2YllZMWc5cWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDVGR1BLVlMiLCJtZSI6eyJpZCI6IjIzNDcwNzk5OTE0MjE6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTm5hbWRpIEdvZHdpbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFhKdFk4SEVKU0UzTFlHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY2xoSlBUV3hWNXFsdnE3WGZ4a0g3NjhBeDdUUzdUM0c1RjBXWitna2xsZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUDhwNG13MWNCM1FLaDFheTNCeFNRNHlZVFdhL3ZVZmN1TXRKdnBIL1gySmhIN203OW9nMDk1MVNSWHBXRktIZ1IwWEZSeEpxb0k0NDg1NHAwUjQ3REE9PSIsImRldmljZVNpZ25hdHVyZSI6Im9EcWxlRTlsZTBhdWdWdFpFOFdERU03aUR4WFZDQjF0R0J6Qlpvc0taRUVVMzdsUSt1bEJWUmJRcFpaeEQ2YUx3S1lTdlVXOGpDeTRHdjBta2RCOWp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA3OTk5MTQyMToxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYSllTVDAxc1ZlYXBiNnUxMzhaQisrdkFNZTAwdTA5eHVSZEZtZm9KSlpZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MzY2ODE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxrNSJ9"
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "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",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-qxpQpJ-Mq1E6PIJ0q10PMNpQ2dZHJLIpNuLxv_SXdgT3BlbkFJuJuesP4lz39WGcqglcdoYDxTRUrkvHZGeNX_-klnsA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
