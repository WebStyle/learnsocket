var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Positions', new Schema({
  id: Number,
  name: String,
}));
