/**
 * Theme Provider Component
 * 
 * Connects Redux theme state with styled-components ThemeProvider.
 * This allows all styled-components to access the theme via props.theme.
 * 
 * @file ThemeProvider.jsx
 * @description Bridge between Redux theme state and styled-components
 */

import { useSelector } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { getTheme } from './theme';

/**
 * Theme Provider Component
 * Wraps the app to provide theme context to styled-components
 * 
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Theme provider wrapper
 */
const ThemeProvider = ({ children }) => {
  // Get current theme mode from Redux
  const mode = useSelector((state) => state.theme.mode);
  
  // Get theme configuration for current mode
  const theme = getTheme(mode);

  // Provide theme to all styled-components
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
