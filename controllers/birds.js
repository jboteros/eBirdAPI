var mongoose = require('mongoose');
var Bird = mongoose.model('Bird');

//GET - Return all registers
exports.findAll = function(req, res) {
 Bird.find(function(err, birds) {
 if(err) res.send(500, err.message);
 console.log('GET /birds')
 res.status(200).jsonp(birds);
 });
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
 Bird.findById(req.params.id, function(err, bird) {
 if(err) return res.send(500, err.message);
 console.log('GET /birds/' + req.params.id);
 res.status(200).jsonp(bird);
 });
};

//GET - Return a register with  Name
exports.findByName = function(req, res) {
 Bird.findByName(req.params.name, function(err, bird) {
 if(err) return res.send(500, err.message);
 console.log('GET /birds/' + req.params.name);
 res.status(200).jsonp(bird);
 });
};


//POST - Insert a new register
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var bird = new Bird({
 name: req.body.name,
 nameScientific: req.body.nameScientific,
 family: req.body.family,
 subFamily: req.body.subFamily,
 country: req.body.country,
 zone: req.body.zone,
 image: req.body.image
 });
 bird.save(function(err, bird) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(bird);
 });
};

//PUT - Update a register already exists
exports.update = function(req, res) {
 Bird.findById(req.params.id, function(err, bird) {
 bird.name = req.body.name;
 bird.nameScientific = req.body.nameScientific;
 bird.family = req.body.family;
 bird.subFamily = req.body.subFamily;
 bird.country = req.body.country;
 bird.zone = req.body.zone;
 bird.image = req.body.image;
 bird.save(function(err) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(bird);
 });
 });
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
 Bird.findById(req.params.id, function(err, bird) {
 bird.remove(function(err) {
 if(err) return res.send(500, err.message);
 res.json({ message: 'Successfully deleted' });
 });
 });
};