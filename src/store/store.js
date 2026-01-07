/**
 * Redux Store Configuration
 * 
 * This file configures the Redux store with all application slices:
 * - theme: Manages light/dark theme mode and color schemes
 * - animation: Controls animation preferences (currently reserved for future use)
 * - ui: Manages UI state (active section, menu, cursor)
 * 
 * @file store.js
 * @description Redux store configuration and setup
 */

import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import animationReducer from './slices/animationSlice';
import uiReducer from './slices/uiSlice';

// Configure Redux store with all reducers
export const store = configureStore({
  reducer: {
    theme: themeReducer,        // Theme management (light/dark mode)
    animation: animationReducer, // Animation preferences (reserved for future use)
    ui: uiReducer,              // UI state (active section, menu, cursor)
  },
});
