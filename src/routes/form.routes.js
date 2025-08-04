const express = require('express');
const { body } = require('express-validator');
const formController = require('../controllers/form.controller');

const router = express.Router();

router.post(
  '/form',
  [
    body('name')
      .notEmpty().withMessage('Name is required')
      .isLength({ max: 50 }).withMessage('Name must be less than 50 characters'),
    body('email')
      .isEmail().withMessage('Please provide a valid email')
      .isLength({ max: 100 }).withMessage('Email must be less than 100 characters'),
    body('message')
      .notEmpty().withMessage('Message is required')
      .isLength({ max: 1000 }).withMessage('Message must be less than 1000 characters'),
  ],
  formController.submitForm
);

module.exports = router;
