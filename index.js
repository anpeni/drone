const drone = require('drone-node')

const client = new drone.Client({
  url: 'https://2423-84-236-215-28.ngrok-free.app',
  token: 'bDJpM3XotPdv3UADKkoyzzOkYK9hOOms'
})

client.getRepo("anpeni","drone").then((res) => {
  console.log(res)
}).catch((reason) => {
  console.error(reason)
})

// import DroneClient from 'drone-js';

// const server = "https://2423-84-236-215-28.ngrok-free.app";
// const token = "bDJpM3XotPdv3UADKkoyzzOkYK9hOOms";

// // creates the drone client
// const client = new DroneClient(server, token);

// // fetches the repository list
// client.getRepoList().then((repos) => {
//   console.log(repos)

// });