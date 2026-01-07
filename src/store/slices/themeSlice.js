/**
 * Theme Slice - Redux State Management for Theme
 * 
 * Manages the application theme state:
 * - Current theme mode (light/dark)
 * - Color schemes for both themes
 * - Actions to toggle or set theme
 * 
 * @file themeSlice.js
 * @description Redux slice for theme management
 */

import { createSlice } from '@reduxjs/toolkit';
import { theme as themeConfig } from '../../theme/theme';

// Initial state: Default to light mode
const initialState = {
  mode: 'light', // 'dark' or 'light' - default to light
  colors: themeConfig, // Color configurations for both themes
};

/**
 * Theme Slice
 * Handles theme state and actions
 */
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    /**
     * Toggle between light and dark theme
     */
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
    /**
     * Set theme to a specific mode
     * @param {string} payload - 'light' or 'dark'
     */
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

// Export actions
export const { toggleTheme, setTheme } = themeSlice.actions;

// Export selectors
export const selectTheme = (state) => state.theme.mode;
export const selectColors = (state) => state.theme.colors[state.theme.mode];

export default themeSlice.reducer;
