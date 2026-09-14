import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import JuliaContactBox from '../components/contacts/JuliaContactBox';
import Footer from '../components/common/Footer';

interface CommunityPageProps {
  onNavigate?: (tab: string) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
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
    'United States',
    'Canada',
    'Thailand',
    'Vietnam',
    'Taiwan',
    'Australia',
    'Japan',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) return;
    setSubmitted(true);
  };

  return (
    <div className="community-page-wrapper" style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar activeTab="COMMUNITY" onNavigate={onNavigate} />

      <section className="community-page-section">
        <div className="community-page-inner">
          <div className="section-overline">GET YOUR FRONT ROW TICKET</div>
          <h1 className="community-page-headline">COME FOR BRIGIDING. STAY FOR THE WORLD OF DING.</h1>
          <p className="community-page-subtext">
            Don’t worry, darling. We’re not here to fill your inbox with nonsense. Just the good stuff: upcoming shows, fabulous opportunities, and the occasional “GURL, DID YOU HEAR?” moment.
          </p>

          {submitted ? (
            <div className="success-banner">
              <h3>Welcome to the World of Ding! ✨</h3>
              <p>You’re officially on the inner circle list. Get ready for exclusive show passes and fabulous updates!</p>
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

          {/* Julia Talent Manager Contact Box */}
          <JuliaContactBox />
        </div>
      </section>

      <Footer />

      <style>{`
        .community-page-section {
          width: 100%;
          padding: 80px 0 120px;
          display: flex;
          justify-content: center;
        }

        .community-page-inner {
          width: 100%;
          max-width: 1440px;
          padding: 0 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }

        .community-page-headline {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 48px;
          line-height: 1.15;
          color: #171821;
          max-width: 800px;
        }

        .community-page-subtext {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.6;
          color: #475569;
          max-width: 640px;
        }

        .community-form {
          width: 100%;
          max-width: 640px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          margin-top: 16px;
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

        @media (max-width: 1024px) {
          .community-page-inner {
            padding: 0 32px;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CommunityPage;
