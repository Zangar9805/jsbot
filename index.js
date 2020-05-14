const Telegraf = require('telegraf')

const bot = new Telegraf('1221287476:AAGs1jEvRyminFH4eRLnr3INdshbz9wDcqU')

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()