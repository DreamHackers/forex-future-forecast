var express = require('express');
var router = express.Router();
var model = require('../model/sample');
var Sample = model.Sample;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/view', function(req, res) {
  Sample.find({}, function(err, items) {
    console.log(items);
    res.render('index', {title: 'display', items: items})
  });
});

module.exports = router;
