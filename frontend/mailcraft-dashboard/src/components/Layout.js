// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Adjust if you have a different navigation component

const Layout = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar /> {/* Ensure your sidebar/navigation component is rendered */}
      </aside>
      <main className="main-content">
        <Outlet /> {/* This renders the child routes */}
      </main>
    </div>
  );
};

export default Layout;
