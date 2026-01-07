/**
 * About Section Component
 * 
 * Displays:
 * - About text paragraphs
 * - Statistics boxes (Years of Experience, Projects, Technologies, Clients)
 * - Scroll-triggered animations
 * 
 * @file About.jsx
 * @description About section with stats
 */

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const colors = useSelector((state) => state.theme.colors[state.theme.mode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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

  const stats = [
    { value: personalInfo.stats.experience, label: 'Years of Experience' },
    { value: personalInfo.stats.projects, label: 'Projects Completed' },
    { value: personalInfo.stats.technologies, label: 'Technologies' },
    { value: personalInfo.stats.clients, label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="about section" ref={ref} style={{ backgroundColor: colors.primary }}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="section-title"
            variants={itemVariants}
            style={{ color: colors.accent }}
          >
            About Me
            <span className="title-underline" style={{ backgroundColor: colors.accent2 }}></span>
          </motion.h2>
          
          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              {personalInfo.aboutText.map((paragraph, index) => (
                <p key={index} style={{ color: colors.textSecondary }}>
                  {paragraph}
                </p>
              ))}
            </motion.div>
            
            <motion.div className="about-stats" variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-box"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    backgroundColor: colors.backgroundBlue || colors.secondary,
                  }}
                >
                  <motion.div
                    className="stat-value"
                    style={{ color: colors.accent }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    className="stat-label"
                    style={{ color: colors.textSecondary }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
