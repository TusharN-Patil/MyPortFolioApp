/**
 * Smooth Scroll Utility
 * 
 * Provides smooth scrolling functionality to navigate between sections.
 * Used by navigation links to smoothly scroll to target sections.
 * 
 * @file smoothScroll.js
 * @description Utility function for smooth scrolling navigation
 */

/**
 * Smoothly scrolls to an element by its ID
 * 
 * @param {string} elementId - The ID of the target element to scroll to
 * @example
 * smoothScrollTo('about'); // Scrolls to element with id="about"
 */
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',  // Smooth scroll animation
      block: 'start',       // Align to top of viewport
    });
  }
};
