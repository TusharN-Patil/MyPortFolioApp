/**
 * Custom Cursor Component
 * 
 * Enhanced cursor experience for desktop users.
 * Features:
 * - Custom cursor ring that follows mouse
 * - Cursor dot for precise tracking
 * - Hover state detection
 * - Smooth spring animations
 * - Hidden on mobile devices
 * 
 * @file CustomCursor.jsx
 * @description Custom cursor component for enhanced UX
 */

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './CustomCursor.css';

/**
 * Custom Cursor Component
 * Renders a custom cursor that follows mouse movement
 */
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const showCursor = useSelector((state) => state.ui.showCursor);
  const cursorType = useSelector((state) => state.ui.cursorType);

  /**
   * Mouse tracking and hover detection
   * Sets up event listeners for mouse movement and hover states
   */
  useEffect(() => {
    // Update cursor position on mouse move
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Handle hover state for interactive elements
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add hover listeners to interactive elements
    const hoverElements = document.querySelectorAll('a, button, .hover-target');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup event listeners
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Don't render if cursor is disabled
  if (!showCursor) return null;

  return (
    <>
      {/* Cursor ring: Outer ring that follows mouse */}
      <motion.div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${cursorType}`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      {/* Cursor dot: Inner dot for precise tracking */}
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  );
};

export default CustomCursor;
