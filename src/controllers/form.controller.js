const { validationResult } = require('express-validator');
const Form = require('../models/form.model');

exports.submitForm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, message } = req.body;
    const newFormEntry = new Form({ name, email, message });
    await newFormEntry.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving form data', error: error.message });
  }
};
