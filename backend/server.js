// backend/server.js
const express = require('express');
const connectDB = require('./config');

const app = express();

// Connect to MongoDB
connectDB();

app.listen(5001, () => {
  console.log('Server running on port 5000');
});
