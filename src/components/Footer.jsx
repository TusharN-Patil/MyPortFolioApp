import { useSelector } from 'react-redux';
import './Footer.css';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon, GitHubIcon, MailIcon } from './icons';

const Footer = () => {
  const colors = useSelector((state) => state.theme.colors[state.theme.mode]);
  const theme = useSelector((state) => state.theme.mode);

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: colors.secondary,
        borderTop: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
      }}
    >
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo" style={{ color: colors.accent }}>
            {personalInfo.useName}
          </div>
          <p className="footer-tag" style={{ color: colors.textSecondary }}>
            Building delightful web and mobile experiences.
          </p>
        </div>

        <nav className="footer-nav">
          {links.map((l) => (
            <a
              key={l.id}
              className="footer-link"
              href={`#${l.id}`}
              style={{ color: colors.textSecondary }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          <a
            className="social-btn"
            href={`https://${personalInfo.github}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: colors.accent }}
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            className="social-btn"
            href={`https://${personalInfo.linkedin}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: colors.accent }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            className="social-btn"
            href={`mailto:${personalInfo.email}`}
            style={{ color: colors.accent }}
            aria-label="Email"
          >
            <MailIcon />
          </a>
        </div>
      </div>

      <div className="footer-bottom" style={{ color: colors.textSecondary }}>
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
