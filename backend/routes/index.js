
var express = require('express');
var router = express.Router();
const axios = require("axios");
//읽어온 정보를 html로직으로 변환하여 화면작업을 하도록 유도합니다


router.post('/', function(req, res, next) {
  let url = '크롤링 주소';
  
  axios.get(url).then(html => {
    console.log('req.body = ',req.body )
    // console.log('html.data = ',html.data)
    
    return res.json('data');
  })
});

module.exports = router;