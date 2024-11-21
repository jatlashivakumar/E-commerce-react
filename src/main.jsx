import React from 'react'; // Explicit import of React
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import { CartProvider } from './context/CartContext'; // Import CartProvider for state management
import './index.css'; // Import global styles
import App from './App'; // Ensure the file extension is omitted if unnecessary

// Create the root of the application and render it
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
