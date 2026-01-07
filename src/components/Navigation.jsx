/**
 * Navigation Component
 * 
 * Top navigation bar with:
 * - Logo (initials from personal info)
 * - Navigation links (Home, About, Skills, Experience, Projects, Contact)
 * - Active section highlighting
 * - Smooth scroll navigation
 * - Animated entrance and hover effects
 * 
 * @file Navigation.jsx
 * @description Main navigation component with section links
 */

import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection } from '../store/slices/uiSlice';
import { setMenuOpen } from '../store/slices/uiSlice';
import { motion } from 'framer-motion';
import { smoothScrollTo } from '../utils/smoothScroll';
import { personalInfo } from '../data/portfolioData';
import './Navigation.css';
import ThemeToggle from './ThemeToggle';

/**
 * Navigation Component
 * Renders the top navigation bar with section links
 */
const Navigation = () => {
  const dispatch = useDispatch();
  const activeSection = useSelector((state) => state.ui.activeSection);
  const menuOpen = useSelector((state) => state.ui.menuOpen);
  const theme = useSelector((state) => state.theme.mode);
  const colors = useSelector((state) => state.theme.colors[state.theme.mode]);

  /**
   * Handle navigation link click
   * Updates active section in Redux and smoothly scrolls to target
   * 
   * @param {Event} e - Click event
   * @param {string} id - Section ID to navigate to
   */
  const handleNavClick = (e, id) => {
    e.preventDefault();
    dispatch(setActiveSection(id));
    smoothScrollTo(id);
    // Close mobile menu after navigation
    if (menuOpen) {
      dispatch(setMenuOpen(false));
    }
  };

  // Navigation items configuration
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className="navigation"
      initial={{ y: -100, opacity: 0 }}  // Start above viewport
      animate={{ y: 0, opacity: 1 }}      // Animate into view
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(10, 10, 15, 0.95)',
        borderBottom: `1px solid ${theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`,
      }}
    >
      <div className="nav-container">
        {/* Logo: Shows initials from personal info */}
        <motion.a
          href="#hero"
          className="nav-logo"
          onClick={(e) => handleNavClick(e, 'hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ color: colors.accent }}
        >
          {personalInfo.useName}
        </motion.a>
        {/* Actions: theme toggle (desktop) + hamburger */}
        <div className="nav-actions">
          <div className="hide-mobile">
            <ThemeToggle />
          </div>
          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle navigation menu"
            onClick={() => dispatch(setMenuOpen(!menuOpen))}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }} // Staggered animation
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                style={{
                  color: activeSection === item.id ? colors.accent : colors.textSecondary,
                }}
              >
                {item.label}
                {/* Active indicator: Animated underline for active section */}
                {activeSection === item.id && (
                  <motion.span
                    className="nav-link-indicator"
                    layoutId="nav-indicator" // Shared layout animation
                    style={{
                      backgroundColor: colors.accent,
                    }}
                  />
                )}
              </a>
            </motion.li>
          ))}
          {/* Theme toggle as last item for mobile menu */}
          <li className="show-mobile">
            <div style={{ padding: '0.25rem 0' }}>
              <ThemeToggle />
            </div>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
