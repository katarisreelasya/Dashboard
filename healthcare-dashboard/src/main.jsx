import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import '../src/index.css'; 


const rootElement = document.getElementById('app'); // match your HTML div id

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
