const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Request
let Request = new Schema({
  FacultyName: {
    type: String
  },
  BannerId: {
    type: String
  },
  Destination: {
    type: String
  },
  Purpose: {
    type: String
  },
  StartDate: {
    type: String
  },
  EndDate: {
    type: String
  },
  CarSize: {
    type: String
  },
  CarReason: {
    type: String
  },
  FOPName: {
    type: String
  },
  FOPComments: {
    type: String
  },
  AdditionalNotes: {
    type: String
  }
},{
    collection: 'Request'
});

module.exports = mongoose.model('Request', Request);
