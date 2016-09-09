'use strict';

const http = require('http');
const mongoose = require('mongoose');
var Province = mongoose.model('Province');
var Property = mongoose.model('Property');

mongoose.Promise = require('bluebird');

if(process.env.NODE_ENV == 'production'){
	//Production connection
} else {
	mongoose.connect('mongodb://localhost/viva-challenge');
}

mongoose.connection.on('connected', function () {
	seedProvinces();

	console.log('Mongo Connected');
});

mongoose.connection.on('error', function (error) {
	console.log('Mongo Error: ' + error);
});

mongoose.connection.on('disconnected', function () {
	console.log('Mongo Disconnected');
});

process.on('SIGINT', function () {
	mongoose.connection.close(function () {
		process.exit(0);
	});
});

var seedProvinces = function () {
	Province
		.find()
		.then(function (provinces) {
			if (provinces.length == 0) {
				const provincesFile = require('../seed/provinces');

				for (var provinceName in provincesFile) {
					var newProvince = Province({
						name: provinceName,
						boundaries: provincesFile[provinceName].boundaries
					});

					newProvince.save();
				}
			} else {
				console.log("Provinces already seeded");
			}
		}, function (error) {
			console.log(error);
		})
}
