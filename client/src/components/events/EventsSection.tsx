import React from 'react';

interface EventCardData {
  id: string;
  date: string;
  title: string;
  location: string;
  imageUrl: string;
}

export const EventsSection: React.FC = () => {
  const eventsList: EventCardData[] = [
    {
      id: '1',
      date: 'SEPTEMBER 25, 2026',
      title: 'D Intervention S3 Party',
      location: 'BSK Manila · Greenfield District. Drag PH live screening, hosted performance showcases and full house energy.',
      imageUrl: '/Pictures/13%20-%20Pink%20Pak%20Boom%20(2).jpg',
    },
    {
      id: '2',
      date: 'OCTOBER 10, 2026',
      title: 'Drag Arena International',
      location: 'New Frontier Theater. An epic cross-border stage showdown displaying high drama and runway choreography.',
      imageUrl: '/Pictures/14%20-%20Ruveal.jpg',
    },
    {
      id: '3',
      date: 'NOVEMBER 14, 2026',
      title: 'DDXCXOTA Dance Party',
      location: 'Rampa Club · Quezon City. A night of sweat, music, bass, and royalty featuring Manila’s supreme performing collective.',
      imageUrl: '/Pictures/19%20-%20Dyosa%20LSFYL.jpg',
    },
  ];

  return (
    <section className="events-section" id="tickets">
      <div className="events-inner">
        {/* Section Header */}
        <div className="events-header">
          <div className="section-overline">COMING APPEARANCES</div>
          <h2 className="events-title">events</h2>
        </div>

        {/* 3 Show Cards */}
        <div className="events-grid">
          {eventsList.map((evt) => (
            <div key={evt.id} className="event-card">
              <div
                className="event-card-img"
                style={{ backgroundImage: `url("${evt.imageUrl}")` }}
              />
              <div className="event-card-body">
                <span className="event-card-date">{evt.date}</span>
                <h3 className="event-card-title">{evt.title}</h3>
                <p className="event-card-location">{evt.location}</p>
                <div className="event-card-action">
                  <a href="#community" className="button-navy" style={{ width: '100%', textAlign: 'center' }}>
                    GET TICKETS →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .events-section {
          width: 100%;
          background: #FFFFFF;
          padding: 96px 0;
          display: flex;
          justify-content: center;
        }

        .events-inner {
          width: 100%;
          max-width: 1440px;
          padding: 0 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
        }

        .events-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }

        .events-title {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 40px;
          line-height: 55px;
          color: #171821;
          text-transform: lowercase;
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }

        .event-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .event-card:hover {
          transform: translateY(-4px);
          border-color: #C9A84C;
          box-shadow: 0 12px 28px rgba(201, 168, 76, 0.15);
        }

        .event-card-img {
          width: 100%;
          height: 240px;
          background-size: cover;
          background-position: center top;
          image-rendering: -webkit-optimize-contrast;
        }

        .event-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }

        .event-card-date {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;
          color: #C9A84C;
        }

        .event-card-title {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 24px;
          line-height: 33px;
          color: #171821;
        }

        .event-card-location {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 14px;
          line-height: 19px;
          color: #475569;
          flex-grow: 1;
        }

        .event-card-action {
          margin-top: 12px;
        }

        @media (max-width: 1024px) {
          .events-inner {
            padding: 0 32px;
          }
          .events-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
