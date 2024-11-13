import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SheetsData from './pages/SheetsData';
import EmailConfig from './pages/EmailConfig';
import SendEmail from './pages/SendEmail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sheets-data" element={<SheetsData />} />
          <Route path="email-config" element={<EmailConfig />} />
          <Route path="send-email" element={<SendEmail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
