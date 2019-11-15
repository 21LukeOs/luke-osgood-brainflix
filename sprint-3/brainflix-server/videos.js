const express = require('express');
const data = require('./data');


//nested route
const router = express.Router();

router.get('/', (request, response) => {
  console.log(data);



  response.send(data);
});


//common JS format
module.exports = router;