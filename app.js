const { Telegraf } = require("telegraf");
const Handler = require("./modules/handler");
const Logger = require("./core/logger");

const { BOT_TOKEN, BOT_COMMANDS } = require("./core/constants");

// instantiate a new instance
const bot = new Telegraf(BOT_TOKEN);
const handler = new Handler(bot);

// set initial commands & launch!
bot.telegram.setMyCommands(BOT_COMMANDS);
handler.attach("info", handler.botInfo);
bot.launch();

console.log("\n------------------------------------------");
Logger.push("is in motion..!");
console.log("------------------------------------------\n");
