// backend/controllers/emailsController.js
const nodemailer = require('nodemailer');
const EmailConfig = require('../models/EmailConfig');

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to Send Email
exports.sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, text });
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

// Function to Save Email Configuration
exports.saveEmailConfig = async (req, res) => {
  const { config } = req.body;
  try {
    const emailConfig = new EmailConfig(config);
    await emailConfig.save();
    res.json({ message: 'Email configuration saved successfully' });
  } catch (error) {
    console.error('Failed to save email configuration:', error);
    res.status(500).json({ message: 'Failed to save email configuration' });
  }
};
