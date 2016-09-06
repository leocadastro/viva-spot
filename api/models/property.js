const mongoose = require('mongoose');

var schema = mongoose.Schema({
	x: {
		type: Number,
		required: true
	},
	y: {
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String
	},
	beds: {
		type: Number,
		required: true,
		min: 1,
		max: 5
	},
	baths: {
		type: Number,
		required: true,
		min: 1,
		max: 4
	},
	squareMeters: {
		type: Number,
		required: true,
		min: 20,
		max: 240
	},
	provinces: {
		type: [String],
		required: true
	}
});

module.exports = mongoose.model('Property', schema);
