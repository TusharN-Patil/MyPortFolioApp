/**
 * Main Entry Point for the Portfolio Application
 * 
 * This file initializes the React application and sets up the necessary providers:
 * - Redux Provider: Manages global state (theme, UI, animations)
 * - Theme Provider: Provides styled-components theme based on Redux state
 * 
 * @file main.jsx
 * @description Application entry point with providers setup
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ThemeProvider from './theme/ThemeProvider';
import './index.css';
import App from './App.jsx';

// Initialize React app with all providers
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Redux Provider: Manages global application state */}
    <Provider store={store}>
      {/* Theme Provider: Provides styled-components theme from Redux */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
