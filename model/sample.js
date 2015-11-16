var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost:27017/fx-dev';
var db = mongoose.connect(mongoURI);

mongoose.connection.on('connected', function() {
  console.log('mongoose URI locatest ' + mongoURI);
});

function validator(v) {
  return v.length > 0;
}

var Sample = new mongoose.Schema({
  name: {
          type: String, validate: [validator, "Empty Error"]
        }
        ,
    created: {
               type: Date,
               default: Date.now
             }
});

exports.Sample = db.model('Sample', Sample);
