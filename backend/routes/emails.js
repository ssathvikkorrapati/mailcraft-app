// backend/routes/emails.js
const express = require('express');
const { sendEmail, saveEmailConfig } = require('../controllers/emailsController');
const router = express.Router();

// Route to Send an Email
router.post('/send', sendEmail);

// Route to Save Email Configuration
router.post('/config', saveEmailConfig);

module.exports = router;
