// src/pages/SendEmail.js
import React, { useState } from 'react';
import { sendEmail } from '../api/apiService';

const SendEmail = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailData = { to, subject, text };
    try {
      const response = await sendEmail(emailData);
      setResponseMessage(response.message);
    } catch (error) {
      setResponseMessage('Failed to send email');
    }
  };

  return (
    <div>
      <h2>Send Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>To:</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Enter recipient's email"
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter email subject"
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter message content"
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default SendEmail;
