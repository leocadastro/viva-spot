'use strict';

const express = require('express');
const load = require('express-load');

var app = express();

//Configuration
app.set('port', process.env.PORT || 10010);
app.set('host', 'http://localhost:10010/v1/');

load('models/index', {cwd: 'api'})
	.then('controllers')
	.into(app);

module.exports = app;
