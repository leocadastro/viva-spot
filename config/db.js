'use strict';

const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/viva-challenge');

mongoose.connection.on('connected', function () {
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
