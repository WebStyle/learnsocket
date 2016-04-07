var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Shifts', new Schema({
  id: String,
  text: String,
  resource: String,
  start: Date,
  end: Date,
  color: String,
  position: Number,
  resizeDisabled: {
    type: Boolean,
    default: true
  }
}));
