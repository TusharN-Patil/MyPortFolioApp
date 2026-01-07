# Portfolio Project Structure

## Project Overview
This is a modern, animated portfolio website built with React, Redux Toolkit, and styled-components. The portfolio features a clean design with light/dark theme support and smooth animations.

## File Structure

### Core Files
- `src/main.jsx` - Application entry point with providers setup
- `src/App.jsx` - Root component managing sections and scroll tracking
- `src/index.css` - Global styles and CSS variables

### Components (`src/components/`)
- `Navigation.jsx` - Top navigation bar with section links
- `ThemeToggle.jsx` - Theme switcher button (light/dark)
- `CustomCursor.jsx` - Enhanced cursor experience for desktop

### Sections (`src/sections/`)
- `Hero.jsx` - Home section with profile and introduction
- `About.jsx` - About section with stats and description
- `Skills.jsx` - Skills showcase with technology cards
- `Experience.jsx` - Work experience timeline
- `Projects.jsx` - Featured projects showcase
- `Contact.jsx` - Contact form and information

### State Management (`src/store/`)
- `store.js` - Redux store configuration
- `slices/themeSlice.js` - Theme state management
- `slices/uiSlice.js` - UI state (active section, menu, cursor)
- `slices/animationSlice.js` - Animation preferences (reserved for future use)

### Theme (`src/theme/`)
- `theme.js` - Theme configuration (colors, gradients, shadows)
- `ThemeProvider.jsx` - styled-components theme provider

### Data (`src/data/`)
- `portfolioData.js` - Personal info, experience, projects, education
- `skillsData.js` - Skills data with icons

### Utilities (`src/utils/`)
- `smoothScroll.js` - Smooth scroll navigation utility

## Removed Files
- `FloatingShapes.jsx` - Unused component
- `Work.jsx` - Replaced by Experience.jsx
- Empty `hooks/` and `types/` directories

## Key Features
- Light/Dark theme support
- Smooth scroll navigation
- Active section tracking
- Custom cursor (desktop only)
- Framer Motion animations
- Responsive design
- styled-components for theming

