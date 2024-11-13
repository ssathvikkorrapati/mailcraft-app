// backend/controllers/sheetsController.js
const { google } = require('googleapis');
const path = require('path');

const keyPath = path.join(__dirname, '..', process.env.GOOGLE_SHEETS_KEY_PATH);
const keys = require(keyPath);

const auth = new google.auth.GoogleAuth({
  credentials: keys,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

exports.getSheetData = async (req, res) => {
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = '1gdXsda3o38_OpW734rP6RRVNcj62xa4wghcPeOrAVps'; // Replace with your actual Google Sheet ID
    const range = 'Sheet1!A1:D10'; // Adjust range as needed

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    res.json(response.data.values);
  } catch (error) {
    console.error('Error fetching Google Sheet data:', error);
    res.status(500).json({ message: 'Failed to fetch data from Google Sheets' });
  }
};
