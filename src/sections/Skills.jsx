/**
 * Skills Section Component
 * 
 * Displays technology skills in categorized cards:
 * - Frontend Development
 * - Backend Development
 * - Database & Tools
 * 
 * Features hover animations and scroll-triggered reveals.
 * 
 * @file Skills.jsx
 * @description Skills showcase section
 */

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="skills" className="skills section" ref={ref} style={{ backgroundColor: colors.primary }}>
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="section-title"
            variants={cardVariants}
            style={{ color: colors.accent }}
          >
            Skills & Technologies
            <span className="title-underline" style={{ backgroundColor: colors.accent2 }}></span>
          </motion.h2>
          
          <div className="skills-grid">
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                className="skill-card"
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                style={{
                  backgroundColor: colors.secondary,
                  boxShadow: `0 4px 20px ${theme === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.05)'}`,
                }}
              >
                <h3 className="skill-category-title" style={{ color: colors.text }}>
                  {category.category}
                </h3>
                <div className="skill-items-grid">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + itemIndex * 0.05 + 0.3 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      style={{
                        backgroundColor: colors.backgroundBlue || colors.primary,
                      }}
                    >
                      <span className="skill-icon">{item.icon}</span>
                      <span className="skill-name" style={{ color: colors.text }}>
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

