const express = require('express');
const data = require('./data');
//npm install cors
const cors = require('cors');

const videos = require('./videos');

const server = express();

//middleware
server.use(cors());
server.use(express.json()); //decode the POST from the client

//routes
server.use('/videos', videos);

server.get('/videos/:id', (request, response) => {
  const video = data.find(video => {
    return video.id === request.params.id
  })
  response.send(video)
})


server.listen(8080, () => {
  console.log('Server is ready');
});