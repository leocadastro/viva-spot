'use strict';

const express = require('express');
const load = require('express-load');
var app = express();

//Configuration
app.set('port', process.env.PORT || 10010);

load('models', {cwd: 'api'})
	.then('controllers')
	.into(app);

module.exports = app;
