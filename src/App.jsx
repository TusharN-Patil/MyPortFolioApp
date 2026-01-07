/**
 * Main App Component
 * 
 * This is the root component that:
 * - Manages active section tracking based on scroll position
 * - Updates body styles based on theme
 * - Renders all portfolio sections (Hero, About, Skills, Experience, Projects, Contact)
 * - Includes global components (Navigation, ThemeToggle, CustomCursor)
 * 
 * @file App.jsx
 * @description Root application component with section management
 */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection } from './store/slices/uiSlice';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import styled from 'styled-components';
import './App.css';

/**
 * Styled App Container
 * Uses styled-components theme for dynamic styling
 */
const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  transition: background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
              color 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const colors = useSelector((state) => state.theme.colors[state.theme.mode]);

  /**
   * Scroll Handler: Updates active section in Redux based on scroll position
   * This enables the navigation to highlight the current section
   */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            dispatch(setActiveSection(section));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  /**
   * Theme Handler: Updates body styles when theme changes
   * Ensures smooth theme transitions across the entire page
   */
  useEffect(() => {
    document.body.style.backgroundColor = colors.primary;
    document.body.style.color = colors.text;
  }, [colors]);

  return (
    <AppContainer>
      {/* Custom Cursor: Enhanced cursor experience for desktop */}
      <CustomCursor />
      
      
      {/* Navigation: Top navigation bar with smooth scroll */}
      <Navigation />
      
      {/* Portfolio Sections */}
      <Hero />        {/* Home section with profile and introduction */}
      <About />       {/* About section with stats and description */}
      <Skills />      {/* Skills section with technology cards */}
      <Experience />  {/* Work experience section */}
      <Projects />    {/* Featured projects showcase */}
      <Contact />     {/* Contact form and information */}
      <Footer />
    </AppContainer>
  );
}

export default App;
