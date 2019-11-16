const express = require('express');
const data = require('./data');


const router = express.Router();

router.get('/', (request, response) => {
  console.log();



  response.send(data);
});


module.exports = router;