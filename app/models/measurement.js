var mongoose = require('mongoose');

//This will be used in order to create the schema for the objects.
var Schema   = mongoose.Schema;

//This object will be maped to a database colection.
var MeasurentSchema   = new Schema({
  date: { type: String, required: true, index: { unique: true }},
  measure: { type: String, required: true, select: false }
});

module.exports = mongoose.model('Measurment', MeasurentSchema);
