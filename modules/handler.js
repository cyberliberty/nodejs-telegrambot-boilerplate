const Logger = require("../core/logger");

class Handler {
  constructor(telegrafBot) {
    this.bot = telegrafBot;
  }

  // return info about bot.
  botInfo(ctx) {
    Logger.push(`@${ctx.from.username} has just joined!`);
  }


  // attach command to its corresponding method:
  attach(command, method) {
    this.bot.command(command, (ctx) => {
      method.call(this, ctx);
    });
  }
}

// export module
module.exports = Handler;
