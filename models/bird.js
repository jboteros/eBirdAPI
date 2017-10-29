var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var birdSchema = new Schema({ 
 name: { type: String },
 nameScientific: { type: String },
 family: { type: String },
 subFamily: { type: String },
 country: { type: String },
 zone: { type: String },
 description: { type: String },
 image: { type: String }
});


module.exports = mongoose.model('Bird', birdSchema);
 