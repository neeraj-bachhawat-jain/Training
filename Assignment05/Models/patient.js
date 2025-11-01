const mongoose = require('mongose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  disease:{
    type: String,
    required: true,
  },
  wardNumber:{
    type: Number,
    required: true
  },
  admitedData:{
    type: Date,
    require: true,
    default: Date.now
  },
  registerBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  }
});


const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;