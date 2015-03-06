var mongoose = require('mongoose');

var bikesSchema = mongoose.Schema({
  make: String,
  model: String,
  colour: String,
  year: Number
});

var Bike = mongoose.model('Bike', bikesSchema);

module.exports = Bike;