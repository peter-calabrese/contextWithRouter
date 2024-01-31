import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Dashboard from './components/Dashboard.jsx';
import Pipeline from './components/Pipeline.jsx';
import Navbar from './components/Navbar.jsx';
import { AppContextProvider } from './hooks/useAppContext.jsx';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/pipeline',
    element: <Pipeline />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider initialValues={{}}>
      <Navbar />
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
