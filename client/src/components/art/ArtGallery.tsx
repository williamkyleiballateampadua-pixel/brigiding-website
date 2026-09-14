import React from 'react';

interface ArtPhoto {
  id: number;
  title: string;
  url: string;
  category: string;
}

export const ArtGallery: React.FC = () => {
  // 12 High-Fashion Drag Photography Placeholders (3 columns x 4 rows)
  const photos: ArtPhoto[] = [
    { id: 1, title: 'Slaysian Royale Gold armor', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800', category: 'Lookbook' },
    { id: 2, title: 'D Intervention Poster', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800', category: 'Stage' },
    { id: 3, title: 'Vogue Editorial Philippines', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800', category: 'Editorial' },
    { id: 4, title: 'Golden Sunburst Headpiece', url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800', category: 'Lookbook' },
    { id: 5, title: 'The Theatre at Solaire Gala', url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800', category: 'Stage' },
    { id: 6, title: 'Filipina High Drama Silhouette', url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800', category: 'Editorial' },
    { id: 7, title: 'Royal Crimson Runway', url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800', category: 'Lookbook' },
    { id: 8, title: 'DragCon Brasil Mainstage', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800', category: 'Stage' },
    { id: 9, title: 'Empowerment Lighting Showcase', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800', category: 'Editorial' },
    { id: 10, title: 'High-Fashion Sequined Cape', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800', category: 'Lookbook' },
    { id: 11, title: 'Beyond the Brand Live', url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800', category: 'Stage' },
    { id: 12, title: 'Editorial Sunset Shoot', url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800', category: 'Editorial' },
  ];

  return (
    <section className="art-gallery-section" id="artist">
      <div className="art-gallery-inner">
        {/* Gallery Intro Breaker Header */}
        <div className="gallery-intro">
          <div className="section-overline">ART</div>

          <div className="gallery-header-row">
            <h2 className="gallery-title">An editorial life in full color</h2>
            <p className="gallery-subtitle">
              A curated lookbook documenting dramatic fashion, stage dominance, and structural garments inspired by Filipina culture and global runways.
            </p>
          </div>
        </div>

        {/* 12 Pictures in 3 Columns x 4 Rows */}
        <div className="art-grid-12">
          {photos.map((photo) => (
            <div key={photo.id} className="art-photo-card">
              <div
                className="art-photo-img"
                style={{ backgroundImage: `url(${photo.url})` }}
              />
              <div className="art-photo-overlay">
                <span className="art-photo-category">{photo.category}</span>
                <h3 className="art-photo-title">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .art-gallery-section {
          width: 100%;
          background: #F5F0E8;
          padding: 96px 0;
          display: flex;
          justify-content: center;
        }

        .art-gallery-inner {
          width: 100%;
          max-width: 1440px;
          padding: 0 80px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .gallery-intro {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gallery-header-row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
        }

        .gallery-title {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 48px;
          line-height: 66px;
          color: #171821;
          max-width: 600px;
        }

        .gallery-subtitle {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 15px;
          line-height: 160%;
          color: #6F6C68;
          max-width: 480px;
        }

        /* 3 Columns x 4 Rows (12 Pictures) */
        .art-grid-12 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .art-photo-card {
          position: relative;
          height: 420px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
        }

        .art-photo-img {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease;
        }

        .art-photo-card:hover .art-photo-img {
          transform: scale(1.05);
        }

        .art-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,13,26,0.85) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .art-photo-card:hover .art-photo-overlay {
          opacity: 1;
        }

        .art-photo-category {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          color: #C9A84C;
          letter-spacing: 0.1em;
        }

        .art-photo-title {
          font-family: var(--font-serif);
          font-size: 20px;
          color: #FFFFFF;
          margin-top: 4px;
        }

        @media (max-width: 1024px) {
          .art-gallery-inner {
            padding: 0 32px;
          }
          .gallery-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .art-grid-12 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .art-grid-12 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ArtGallery;
