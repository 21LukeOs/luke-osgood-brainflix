const express = require('express');
//npm install cors
const cors = require('cors');

const videos = require('./videos');

const server = express();

//middleware
server.use(cors());
server.use(express.json()); //decode the POST from the client

//routes
server.use('/', videos);


server.listen(8080, () => {
  console.log('Server is ready');
});