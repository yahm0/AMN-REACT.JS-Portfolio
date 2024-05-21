// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css'; // Ensure this path is correct
import App from './App';
import reportWebVitals from './reportWebVitals';

// Wrap the App component in React.StrictMode to highlight potential problems
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Mount the App component to the DOM element with the id 'root'
);

// Call reportWebVitals to measure performance of the app
reportWebVitals();
