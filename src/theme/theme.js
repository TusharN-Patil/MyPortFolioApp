/**
 * Theme Configuration
 * 
 * Centralized theme configuration for the application.
 * Defines color schemes, gradients, and styling values for both light and dark modes.
 * 
 * @file theme.js
 * @description Theme configuration for styled-components
 */

/**
 * Theme configuration object
 * Contains color schemes for light and dark modes
 */
export const theme = {
  // Light Mode Theme
  light: {
    // Background Colors
    primary: '#ffffff',           // Main background (white)
    secondary: '#f8f9fa',         // Secondary background (light gray)
    
    // Accent Colors
    accent: '#0066ff',            // Primary accent (blue)
    accent2: '#4facfe',           // Secondary accent (light blue)
    accent3: '#667eea',           // Tertiary accent (purple-blue)
    
    // Text Colors
    text: '#1a1a1a',              // Primary text (dark)
    textSecondary: '#666666',     // Secondary text (gray)
    textLight: '#999999',         // Light text (light gray)
    
    // Background Variants
    backgroundLight: '#e8f0fe',   // Light blue background
    backgroundBlue: '#f0f5ff',    // Very light blue background
    
    // Gradients
    gradient1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradient2: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    gradient3: 'linear-gradient(135deg, #0066ff 0%, #4facfe 100%)',
    gradientHero: 'linear-gradient(135deg, #ffffff 0%, #f0f5ff 100%)',
    
    // Shadows
    shadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    shadowHover: '0 8px 30px rgba(0, 0, 0, 0.12)',
    shadowButton: '0 4px 15px rgba(0, 102, 255, 0.3)',
  },
  
  // Dark Mode Theme
  dark: {
    // Background Colors
    primary: '#0a0a0f',           // Main background (dark navy)
    secondary: '#1a1a2e',         // Secondary background (darker navy)
    
    // Accent Colors
    accent: '#00f5ff',            // Primary accent (cyan)
    accent2: '#00ff88',           // Secondary accent (neon green)
    accent3: '#ff6b6b',           // Tertiary accent (coral)
    
    // Text Colors
    text: '#ffffff',              // Primary text (white)
    textSecondary: '#a0a0a0',     // Secondary text (light gray)
    textLight: '#888888',         // Light text (gray)
    
    // Background Variants
    backgroundLight: '#1a1a2e',  // Dark background variant
    backgroundBlue: '#1a1a2e',    // Dark background variant
    
    // Gradients
    gradient1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradient2: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    gradient3: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    gradientHero: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    
    // Shadows
    shadow: '0 4px 20px rgba(255, 255, 255, 0.05)',
    shadowHover: '0 8px 30px rgba(255, 255, 255, 0.1)',
    shadowButton: '0 4px 15px rgba(0, 245, 255, 0.3)',
  },
};

/**
 * Get theme based on mode
 * @param {string} mode - 'light' or 'dark'
 * @returns {object} Theme object for the specified mode
 */
export const getTheme = (mode) => theme[mode] || theme.light;
