// eslint-disable-next-line no-undef
const {Telegraf} = require("telegraf");

// eslint-disable-next-line no-undef
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker'), (ctx) => ctx.reply('👍')
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()