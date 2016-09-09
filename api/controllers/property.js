'use strict';

const mongoose = require('mongoose');
var Property = mongoose.model('Property');
var Province = mongoose.model('Province');

var getProperty = function (req, res, next) {
	var id = req.swagger.params.id.value;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		res.status(500).send({
			message: "Invalid Id"
		});

		return next();
	}

	Property
		.findById(id).exec()
		.then(function (property) {

			if (!property) {
				res.status(404).send({
			        message: "Property Not Found"
			    });

				return next();
			}

			res.status(200).send(property);

			return next();

		}, function (error) {

			res.status(500).send({
		        message: error.message
		    });

			return next(error);
		});
}

var postProperty = function (req, res, next) {

	var newProperty = req.swagger.params.property.value;

	if (!newProperty) {
		res.status(500).send({
			message: "Something wrong"
		});
	}

	Province
		.findByCoordinates(newProperty.x, newProperty.y)
		.then(function (provinces) {
			var names = provinces.map(function (province) {
				return province.name;
			})

			if (names.length == 0) {
				res.status(404).send({
					message: "Province not found"
				});

				return next()
			}

			newProperty.provinces = names;

			Property
				.create(newProperty)
				.then(function (property) {
					res.status(200).send({
				        message: "property inserted with success",
						entityId: property._id
				    });
				}, function (error) {
					res.status(500).send({
				        message: JSON.stringify(error)
				    });

					return next(error);
				})

		}, function (error) {
			res.status(500).send({
				message: JSON.stringify(error)
			});

			return next(error);
		});
}

var getProperties = function (req, res, next) {
	var ax = req.swagger.params.ax.value;
	var ay = req.swagger.params.ay.value;
	var bx = req.swagger.params.bx.value;
	var by = req.swagger.params.by.value;

	Property
		.find({
			x: { $gte: ax, $lte: bx },
			y: { $gte: by, $lte: ay }
		})
		.then(function (properties) {
			res.status(200).send({
				foundProperties: properties.length,
				properties: properties
			});
		}, function (error) {
			res.status(500).send({
				message: JSON.stringify(error)
			});
		});
}

module.exports = {
  getProperty: getProperty,
  postProperty: postProperty,
  getProperties: getProperties
};
