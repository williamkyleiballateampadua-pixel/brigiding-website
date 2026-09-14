import React from 'react';

interface ExhibitionEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  posterUrl: string;
  offsetLevel: 'level-top' | 'level-middle' | 'level-bottom';
}

export const ArtGalleryTickets: React.FC = () => {
  const events: ExhibitionEvent[] = [
    {
      id: '1',
      title: 'São Paulo DragCon Brasil 2026',
      date: 'JUNE 5-6, 2026',
      time: '6:00 PM GMT-3',
      location: 'São Paulo, Brazil',
      venue: 'Expo Center Norte',
      posterUrl: '/Pictures/1%20-%20Promo%20Look.jpg',
      offsetLevel: 'level-top',
    },
    {
      id: '2',
      title: 'D Intervention S3 Launch Party',
      date: 'SEPTEMBER 25, 2026',
      time: '9:00 PM PHT',
      location: 'Greenfield District, Mandaluyong',
      venue: 'BSK Manila',
      posterUrl: '/Pictures/13%20-%20Pink%20Pak%20Boom%20(2).jpg',
      offsetLevel: 'level-middle',
    },
    {
      id: '3',
      title: 'Drag Arena International Showdown',
      date: 'OCTOBER 10, 2026',
      time: '8:00 PM PHT',
      location: 'Quezon City, Philippines',
      venue: 'New Frontier Theater',
      posterUrl: '/Pictures/7%20-%20Sagalamazon.jpg',
      offsetLevel: 'level-bottom',
    },
    {
      id: '4',
      title: 'DDXCXOTA Dance Party Gala',
      date: 'NOVEMBER 14, 2026',
      time: '10:00 PM PHT',
      location: 'Quezon City, Philippines',
      venue: 'Rampa Club QC',
      posterUrl: '/Pictures/18%20-%20Twinning%20Look.jpg',
      offsetLevel: 'level-top',
    },
  ];

  return (
    <section className="tickets-exhibition-section">
      <div className="tickets-exhibition-inner">
        {/* Gallery Exhibition Headline */}
        <div className="exhibition-header">
          <div className="section-overline">ART GALLERY EXHIBITION</div>
          <h1 className="exhibition-headline">WATCH THE BRIGHTEST STAR LIVE</h1>
          <p className="exhibition-subtext">
            Step into the arena of live Filipino drag royalty. Select an exhibition event below to reserve your front-row experience.
          </p>
        </div>

        {/* Staggered Framed Posters Grid (3-4 Events) */}
        <div className="exhibition-grid">
          {events.map((evt) => (
            <div key={evt.id} className={`exhibition-frame ${evt.offsetLevel}`}>
              {/* Outer Golden Art Frame */}
              <div className="art-frame-border">
                <div
                  className="poster-img"
                  style={{ backgroundImage: `url("${evt.posterUrl}")` }}
                />
                <div className="gallery-plaque">
                  <span className="plaque-tag">{evt.date} · {evt.time}</span>
                  <h3 className="plaque-title">{evt.title}</h3>
                  <div className="plaque-location">{evt.venue} — {evt.location}</div>
                  <a href="#community" className="button-gold plaque-btn">
                    GET TICKETS →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tickets-exhibition-section {
          width: 100%;
          background: #FFFFFF;
          padding: 96px 0 120px;
          display: flex;
          justify-content: center;
        }

        .tickets-exhibition-inner {
          width: 100%;
          max-width: 1440px;
          padding: 0 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 64px;
        }

        .exhibition-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }

        .exhibition-headline {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 56px;
          line-height: 1.1;
          color: #171821;
          max-width: 800px;
        }

        .exhibition-subtext {
          font-family: var(--font-sans);
          font-size: 16px;
          color: #475569;
          max-width: 600px;
        }

        /* Staggered Exhibition Grid */
        .exhibition-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          align-items: flex-start;
        }

        .exhibition-frame.level-top {
          transform: translateY(0px);
        }

        .exhibition-frame.level-middle {
          transform: translateY(40px);
        }

        .exhibition-frame.level-bottom {
          transform: translateY(80px);
        }

        .art-frame-border {
          background: #0A0D1A;
          border: 3px solid #C9A84C;
          border-radius: 8px;
          padding: 12px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .art-frame-border:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(201, 168, 76, 0.25);
        }

        .poster-img {
          width: 100%;
          height: 320px;
          background-size: cover;
          background-position: center;
          border-radius: 4px;
        }

        .gallery-plaque {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(201, 168, 76, 0.3);
          padding: 16px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .plaque-tag {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 11px;
          color: #C9A84C;
        }

        .plaque-title {
          font-family: var(--font-serif);
          font-size: 20px;
          line-height: 1.2;
          color: #FFFFFF;
        }

        .plaque-location {
          font-family: var(--font-sans);
          font-size: 13px;
          color: #EFEAE0;
        }

        .plaque-btn {
          margin-top: 8px;
          padding: 10px 16px;
          font-size: 12px;
          width: 100%;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .tickets-exhibition-inner {
            padding: 0 32px;
          }
          .exhibition-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .exhibition-frame.level-middle,
          .exhibition-frame.level-bottom {
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .exhibition-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ArtGalleryTickets;
