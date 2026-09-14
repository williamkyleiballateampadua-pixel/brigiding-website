import React from 'react';

export const ShowHighlight: React.FC = () => {
  return (
    <section className="show-highlight-section">
      <div className="show-highlight-card">
        {/* Left Event Poster */}
        <div className="banner-image-wrapper">
          <div
            className="banner-image"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200)',
            }}
          />
        </div>

        {/* Right Event Details */}
        <div className="banner-details">
          <div className="section-overline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>UPCOMING SHOW HIGHLIGHT</span>
          </div>

          <h2 className="banner-title">São Paulo DragCon Brasil 2026</h2>
          <div className="banner-date">JUNE 5-6, 2026 · SÃO PAULO, BRAZIL</div>
          <p className="banner-description">
            Brigiding returns to South America for the absolute peak of runway fantasy, high-fashion meets, and theatrical main-stage showcases representing drag excellence from the Philippines.
          </p>

          <div className="banner-partners">
            PARTNERS: DRAGCON BR · ALLSTARS INC
          </div>
        </div>
      </div>

      <style>{`
        .show-highlight-section {
          width: 100%;
          background: #FFFFFF;
          padding: 64px 0;
          display: flex;
          justify-content: center;
        }

        .show-highlight-card {
          width: 100%;
          max-width: 1440px;
          margin: 0 80px;
          background: #0A0D1A;
          border: 1px solid #C9A84C;
          border-radius: 12px;
          padding: 40px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .banner-image-wrapper {
          width: 480px;
          height: 320px;
          flex-shrink: 0;
        }

        .banner-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          border: 1px solid rgba(201, 168, 76, 0.3);
        }

        .banner-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex-grow: 1;
        }

        .banner-title {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 40px;
          line-height: 55px;
          color: #FFFFFF;
        }

        .banner-date {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          color: #C9A84C;
        }

        .banner-description {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 14px;
          line-height: 160%;
          color: #EFEAE0;
          max-width: 760px;
        }

        .banner-partners {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;
          text-transform: uppercase;
          color: #C9A84C;
          margin-top: 8px;
        }

        @media (max-width: 1024px) {
          .show-highlight-card {
            flex-direction: column;
            margin: 0 32px;
            padding: 24px;
          }
          .banner-image-wrapper {
            width: 100%;
            height: 260px;
          }
        }
      `}</style>
    </section>
  );
};

export default ShowHighlight;
