import React from 'react';

interface BookingCtaSectionProps {
  onNavigate?: (tab: string) => void;
}

export const BookingCtaSection: React.FC<BookingCtaSectionProps> = ({ onNavigate }) => {
  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('COMMUNITY');
    }
  };

  const handleTicketsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('TICKETS');
    }
  };

  return (
    <section className="booking-cta-section">
      <div className="booking-cta-inner">
        <div className="section-overline">GET YOUR FRONT ROW TICKET</div>

        <h2 className="cta-title">Ready for your front-row moment?</h2>

        <p className="cta-subtext">
          Join the inner circle. Reserve tickets to upcoming shows, apply for elite VIP packages, or enquire about booking Brigiding for custom runway, performance, or hosting engagements.
        </p>

        <div className="cta-button-group">
          <button onClick={handleBookingClick} className="button-gold">
            BOOKING ENQUIRIES
          </button>
          <button onClick={handleTicketsClick} className="button-navy">
            BUY TICKETS →
          </button>
        </div>
      </div>

      <style>{`
        .booking-cta-section {
          width: 100%;
          background: #FFFFFF;
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
          color: #475569;
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
