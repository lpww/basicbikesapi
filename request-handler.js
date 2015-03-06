var url = require('url');
var db = require('./mongo/config');
var Bike = require('./mongo/models/bikes.js');

exports.getters = {
  make: function(req, res) {
    Bike.find({make: req.query}).exec(function(err, bike){
      if(bike){
        res.send(200, bike);
      } else {
        res.send(200, 'bike not found');
      }
    });

  },
  model: function(req, res) {
    Bike.find({model: req.query}).exec(function(err, bike){
      if(bike){
        res.send(200, bike);
      } else {
        res.send(200, 'bike not found');
      }
    });

  },
  colour: function(req, res) {
    Bike.find({colour: req.query}).exec(function(err, bike){
      if(bike){
        res.send(200, bike);
      } else {
        res.send(200, 'bike not found');
      }
    });
  },
  year: function(req, res) {
    Bike.find({year: req.query}).exec(function(err, bike){
      if(bike){
        res.send(200, bike);
      } else {
        res.send(200, 'bike not found');
      }
    });
  }
};

exports.addBike = function(req, res, next) {
  var params = req.query;
  var bike = new Bike({
          make: params[0],
          model: params[1],
          colour: params[2],
          year: params[3]
        });

        bike.save(function(err, newBike) {
          res.send(200, newBike);
        });
};

exports.query = function(req, res, next) {
  var uri = url.parse(req.url);
  var path = uri.pathname.slice(1);
  var type = req.method;

  if(type === 'GET'){
    req.query = uri.query;
    exports.getters[path](req, res, function(err, bike){
      req.err = err;
      req.bike = bike;
      next();
    });
  } else {
    req.query = uri.query.split(",");
    next();
  }
};

exports.invalid = function(req, res) {
  res.send(418, 'Invalid request');
};

