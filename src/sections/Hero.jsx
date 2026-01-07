/**
 * Hero Section Component
 * 
 * The main landing section of the portfolio featuring:
 * - Professional profile picture
 * - Name and role display
 * - Professional summary
 * - Call-to-action buttons (Download Resume, Contact Me)
 * - Staggered entrance animations
 * 
 * @file Hero.jsx
 * @description Home/Hero section component
 */

import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { personalInfo } from '../data/portfolioData';
import { smoothScrollTo } from '../utils/smoothScroll';
import personImage from '../assets/PersonImage.png';
import resumePdf from '../assets/Doc/Tushar_Patil_Resume.pdf';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 8rem 2rem 4rem;
  background-color: ${props => props.theme.primary};

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

const ProfilePictureWrapper = styled(motion.div)`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

/**
 * Profile Image Styled Component
 * Professional circular profile image with border and shadow effects
 * Uses theme-aware styling for light/dark mode
 */
const ProfileImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  border: 5px solid ${props => props.theme.accent};
  box-shadow: 0 15px 50px rgba(102, 126, 234, 0.25),
              0 0 0 10px ${props => props.$isLight ? 'rgba(0, 102, 255, 0.08)' : 'rgba(0, 245, 255, 0.08)'},
              inset 0 0 0 2px ${props => props.theme.primary};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${props => props.theme.primary};
  display: block;

  &:hover {
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.35),
                0 0 0 12px ${props => props.$isLight ? 'rgba(0, 102, 255, 0.12)' : 'rgba(0, 245, 255, 0.12)'},
                inset 0 0 0 2px ${props => props.theme.primary};
    transform: scale(1.03);
    border-color: ${props => props.theme.accent2};
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    border-width: 4px;
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.2),
                0 0 0 8px ${props => props.$isLight ? 'rgba(0, 102, 255, 0.08)' : 'rgba(0, 245, 255, 0.08)'},
                inset 0 0 0 2px ${props => props.theme.primary};
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 160px;
    border-width: 3px;
  }
`;

const HeroName = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  color: ${props => props.theme.accent};
`;

const HeroRole = styled(motion.p)`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 500;
  margin-bottom: 2rem;
  color: ${props => props.theme.textSecondary};
`;

const HeroSummary = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.textSecondary};
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  cursor: pointer;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.accent};
  color: #ffffff;
  box-shadow: ${props => props.theme.shadowButton};

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${props => props.theme.accent};
  color: ${props => props.theme.accent};

  &:hover {
    background-color: rgba(0, 102, 255, 0.05);
  }
`;

/**
 * Hero Component
 * Main landing section with profile and introduction
 */
const Hero = () => {
  // Get theme mode for conditional styling
  const theme = useSelector((state) => state.theme.mode);
  const isLight = theme === 'light';

  // Animation variants for container (staggered children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,  // Delay between child animations
        delayChildren: 0.2,      // Initial delay before starting
      },
    },
  };

  // Animation variants for individual items (fade up)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <HeroSection id="hero">
      <Container>
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ProfilePictureWrapper variants={itemVariants}>
            <ProfileImageContainer>
              <ProfileImage
                src={personImage}
                alt={`${personalInfo.name} - ${personalInfo.role}`}
                loading="eager"
                $isLight={isLight}
              />
            </ProfileImageContainer>
          </ProfilePictureWrapper>

          <HeroName variants={itemVariants}>
            {personalInfo.name}
          </HeroName>

          <HeroRole variants={itemVariants}>
            {personalInfo.role}
          </HeroRole>

          <HeroSummary variants={itemVariants}>
            {personalInfo.summary}
          </HeroSummary>

          <HeroButtons variants={itemVariants}>
            <PrimaryButton
              href={resumePdf}
              download
              className="hover-target"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📥</span>
              <span>Download Resume</span>
            </PrimaryButton>
            <SecondaryButton
              href="#contact"
              className="hover-target"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('contact');
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>✉️</span>
              <span>Contact Me</span>
            </SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
