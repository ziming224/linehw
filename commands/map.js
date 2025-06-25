// 傳送位置後回傳
import axios from 'axios'
// 引用計算距離的工具
import { distance } from '../utils/distance.js'
import template from '../templates/map.js'
import fs from 'fs'
// 內建fs

export default async (event) => {
  try {
    // const url =
    //   'https://data.moenv.gov.tw/api/v2/aqx_p_432' +
    //   '?api_key=221974dd-667c-4243-b308-61b60bc29986' +
    //   '&limit=1000' +
    //   '&sort=ImportDate%20desc' +
    //   '&format=JSON'

    // const { data } = await axios.get(url)
    const { data } = await axios.get(
      'https://data.moenv.gov.tw/api/v2/aqx_p_432?api_key=221974dd-667c-4243-b308-61b60bc29986&limit=1000&sort=ImportDate desc&format=JSON',
    )
    // data 不是陣列，而是物件，物件沒有 map 方法
    // API 的回應結構通常將實際資料陣列包裝在 records 欄位中
    const bubbles = data.records
      .map((value) => {
        value.distance = distance(
          // 放資料裡的經緯度
          // value.latitude,
          // value.longitude,
          parseFloat(value.latitude),
          parseFloat(value.longitude),
          event.message.latitude,
          event.message.longitude,
          'K',
        )
        return value
      })
      .sort((a, b) => a.distance - b.distance) // 距離由小到大
      .slice(0, 3)
      .map((value) => {
        const bubble = template()
        bubble.body.contents[0].text = value.county + value.sitename || '未知地點'
        bubble.body.contents[1].contents[0].contents[1].text = value.aqi || '-'
        bubble.body.contents[1].contents[1].contents[1].text = value['pm2.5'] || '-'
        bubble.body.contents[1].contents[2].contents[1].text = value.wind_speed || '-'
        bubble.body.contents[2].contents[1].text = value.status || '-'
        return bubble
      })

    const result = await event.reply({
      type: 'flex',
      altText: '空氣品質',
      contents: {
        type: 'carousel',
        contents: bubbles,
      },
    })
    console.log(result)

    if (result.message) {
      await event.reply('發生錯誤')
      // 如果是開發環境，而且傳送訊息錯誤時
      if (process.env.DEV === 'true') {
        fs.writeFileSync(
          '../dump/map.json',
          JSON.stringify(
            {
              type: 'carousel',
              contents: bubbles,
            },
            null,
            2,
          ),
        )
      }
    }
  } catch (error) {
    console.error(error)
    await event.reply('發生錯誤')
  }
}
