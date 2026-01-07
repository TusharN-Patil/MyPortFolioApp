/**
 * Animation Slice - Redux State Management for Animation Preferences
 * 
 * Manages animation-related preferences:
 * - Enable/disable animations
 * - Animation speed settings
 * - Reduced motion preference (accessibility)
 * 
 * Note: This slice is reserved for future use when implementing
 * animation controls and accessibility features.
 * 
 * @file animationSlice.js
 * @description Redux slice for animation preferences (reserved for future use)
 */

import { createSlice } from '@reduxjs/toolkit';

// Initial animation state
const initialState = {
  enabled: true,           // Enable/disable animations
  speed: 'normal',         // Animation speed: 'slow', 'normal', 'fast'
  reducedMotion: false,    // Reduced motion preference (accessibility)
};

/**
 * Animation Slice
 * Handles animation preferences state
 */
const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    /**
     * Toggle animations on/off
     */
    toggleAnimations: (state) => {
      state.enabled = !state.enabled;
    },
    /**
     * Set animation speed
     * @param {string} payload - 'slow', 'normal', or 'fast'
     */
    setAnimationSpeed: (state, action) => {
      state.speed = action.payload;
    },
    /**
     * Set reduced motion preference
     * @param {boolean} payload - Reduced motion state
     */
    setReducedMotion: (state, action) => {
      state.reducedMotion = action.payload;
    },
  },
});

// Export actions
export const { toggleAnimations, setAnimationSpeed, setReducedMotion } = animationSlice.actions;

// Export selectors
export const selectAnimationsEnabled = (state) => state.animation.enabled;

export default animationSlice.reducer;
