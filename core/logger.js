const  { BOT_NAME } = require("./constants");
const dateFormat = require("dateformat");
const chalk = require("chalk");

const push = (message) => {
  console.log(
    `[${chalk.magentaBright(dateFormat(new Date(), "HH:mm:ss"))}]`,
    `(${chalk.underline.cyanBright(`@${BOT_NAME}`)})`,
    `${chalk.greenBright(message)}`
  );
};

module.exports = { push };
