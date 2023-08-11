const drone = require('drone-node')

const client = new drone.Client({
  url: 'https://2423-84-236-215-28.ngrok-free.app',
  token: 'bDJpM3XotPdv3UADKkoyzzOkYK9hOOms'
})

client.recentBuilds().then((res) => {
  console.log(res)
}).catch((reason) => {
  console.error(reason)
})
