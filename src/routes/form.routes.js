const express = require('express');
const { body } = require('express-validator');
const formController = require('../controllers/form.controller');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Forms
 *   description: Form submission endpoint
 */

/**
 * @swagger
 * /api/form:
 *   post:
 *     summary: Submit a new form entry
 *     tags: [Forms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *                 maxLength: 254
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *                 maxLength: 150
 *             required:
 *               - name
 *               - email
 *     responses:
 *       201:
 *         description: Form data saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Form data saved successfully
 *       400:
 *         description: Bad Request (e.g., validation error)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal Server Error
 */
router.post(
  '/form',
  [
    body('name')
      .notEmpty().withMessage('Name is required')
      .isLength({ max: 150 }).withMessage('Name must be less than 50 characters'),
    body('email')
      .isEmail().withMessage('Please provide a valid email')
      .isLength({ max: 254 }).withMessage('Email must be less than 100 characters'),
    body('message')
      .optional()
      .isLength({ max: 300 }).withMessage('Message must be less than 1000 characters'),
  ],
  formController.submitForm
);

module.exports = router;
