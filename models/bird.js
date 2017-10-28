var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var birdSchema = new Schema({ 
 name: { type: String },
 nameScientific: { type: String },
 country: { type: String },
 zone: { type: String }
});

module.exports = mongoose.model('Bird', birdSchema);
