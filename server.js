// =============================
// Requirements
// =============================

var express = require('express');
var mongoose = require('mongoose');
var	port = process.env.PORT || 3000;
var	bodyParser = require('body-parser');
var	app = express();
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/guestlist';
mongoose.connect(mongoUri);

// =============================
// Middleware
// =============================

app.use(bodyParser.json());
app.use(express.static('public'));


// =============================
// DB
// =============================

var Guest = require('./models/guest')


// =============================
// Listener
// =============================

app.listen(port, function() {
	console.log("app listening", port);
});


// =============================
// Routes
// =============================

app.get('/guestlist', function (req, res) {
	console.log("Received get request");

	Guest.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/guestlist', function (req, res) {
	var guest = new Guest({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		attend: req.body.attend,
		notattend: req.body.notattend,
		comment: req.body.comment
	});
	
	console.log(req.body);
	guest.save(req.body, function(err, doc) {
		res.json(doc);
	});
});

