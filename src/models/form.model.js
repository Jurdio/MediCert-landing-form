const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  message: {
    type: String,
    required: false,
    trim: true,
  },
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
