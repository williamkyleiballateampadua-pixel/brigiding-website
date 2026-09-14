import React from 'react';
import Navbar from '../components/common/Navbar';
import JuliaContactBox from '../components/contacts/JuliaContactBox';
import Footer from '../components/common/Footer';

interface ArtistPageProps {
  onNavigate?: (tab: string) => void;
}

export const ArtistPage: React.FC<ArtistPageProps> = ({ onNavigate }) => {
  return (
    <div className="artist-page-wrapper" style={{ background: '#0A0D1A', color: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar activeTab="ARTIST" onNavigate={onNavigate} />

      <section className="artist-hero-section">
        <div className="artist-hero-inner">
          <div className="section-overline">THE ARTIST BEHIND THE CROWN</div>
          <h1 className="artist-headline">BRIGIDING</h1>
          <p className="artist-tagline">
            International Drag Superstar · Runway Icon · Creative Visionary
          </p>

          <div className="artist-content-grid">
            {/* Out-of-Drag Photo Section */}
            <div className="artist-photo-container">
              <div className="photo-frame-border">
                <div
                  className="artist-portrait"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800')`,
                  }}
                />
                <div className="photo-caption">
                  <span className="caption-gold">BRIGIDING</span> — Out of Drag &amp; In the Studio
                </div>
              </div>
            </div>

            {/* Editorial Bio Write-up (Strictly omitting real name, home location, and timeline) */}
            <div className="artist-bio-text">
              <h2 className="bio-subheading">A Visionary on Stage and Beyond</h2>
              <p className="bio-paragraph">
                Brigiding stands as one of the most prominent and captivating figures in the modern drag landscape. Renowned for flawless editorial fashion, commanding stage presence, and electrifying choreography, Brigiding has redefined performance art across global stages and television screens alike.
              </p>
              <p className="bio-paragraph">
                With a deep passion for artistry, fashion design, and performance excellence, Brigiding continues to push boundaries and inspire millions of darlings across continents. From headline theater tours to high-fashion runways, every appearance reflects uncompromised dedication to the craft of drag.
              </p>
              <p className="bio-paragraph">
                As founder and creative director of premier entertainment initiatives, Brigiding mentors rising talent while creating spaces where self-expression and performance artistry thrive without limit.
              </p>

              <div className="artist-stats-grid">
                <div className="stat-card">
                  <span className="stat-value">10+</span>
                  <span className="stat-label">Years of Mastery</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">Global</span>
                  <span className="stat-label">Tours &amp; Shows</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">Iconic</span>
                  <span className="stat-label">Style &amp; Fashion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manager Contact Box */}
      <section style={{ paddingBottom: '96px' }}>
        <JuliaContactBox />
      </section>

      <Footer />

      <style>{`
        .artist-hero-section {
          width: 100%;
          padding: 80px 0;
          display: flex;
          justify-content: center;
        }

        .artist-hero-inner {
          width: 100%;
          max-width: 1440px;
          padding: 0 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .artist-headline {
          font-family: var(--font-serif);
          font-size: 64px;
          color: #C9A84C;
          letter-spacing: 0.05em;
        }

        .artist-tagline {
          font-family: var(--font-sans);
          font-size: 18px;
          color: #EFEAE0;
          text-align: center;
        }

        .artist-content-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          margin-top: 32px;
          align-items: center;
        }

        .photo-frame-border {
          background: #11162E;
          border: 3px solid #C9A84C;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
        }

        .artist-portrait {
          width: 100%;
          height: 480px;
          background-size: cover;
          background-position: center;
          border-radius: 4px;
        }

        .photo-caption {
          margin-top: 12px;
          font-family: var(--font-sans);
          font-size: 13px;
          color: #EFEAE0;
          text-align: center;
        }

        .caption-gold {
          color: #C9A84C;
          font-weight: 700;
        }

        .artist-bio-text {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bio-subheading {
          font-family: var(--font-serif);
          font-size: 32px;
          color: #FFFFFF;
          line-height: 1.2;
        }

        .bio-paragraph {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          color: #EFEAE0;
        }

        .artist-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 16px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(201, 168, 76, 0.3);
          border-radius: 6px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-value {
          font-family: var(--font-serif);
          font-size: 28px;
          color: #C9A84C;
        }

        .stat-label {
          font-family: var(--font-sans);
          font-size: 12px;
          color: #EFEAE0;
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
          .artist-hero-inner {
            padding: 0 32px;
          }
          .artist-content-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default ArtistPage;
