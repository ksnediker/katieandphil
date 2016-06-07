var mongoose = require('mongoose');

var GuestSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	attend: String,
	notattend: String,
	comment: String
});

var Guest = mongoose.model('Guest', GuestSchema);
module.exports = Guest;