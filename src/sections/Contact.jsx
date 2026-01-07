/**
 * Contact Section Component
 * 
 * Displays:
 * - Contact information cards (Email, Phone, Location)
 * - Social media links (LinkedIn, GitHub)
 * - Contact form (Name, Email, Message)
 * - Form submission handling
 * 
 * @file Contact.jsx
 * @description Contact section with form
 */

import { useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { sendContactEmail } from '../utils/email';
import './Contact.css';
import { MailIcon, PhoneIcon, LocationIcon, LinkedInIcon, GitHubIcon } from '../components/icons';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const theme = useSelector((state) => state.theme.mode);
  const colors = useSelector((state) => state.theme.colors[state.theme.mode]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await sendContactEmail(formData);
      console.log('[Contact] send result:', res);
      if (res?.via === 'emailjs' && res?.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Opening your email app to send the message. If it did not open, please email me directly at: tusharpatil21324@gmail.com');
      }
    } catch (err) {
      alert('Sorry, something went wrong. Please try again later or email me directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const contactInfo = [
    { icon: MailIcon, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: PhoneIcon, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: LocationIcon, label: 'Location', value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="contact section" ref={ref} style={{ backgroundColor: colors.primary }}>
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <h2 className="section-title" style={{ color: colors.accent }}>
              Get In Touch
              <span className="title-underline" style={{ backgroundColor: colors.accent2 }}></span>
            </h2>
            <p className="contact-subtitle" style={{ color: colors.textSecondary }}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div className="contact-info-section" variants={itemVariants}>
              <h3 className="info-section-title" style={{ color: colors.text }}>
                Contact Information
              </h3>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="contact-info-item hover-target"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    style={{
                      backgroundColor: colors.backgroundBlue || colors.secondary,
                      textDecoration: 'none',
                      cursor: info.href ? 'pointer' : 'default',
                    }}
                  >
                    <div className="contact-icon" style={{ backgroundColor: colors.accent }}>
                      <info.icon />
                    </div>
                    <div className="contact-info-text">
                      <span className="contact-label" style={{ color: colors.textLight || colors.textSecondary }}>
                        {info.label}
                      </span>
                      <span className="contact-value" style={{ color: colors.text }}>
                        {info.value}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <h3 className="info-section-title" style={{ color: colors.text, marginTop: '2rem' }}>
                Social Links
              </h3>
              <div className="social-links">
                <motion.a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link hover-target"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ backgroundColor: colors.accent }}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </motion.a>
                <motion.a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link hover-target"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ backgroundColor: colors.accent }}
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </motion.a>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              variants={itemVariants}
              onSubmit={handleSubmit}
              style={{
                backgroundColor: colors.secondary,
                boxShadow: `0 4px 20px ${theme === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.05)'}`,
              }}
            >
              <div className="form-group">
                <label htmlFor="name" style={{ color: colors.text }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: colors.primary,
                    borderColor: colors.textSecondary + '40',
                    color: colors.text,
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{ color: colors.text }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: colors.primary,
                    borderColor: colors.textSecondary + '40',
                    color: colors.text,
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{ color: colors.text }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: colors.primary,
                    borderColor: colors.textSecondary + '40',
                    color: colors.text,
                  }}
                />
              </div>
              <motion.button
                type="submit"
                className="submit-button hover-target"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: colors.accent,
                  color: '#ffffff',
                }}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
