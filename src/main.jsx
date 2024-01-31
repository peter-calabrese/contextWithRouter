import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Dashboard from './components/Dashboard.jsx';
import Pipeline from './components/Pipeline.jsx';
import Navbar from './components/Navbar.jsx';
import { AppContextProvider } from './hooks/useAppContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider initialValues={{ id: 0 }}>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/pipeline' element={<Pipeline />} />
        </Routes>
      </Router>
    </AppContextProvider>
  </React.StrictMode>
);
