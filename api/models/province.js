const mongoose = require('mongoose');

var schema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	boundaries: {
		upperLeft: {
			x: {
				type: Number,
				required: true,
				min: 0,
				max: 1400
			},
			y: {
				type: Number,
				required: true,
				min: 0,
				max: 1000
			}
		},
		bottomRight: {
			x: {
				type: Number,
				required: true,
				min: 0,
				max: 1400
			},
			y: {
				type: Number,
				required: true,
				min: 0,
				max: 1000
			}
		}
	}
});

module.exports = mongoose.model('Province', schema)
