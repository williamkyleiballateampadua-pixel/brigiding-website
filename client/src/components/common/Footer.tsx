import React from 'react';

interface FooterProps {
  onNavigate?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navItems = ['HOME', 'TICKETS', 'ARTIST', 'COMMUNITY'];

  const handleNavClick = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        {/* Upper Row */}
        <div className="footer-upper">
          {/* Logo & Brand */}
          <div className="footer-brand" onClick={() => handleNavClick('HOME')} style={{ cursor: 'pointer' }}>
            <svg className="footer-logo" viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 28L6 10L20 18L32 6L44 18L58 10L52 28H12Z" fill="#C9A84C" />
              <circle cx="6" cy="9" r="2.5" fill="#C9A84C" />
              <circle cx="32" cy="5" r="3" fill="#C9A84C" />
              <circle cx="58" cy="9" r="2.5" fill="#C9A84C" />
              <rect x="12" y="29.5" width="40" height="2.5" rx="1" fill="#C9A84C" />
            </svg>
            <span className="footer-title">BRIGIDING</span>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-links">
            {navItems.map((item) => (
              <span key={item} className="footer-nav-item" onClick={() => handleNavClick(item)}>
                {item}
              </span>
            ))}
          </div>

          {/* Social Icons (3 ONLY: IG, FB, YT) */}
          <div className="footer-socials">
            <a href="https://instagram.com/brigiding" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a href="https://www.facebook.com/brigiding" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            <a href="https://www.youtube.com/@Brigidingofficial" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <div className="footer-separator" />

        {/* Lower Row */}
        <div className="footer-lower">
          <div className="footer-copyright">
            © 2026 Brigiding. All rights reserved. · Art · Community · Empowerment
          </div>
          <div className="decorative-accent">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"></path>
            </svg>
            <span className="accent-text">QUEEN OF THE STAGE</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-container {
          width: 100%;
          background: #07143D;
          border-top: 1px solid rgba(201, 168, 76, 0.4);
          padding: 80px 0 40px;
          display: flex;
          justify-content: center;
        }

        .footer-inner {
          width: 100%;
          max-width: 1440px;
          padding: 0 80px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .footer-upper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-logo {
          width: 45px;
          height: 28px;
        }

        .footer-title {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 24px;
          line-height: 33px;
          color: #C9A84C;
        }

        .footer-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .footer-nav-item {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: #D1D5DB;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .footer-nav-item:hover {
          color: #C9A84C;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-separator {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.14);
        }

        .footer-lower {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copyright {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 13px;
          line-height: 18px;
          color: #A3AED0;
        }

        .decorative-accent {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .accent-text {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 11px;
          line-height: 15px;
          text-transform: uppercase;
          color: #C9A84C;
        }

        @media (max-width: 1024px) {
          .footer-inner {
            padding: 0 32px;
          }
          .footer-upper {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }
          .footer-lower {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
