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

schema.statics.findByCoordinates = function(x, y) {
	  return this.find({
		  'boundaries.upperLeft.x': { $lte: x },
		  'boundaries.upperLeft.y': { $gte: y },
		  'boundaries.bottomRight.x': { $gte: x },
		  'boundaries.bottomRight.y': { $lte: y}
	  });
  };

module.exports = mongoose.model('Province', schema);
