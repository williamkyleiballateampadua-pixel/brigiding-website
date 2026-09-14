import React, { useState } from 'react';

export const CommunitySection: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('Metro Manila');
  const [submitted, setSubmitted] = useState(false);

  const locationsList = [
    'Metro Manila',
    'Luzon',
    'Visayas',
    'Mindanao',
    'Australia',
    'Canada',
    'Japan',
    'Taiwan',
    'Thailand',
    'United States',
    'Vietnam',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) return;
    setSubmitted(true);
  };

  return (
    <section className="community-section" id="community">
      <div className="community-inner">
        <div className="section-overline">GET YOUR FRONT ROW TICKET</div>

        <h2 className="community-title">JOIN OUR COMMUNITY</h2>

        <p className="community-subtext">
          Don’t worry, darling. We’re not here to fill your inbox with nonsense. Just the good stuff: upcoming shows, fabulous opportunities, and the occasional “GURL, DID YOU HEAR?” moment.
        </p>

        {submitted ? (
          <div className="success-banner">
            <h3>Welcome to the Brigiding Darlings Community! ✨</h3>
            <p>You’re officially on the inner circle list. Get ready for exclusive tea and upcoming show passes!</p>
          </div>
        ) : (
          <form className="community-form" onSubmit={handleSubmit}>
            <div className="form-row-2">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="email@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  placeholder="+63 917 123 4567"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Location</label>
              <select value={location} onChange={(e) => setLocation(e.target.value)}>
                {locationsList.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="button-gold" style={{ width: '100%' }}>
                JOIN THE COMMUNITY →
              </button>
            </div>
          </form>
        )}

        {/* Corporate Events & Performance Booking Contact Box */}
        <div className="corporate-booking-box">
          <h4 className="corp-title">FOR CORPORATE EVENTS AND PERFORMANCE BOOKING</h4>
          <p className="corp-text">Please contact:</p>
          <div className="corp-contact-info">
            <strong>Julia</strong> · Talent Manager<br />
            <span>Mobile: +63 917 888 DING (3464)</span> | <span>Email: booking@brigiding.com</span>
          </div>
        </div>
      </div>

      <style>{`
        .community-section {
          width: 100%;
          background: #F5F0E8;
          padding: 96px 0;
          display: flex;
          justify-content: center;
        }

        .community-inner {
          width: 100%;
          max-width: 1440px;
          padding: 0 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }

        .community-title {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 48px;
          line-height: 66px;
          color: #171821;
        }

        .community-subtext {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 16px;
          line-height: 160%;
          color: #6F6C68;
          max-width: 640px;
        }

        .community-form {
          width: 100%;
          max-width: 640px;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 12px;
          color: #171821;
          text-transform: uppercase;
        }

        .form-group input, .form-group select {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #E2E8F0;
          border-radius: 4px;
          font-family: var(--font-sans);
          font-size: 14px;
          color: #171821;
          background: #FAFAFA;
        }

        .form-group input:focus, .form-group select:focus {
          outline: none;
          border-color: #C9A84C;
          background: #FFFFFF;
        }

        .success-banner {
          background: #FFFFFF;
          border: 2px solid #C9A84C;
          border-radius: 8px;
          padding: 32px;
          max-width: 640px;
          color: #171821;
        }

        .success-banner h3 {
          font-family: var(--font-serif);
          color: #C9A84C;
          font-size: 24px;
          margin-bottom: 8px;
        }

        .corporate-booking-box {
          margin-top: 32px;
          padding: 24px 32px;
          background: #0A0D1A;
          border: 1px solid #C9A84C;
          border-radius: 8px;
          color: #FFFFFF;
          max-width: 640px;
          width: 100%;
        }

        .corp-title {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.1em;
          color: #C9A84C;
          margin-bottom: 8px;
        }

        .corp-text {
          font-size: 14px;
          color: #EFEAE0;
        }

        .corp-contact-info {
          font-size: 14px;
          margin-top: 6px;
          color: #FFFFFF;
        }

        @media (max-width: 1024px) {
          .community-inner {
            padding: 0 32px;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default CommunitySection;
