// backend/googleSheets.js
require('dotenv').config();
const { google } = require('googleapis');
const keys = require(process.env.GOOGLE_SHEETS_KEY_PATH);

const auth = new google.auth.GoogleAuth({
  credentials: keys,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const getSheetData = async () => {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const spreadsheetId = '1gdXsda3o38_OpW734rP6RRVNcj62xa4wghcPeOrAVps'; // Replace with your Google Sheet ID
  const range = 'Sheet1!A1:D10'; // Adjust range as needed

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  console.log(response.data.values);
};

getSheetData();
