import React from 'react';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="quote-section">
      <div className="quote-inner">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>

        <blockquote className="quote-text">
          “Drag is not just beauty; it is art, relentless community, and absolute self-empowerment on a global stage.”
        </blockquote>

        <div className="quote-attribution">
          — BRIGIDING IN THE EDITORIAL EYE, 2026
        </div>
      </div>

      <style>{`
        .quote-section {
          width: 100%;
          background: #0A0D1A;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 120px 0;
          display: flex;
          justify-content: center;
        }

        .quote-inner {
          width: 100%;
          max-width: 1440px;
          padding: 0 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }

        .quote-text {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          font-size: 44px;
          line-height: 120%;
          color: #C9A84C;
          max-width: 1120px;
        }

        .quote-attribution {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 14px;
          line-height: 19px;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-top: 8px;
        }

        @media (max-width: 1024px) {
          .quote-inner {
            padding: 0 32px;
          }
          .quote-text {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default QuoteBanner;
