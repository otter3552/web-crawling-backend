
const express = require('express');
const router = express.Router();
const axios = require("axios");

router.post('/', function(req, res, next) {
  let url = '크롤링 주소';
  
  axios.get(url).then(html => {
    // console.log('req.body = ',req.body )
    // console.log('html.data = ',html.data)
    
    return res.json('data');
  })
});

module.exports = router;