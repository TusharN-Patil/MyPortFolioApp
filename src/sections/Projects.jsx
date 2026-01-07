/**
 * Projects Section Component
 * 
 * Displays featured projects with:
 * - Project title, year, and description
 * - Technology stack tags
 * - Key features list
 * - Hover animations and 3D effects
 * 
 * @file Projects.jsx
 * @description Featured projects showcase section
 */

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const theme = useSelector((state) => state.theme.mode);
  const colors = useSelector((state) => state.theme.colors[state.theme.mode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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

  // Use first 2 projects as featured
  const featuredProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="projects section" ref={ref} style={{ backgroundColor: colors.primary }}>
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="section-title"
            variants={itemVariants}
            style={{ color: colors.accent }}
          >
            Featured Projects
            <span className="title-underline" style={{ backgroundColor: colors.accent2 }}></span>
          </motion.h2>
          
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                style={{
                  backgroundColor: colors.secondary,
                  boxShadow: `0 4px 20px ${theme === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.05)'}`,
                }}
              >
                <div className="project-main">
                  <div className="project-header">
                    <div>
                      <h3 className="project-title" style={{ color: colors.text }}>
                        {project.title}
                      </h3>
                      <p className="project-subtitle" style={{ color: colors.accent2 }}>
                        Project
                      </p>
                    </div>
                    <motion.span
                      className="project-year"
                      style={{ color: colors.accent2 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.year}
                    </motion.span>
                  </div>

                  <p className="project-description" style={{ color: colors.textSecondary }}>
                    {project.details[0]}
                  </p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="project-tech"
                        whileHover={{ scale: 1.1, y: -2 }}
                        style={{
                          backgroundColor: colors.backgroundBlue || colors.secondary,
                          color: colors.accent,
                          border: `1px solid ${colors.accent2}40`,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <ul className="project-details project-side">
                  {project.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + detailIndex * 0.1 + 0.3 }}
                      style={{ color: colors.textSecondary }}
                    >
                      <span className="checkmark">✓</span>
                      {detail}
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

export default Projects;

