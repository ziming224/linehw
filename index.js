// 資料串聯
import 'dotenv/config'
import linebot from 'linebot'
import commandMap from './commands/map.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
})


bot.on('message', (event) => {
  if (event.message.type === 'location') {
    commandMap(event)
  }
})


bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
