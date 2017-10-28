var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();


// Connection to DB
mongoose.connect('mongodb://localhost/birds', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});
// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());

// Import Models and Controllers
var models = require('./models/bird')(app, mongoose);
var BirdCtrl = require('./controllers/birds');

var router = express.Router();

// Index - Route
router.get('/', function(req, res) { 
 res.send("Hola Mundo");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/birds') 
 .get(BirdCtrl.findAll)
 .post(BirdCtrl.add);

api.route('/birds/:id') 
 .get(BirdCtrl.findById)
 .put(BirdCtrl.update)
 .delete(BirdCtrl.delete);

 api.route('/birds/:name') 
 .get(BirdCtrl.findByName)
 .put(BirdCtrl.update)
 .delete(BirdCtrl.delete);

app.use('/api', api);


// Start server
app.listen(8080, function() {
 console.log("Node server running on http://localhost:8080");
});