var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Staff', new Schema({
  id: String,
  name: String,
}));
