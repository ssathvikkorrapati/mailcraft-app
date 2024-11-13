// frontend/src/api/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5002/api';

// Fetch data from Google Sheets
export const fetchSheetData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sheets`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    throw error;
  }
};

// Save email configuration
export const saveEmailConfig = async (config) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/emails/config`, { config });
    return response.data;
  } catch (error) {
    console.error('Error saving email configuration:', error);
    throw error;
  }
};

// Send an email
export const sendEmail = async (emailData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/emails/send`, emailData);
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
