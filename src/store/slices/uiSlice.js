/**
 * UI Slice - Redux State Management for UI State
 * 
 * Manages UI-related state:
 * - Menu open/closed state
 * - Active section (for navigation highlighting)
 * - Cursor type and visibility
 * 
 * @file uiSlice.js
 * @description Redux slice for UI state management
 */

import { createSlice } from '@reduxjs/toolkit';

// Initial UI state
const initialState = {
  menuOpen: false,        // Mobile menu state (reserved for future use)
  activeSection: 'hero',  // Currently active section for navigation
  cursorType: 'default',   // Cursor type (reserved for future use)
  showCursor: true,        // Show/hide custom cursor
};

/**
 * UI Slice
 * Handles UI state and actions
 */
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    /**
     * Set menu open/closed state
     * @param {boolean} payload - Menu open state
     */
    setMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
    /**
     * Set the currently active section
     * Used for navigation highlighting
     * @param {string} payload - Section ID (hero, about, skills, etc.)
     */
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    /**
     * Set cursor type
     * @param {string} payload - Cursor type
     */
    setCursorType: (state, action) => {
      state.cursorType = action.payload;
    },
    /**
     * Show/hide custom cursor
     * @param {boolean} payload - Show cursor state
     */
    setShowCursor: (state, action) => {
      state.showCursor = action.payload;
    },
  },
});

// Export actions
export const { setMenuOpen, setActiveSection, setCursorType, setShowCursor } = uiSlice.actions;

// Export selectors
export const selectMenuOpen = (state) => state.ui.menuOpen;
export const selectActiveSection = (state) => state.ui.activeSection;
export const selectCursorType = (state) => state.ui.cursorType;

export default uiSlice.reducer;
