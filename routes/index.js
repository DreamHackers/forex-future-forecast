var express = require('express');
var router = express.Router();
//var model = require('../model/sample');
//var Sample = model.Sample;
var http = require('http');
var currentRateUrl = 'http://www.gaitameonline.com/rateaj/getrate'

/* GET home page. */
router.get('/', function(req, res, next) {
  getCurrentRate('index', 'Forex Future Forecast', res);
});

//router.get('/view', function(req, res) {
//  sampleFindAll('view',res);
//});

//function sampleFindAll(title,res) {
//  Sample.find({}, function(err, items) {
//    res.render('index', {title: title, items: items})
 // });
//}

function getCurrentRate(file, title, response) {
  http.get(currentRateUrl, (res) => {
    var body = '';
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      body += chunk;
    });

    res.on('end', (res) => {
      ret = JSON.parse(body);
      response.render(file, {title: title, items: ret.quotes})
    });
  }).on('error', (e) => {
    console.log(e.message);
  });
}

module.exports = router;
