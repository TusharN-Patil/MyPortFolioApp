/**
 * Theme Toggle Component
 * 
 * Button component that allows users to toggle between light and dark themes.
 * Features:
 * - Animated icon rotation
 * - Pulsing glow effect
 * - Smooth theme transitions
 * 
 * @file ThemeToggle.jsx
 * @description Theme toggle button component
 */

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import { motion } from 'framer-motion';
import './ThemeToggle.css';

/**
 * Theme Toggle Component
 * Renders a button to toggle between light and dark themes
 */
const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <motion.button
      className="theme-toggle"
      onClick={() => dispatch(toggleTheme())}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {/* Icon container with rotation animation */}
      <motion.div
        className="theme-toggle-inner"
        animate={{
          rotate: theme === 'dark' ? 0 : 180, // Rotate icon based on theme
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        {/* Sun icon for dark mode (click to switch to light) */}
        {theme === 'dark' ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        ) : (
          // Moon icon for light mode (click to switch to dark)
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </motion.div>
      {/* Pulsing glow effect */}
      <motion.div
        className="theme-toggle-glow"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
