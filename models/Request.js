const mongoose = require('mongoose');//we use it as database
//for validation of email
require('mongoose-type-email');

const Schema = mongoose.Schema;
const model = mongoose.model;



// Create Schema

const RequestSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  workEmail: {
    type: mongoose.SchemaTypes.Email,
    required: true
  },
  phoneNumber: {
    type: Number
  },
  country: {
    type: Array
  },
  company: {
    type: Array
  },
  objective: {
    type: Array
  },
  details: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Request = model('request', RequestSchema);

module.exports= Request;
