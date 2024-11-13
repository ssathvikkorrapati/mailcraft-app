// backend/routes/sheets.js
const express = require('express');
const { getSheetData } = require('../controllers/sheetsController');
const router = express.Router();

// Route to Fetch Data from Google Sheets
router.get('/', getSheetData);

module.exports = router;
