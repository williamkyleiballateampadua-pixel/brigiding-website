import React, { useState } from 'react';

interface NavbarProps {
  activeTab?: string;
  onNavigate?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab = 'HOME', onNavigate }) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const navItems = [
    { label: 'HOME', id: 'HOME' },
    { label: 'TICKETS', id: 'TICKETS' },
    { label: 'ARTIST', id: 'ARTIST' },
    { label: 'COMMUNITY', id: 'COMMUNITY' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    if (onNavigate) onNavigate(id);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand Logo & Title */}
        <div className="brand-wrapper" onClick={() => handleNavClick('HOME')} style={{ cursor: 'pointer' }}>
          <svg className="brand-logo" viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Gold Crown SVG Icon */}
            <path d="M12 28L6 10L20 18L32 6L44 18L58 10L52 28H12Z" fill="#C9A84C" />
            <circle cx="6" cy="9" r="2.5" fill="#C9A84C" />
            <circle cx="32" cy="5" r="3" fill="#C9A84C" />
            <circle cx="58" cy="9" r="2.5" fill="#C9A84C" />
            <rect x="12" y="29.5" width="40" height="2.5" rx="1" fill="#C9A84C" />
          </svg>
          <span className="brand-title">BRIGIDING</span>
        </div>

        {/* Navigation Menu Links (4 Items ONLY: HOME, TICKETS, ARTIST, COMMUNITY) */}
        <nav className="nav-links">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <div
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span className="nav-label">{item.label}</span>
                <div className={`active-indicator ${isActive ? 'visible' : ''}`} />
              </div>
            );
          })}
        </nav>

        {/* Social Media Icons (3 Icons ONLY: IG, FB, YT) */}
        <div className="nav-socials">
          {/* Instagram */}
          <a
            href="https://instagram.com/brigiding"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/brigiding"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@Brigidingofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="YouTube"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .navbar-container {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          height: 90px;
          background: linear-gradient(135deg, #03081A 0%, #081B4B 50%, #040D28 100%);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
          border-bottom: 1px solid rgba(201, 168, 76, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }

        .navbar-inner {
          width: 100%;
          max-width: 1440px;
          height: 100%;
          padding: 0 80px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .brand-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-title {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 24px;
          line-height: 33px;
          color: #C9A84C;
          letter-spacing: 0.05em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 40px;
          height: 100%;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 90px;
          cursor: pointer;
          position: relative;
          padding: 0 4px;
        }

        .nav-label {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 13px;
          line-height: 18px;
          text-transform: uppercase;
          color: #FFFFFF;
          transition: color 0.2s ease;
        }

        .nav-item:hover .nav-label,
        .nav-item.active .nav-label {
          color: #C9A84C;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(201, 168, 76, 0.5);
        }

        .active-indicator {
          width: 24px;
          height: 2px;
          background: #C9A84C;
          margin-top: 4px;
          opacity: 0;
          box-shadow: 0 0 8px #C9A84C;
          transition: opacity 0.2s ease;
        }

        .active-indicator.visible {
          opacity: 1;
        }

        .nav-socials {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: 1px solid #C9A84C;
          border-radius: 4px;
          background: rgba(3, 8, 26, 0.5);
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .social-icon-btn:hover {
          background: rgba(201, 168, 76, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 0 12px rgba(201, 168, 76, 0.4);
        }

        @media (max-width: 1024px) {
          .navbar-inner {
            padding: 0 32px;
          }
          .nav-links {
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .navbar-inner {
            padding: 0 20px;
          }
          .nav-links {
            gap: 16px;
          }
          .nav-label {
            font-size: 11px;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
