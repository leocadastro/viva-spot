const mongoose = require('mongoose');

var schema = mongoose.Schema({
	x: {
		type: Number,
		required: true,
		min: 0,
		max: 1400,
		index: true
	},
	y: {
		type: Number,
		required: true,
		min: 0,
		max: 1000,
		index: true
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
		type: [String]
	}
}, {
    versionKey: false
});

schema.virtual('id').get(function() { return this._id; });

schema.set('toJSON', {
    transform: function(doc, ret, options) {
        var obj = {
            id: ret._id,
			x: ret.x,
			y: ret.y,
			title: ret. title,
			price: ret.price,
			description: ret.description,
			beds: ret.beds,
			baths: ret.baths,
			squareMeters: ret.squareMeters,
			provinces: ret.provinces
        };
        return obj;
    }
});

module.exports = mongoose.model('Property', schema);
