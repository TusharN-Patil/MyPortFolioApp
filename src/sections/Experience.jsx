/**
 * Experience Section Component
 * 
 * Displays work experience with:
 * - Company, role, location, and period
 * - List of contributions/achievements
 * - Hover effects and animations
 * 
 * @file Experience.jsx
 * @description Work experience section
 */

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { workExperience } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const theme = useSelector((state) => state.theme.mode);
  const colors = useSelector((state) => state.theme.colors[state.theme.mode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" className="experience section" ref={ref} style={{ backgroundColor: colors.primary }}>
      <div className="container">
        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="section-title"
            variants={itemVariants}
            style={{ color: colors.accent }}
          >
            Experience
            <span className="title-underline" style={{ backgroundColor: colors.accent2 }}></span>
          </motion.h2>
          
          <div className="experience-list">
            {workExperience.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  backgroundColor: colors.secondary,
                  boxShadow: `0 4px 20px ${theme === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.05)'}`,
                  borderLeft: `4px solid ${colors.accent}`,
                }}
              >
                <div className="experience-header">
                  <div>
                    <h4 className="experience-role" style={{ color: colors.text }}>
                      {exp.role}
                    </h4>
                    <p className="experience-company" style={{ color: colors.text }}>
                      {exp.company}
                    </p>
                    <p className="experience-location" style={{ color: colors.textSecondary }}>
                      {exp.location}
                    </p>
                  </div>
                  <motion.span
                    className="experience-period"
                    style={{ color: colors.accent }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {exp.period}
                  </motion.span>
                </div>
                <ul className="experience-contributions">
                  {exp.contributions.map((contribution, contIndex) => (
                    <motion.li
                      key={contIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + contIndex * 0.05 + 0.3 }}
                      style={{ color: colors.textSecondary }}
                    >
                      {contribution}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

