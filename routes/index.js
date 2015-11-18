var express = require('express');
var router = express.Router();
var model = require('../model/sample');
var Sample = model.Sample;

/* GET home page. */
router.get('/', function(req, res, next) {
  sampleFindAll('root',res);
});

router.get('/view', function(req, res) {
  sampleFindAll('view',res);
});

function sampleFindAll(title,res) {
  Sample.find({}, function(err, items) {
    res.render('index', {title: title, items: items})
  });
}

module.exports = router;
