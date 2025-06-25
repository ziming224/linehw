export default () => ({
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: '縣市',
        weight: 'bold',
        size: 'xl',
        margin: 'none',
        style: 'normal',
        decoration: 'none',
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '空氣品質指標AQI ',
                color: '#aaaaaa',
                size: 'sm',
                flex: 5,
              },
              {
                type: 'text',
                text: '40',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5,
              },
            ],
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '懸浮微粒pm2.5',
                color: '#aaaaaa',
                size: 'sm',
                flex: 5,
              },
              {
                type: 'text',
                text: '6',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5,
              },
            ],
          },
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: '風速',
                color: '#aaaaaa',
                flex: 1,
                size: 'sm',
              },
              {
                type: 'text',
                text: '1.2',
                flex: 5,
                size: 'sm',
              },
            ],
          },
        ],
      },
      {
        type: 'box',
        layout: 'baseline',
        contents: [
          {
            type: 'text',
            text: '狀態',
            flex: 1,
            size: 'sm',
            color: '#aaaaaa',
          },
          {
            type: 'text',
            text: '良好',
            flex: 5,
          },
        ],
      },
    ],
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [
      {
        type: 'box',
        layout: 'vertical',
        contents: [],
        margin: 'sm',
      },
    ],
    flex: 0,
  },
})
