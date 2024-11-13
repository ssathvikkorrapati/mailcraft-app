// src/pages/SendEmail.js
import React, { useState } from 'react';
import { sendEmail } from '../api/apiService';
import './SendEmail.css';

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
    <div className="send-email">
      <h2>Send Email</h2>
      <form onSubmit={handleSubmit}>
        <label>
          To:
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Enter recipient's email"
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter email subject"
          />
        </label>
        <label>
          Message:
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter message content"
          />
        </label>
        <button type="submit">Send Email</button>
      </form>
      {responseMessage && <p className="response">{responseMessage}</p>}
    </div>
  );
};

export default SendEmail;
