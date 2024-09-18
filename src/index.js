import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import './styles/tailwind.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  // Create a root.
  const root = ReactDOM.createRoot(rootElement);

  // Initial render
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}