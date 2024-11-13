// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Mailcraft Pro</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sheets-data">Sheets Data</Link>
        <Link to="/email-config">Email Config</Link>
        <Link to="/send-email">Send Email</Link>
        <Link to="/upload-csv">Upload CSV</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
