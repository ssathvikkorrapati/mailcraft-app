// src/pages/EmailConfig.js
import React, { useState } from 'react';
import { saveEmailConfig } from '../api/apiService';
import './EmailConfig.css';

const EmailConfig = () => {
  const [subject, setSubject] = useState('');
  const [bodyTemplate, setBodyTemplate] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { subject, bodyTemplate };
    try {
      const response = await saveEmailConfig(config);
      setResponseMessage(response.message);
    } catch (error) {
      setResponseMessage('Failed to save email configuration');
    }
  };

  return (
    <div className="email-config">
      <h2>Email Configuration</h2>
      <form onSubmit={handleSubmit}>
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
          Body Template:
          <textarea
            value={bodyTemplate}
            onChange={(e) => setBodyTemplate(e.target.value)}
            placeholder="Enter email body template"
          />
        </label>
        <button type="submit">Save Configuration</button>
      </form>
      {responseMessage && <p className="response">{responseMessage}</p>}
    </div>
  );
};

export default EmailConfig;
