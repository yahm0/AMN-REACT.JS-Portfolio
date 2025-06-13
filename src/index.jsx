// src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css'; // Ensure this path is correct
import App from './App';
import reportWebVitals from './reportWebVitals';

// Wrap the App component in React.StrictMode to highlight potential problems
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call reportWebVitals to measure performance of the app
reportWebVitals();
