import React from 'react';

export const JuliaContactBox: React.FC = () => {
  return (
    <div className="julia-contact-container">
      <div className="julia-contact-inner">
        <span className="julia-tag">FOR CORPORATE EVENTS &amp; PERFORMANCE BOOKING</span>
        <h3 className="julia-heading">Please contact</h3>

        <div className="julia-manager-card">
          <div className="julia-avatar">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>

          <div className="julia-details">
            <h4 className="julia-name">Julia</h4>
            <p className="julia-role">Talent Manager</p>

            <div className="julia-contacts">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+63 917 888 DING (3464)</span>
              </div>

              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>julia.manager@brigiding.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .julia-contact-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }

        .julia-contact-inner {
          width: 100%;
          max-width: 640px;
          background: #0A0D1A;
          border: 1px solid #C9A84C;
          border-radius: 8px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .julia-tag {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.1em;
          color: #C9A84C;
          text-transform: uppercase;
        }

        .julia-heading {
          font-family: var(--font-serif);
          font-size: 20px;
          color: #FFFFFF;
        }

        .julia-manager-card {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 8px;
          background: rgba(255, 255, 255, 0.05);
          padding: 16px 24px;
          border-radius: 8px;
          width: 100%;
          justify-content: center;
        }

        .julia-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(201, 168, 76, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #C9A84C;
        }

        .julia-details {
          text-align: left;
        }

        .julia-name {
          font-family: var(--font-serif);
          font-size: 22px;
          color: #FFFFFF;
        }

        .julia-role {
          font-family: var(--font-sans);
          font-size: 13px;
          color: #C9A84C;
          font-weight: 600;
        }

        .julia-contacts {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 8px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #EFEAE0;
        }
      `}</style>
    </div>
  );
};

export default JuliaContactBox;
