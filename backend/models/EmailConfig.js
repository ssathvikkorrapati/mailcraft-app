// backend/models/EmailConfig.js
const mongoose = require('mongoose');

const emailConfigSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  bodyTemplate: { type: String, required: true },
  senderName: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('EmailConfig', emailConfigSchema);
