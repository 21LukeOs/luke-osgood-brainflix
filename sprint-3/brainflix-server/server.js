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
server.use('/videos/:id', videos);
server.use('/uploadVideo', videos);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is ready (port: ${port})`);
});