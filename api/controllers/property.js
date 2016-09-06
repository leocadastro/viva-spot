'use strict';

const mongoose = require('mongoose');
var model = mongoose.model('Property');

function getProperty(req, res, next) {
	var id = req.swagger.params.id.value;

	model
		.findById(id)
		.then(function (property) {
			console.log(property);
			res.status(200).send(property);

			return next();

		}, function (error) {
			res.status(500).send({
		        status: 500,
		        message: error
		    });

			return next();
		});
}

module.exports = {
  getProperty: getProperty
};
