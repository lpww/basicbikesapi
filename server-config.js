var express = require('express');
var handler = require('./request-handler');

var app = express();

//Endpoints
app.get('/make', handler.query);
app.get('/model', handler.query);
app.get('/color', handler.query);
app.get('/year', handler.query);
app.put('/add', handler.query, handler.addBike);
app.get('/*', handler.invalid);


module.exports = app;

