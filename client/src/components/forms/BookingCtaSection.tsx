import React from 'react';

export const BookingCtaSection: React.FC = () => {
  return (
    <section className="booking-cta-section">
      <div className="booking-cta-inner">
        <div className="section-overline">GET YOUR FRONT ROW TICKET</div>

        <h2 className="cta-title">Ready for your front-row moment?</h2>

        <p className="cta-subtext">
          Join the inner circle. Reserve tickets to upcoming shows, apply for elite VIP packages, or enquire about booking Brigiding for custom runway, performance, or hosting engagements.
        </p>

        <div className="cta-button-group">
          <a href="#community" className="button-gold">
            BOOKING ENQUIRIES
          </a>
          <a href="#tickets" className="button-navy">
            BUY TICKETS →
          </a>
        </div>
      </div>

      <style>{`
        .booking-cta-section {
          width: 100%;
          background: #F5F0E8;
          padding: 96px 0;
          display: flex;
          justify-content: center;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .booking-cta-inner {
          width: 100%;
          max-width: 1440px;
          padding: 0 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }

        .cta-title {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 48px;
          line-height: 66px;
          color: #171821;
        }

        .cta-subtext {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 16px;
          line-height: 160%;
          color: #6F6C68;
          max-width: 640px;
        }

        .cta-button-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 12px;
        }

        @media (max-width: 1024px) {
          .booking-cta-inner {
            padding: 0 32px;
          }
          .cta-button-group {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default BookingCtaSection;
