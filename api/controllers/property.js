'use strict';

const mongoose = require('mongoose');
var Property = mongoose.model('Property');

function getProperty(req, res, next) {
	var id = req.swagger.params.id.value;

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
			console.log(error);
			res.status(500).send({
		        message: error.message
		    });

			return next(error);
		});
}

function postProperty(req, res, next) {

	var newProperty = req.swagger.params.property.value;

	if (!newProperty) {
		res.status(500).send({
			message: "Something wrong"
		});
	}

	newProperty.provinces = ["TODO"];

	Property
		.create(newProperty)
		.then(function (property) {
			res.status(200).send({
				success: 1,
		        message: "property inserted with success",
				entityId: property._id
		    });
		}, function (error) {

			res.status(500).send({
		        message: JSON.stringify(error)
		    });

			return next(error);
		})

}

module.exports = {
  getProperty: getProperty,
  postProperty: postProperty
};
