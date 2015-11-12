var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/fx-dev');

function validator(v) {
  return v.length > 0;
}

var Sample = new mongoose.Schema({
  name: {
          type: String, validate: [validator, "Empty Error"]
        },
    created: {
               type: Date,
               default: Date.now
             }

});

exports.Sample = db.model('Sample', Sample);
