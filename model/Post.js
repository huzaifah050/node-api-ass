const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	data: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model('Post', PostSchema);
