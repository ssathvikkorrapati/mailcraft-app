// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sheets-data">Sheets Data</Link></li>
        <li><Link to="/email-config">Email Config</Link></li>
        <li><Link to="/send-email">Send Email</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
