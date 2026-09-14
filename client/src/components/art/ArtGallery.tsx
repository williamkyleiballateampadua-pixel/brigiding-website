import React, { useState } from 'react';

interface ArtPhoto {
  id: number;
  title: string;
  url: string;
  category: string;
}

export const ArtGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<ArtPhoto | null>(null);

  // 12 Authentic High-Fashion Drag Photography Assets (3 columns x 4 rows)
  const photos: ArtPhoto[] = [
    { id: 1, title: 'Promo Official Look', url: '/Pictures/1%20-%20Promo%20Look.jpg', category: 'Lookbook' },
    { id: 2, title: 'Entrance Runway Fantasy', url: '/Pictures/2%20-%20Entrance%20Look.jpg', category: 'Stage' },
    { id: 3, title: 'Filipina Terno Couture', url: '/Pictures/5%20-%20Terno%20Look.jpg', category: 'Editorial' },
    { id: 4, title: 'Sagalamazon High Drama', url: '/Pictures/7%20-%20Sagalamazon.jpg', category: 'Lookbook' },
    { id: 5, title: 'Pop Off Girl Group Showcase', url: '/Pictures/8%20-%20Girl%20Group%20(Pop%20Off).jpg', category: 'Stage' },
    { id: 6, title: 'Shake Rattle & Rampa', url: '/Pictures/9%20-%20Shake%20Rattle%20&%20Rampa.jpg', category: 'Editorial' },
    { id: 7, title: 'Jaya Rusical Performance', url: '/Pictures/10%20-%20Jaya%20Rusical.jpg', category: 'Stage' },
    { id: 8, title: 'Pearl High-Fashion Editorial', url: '/Pictures/11%20-%20Pearl%20Look.jpg', category: 'Editorial' },
    { id: 9, title: 'Pink Pak Boom Fantasy', url: '/Pictures/13%20-%20Pink%20Pak%20Boom.jpg', category: 'Lookbook' },
    { id: 10, title: 'Shop Shop Ball High Drama', url: '/Pictures/16%20-%20Shop%20Shop%20Ball.jpg', category: 'Lookbook' },
    { id: 11, title: 'Divisoria Runway Concept', url: '/Pictures/17%20-%20Divisoria%20Look.jpg', category: 'Editorial' },
    { id: 12, title: 'Best Drag Supreme Look', url: '/Pictures/20%20-%20Best%20Drag%20Look.jpg', category: 'Stage' },
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
              A curated lookbook documenting dramatic fashion, stage dominance, and structural garments inspired by Filipina culture and global runways. Click any photo to preview full screen.
            </p>
          </div>
        </div>

        {/* 12 Pictures in 3 Columns x 4 Rows */}
        <div className="art-grid-12">
          {photos.map((photo) => (
            <div key={photo.id} className="art-photo-card" onClick={() => setSelectedPhoto(photo)}>
              <div
                className="art-photo-img"
                style={{ backgroundImage: `url("${photo.url}")` }}
              />
              <div className="art-photo-overlay">
                <span className="art-photo-category">{photo.category}</span>
                <h3 className="art-photo-title">{photo.title}</h3>
                <span className="click-hint">Click to enlarge 🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-backdrop" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedPhoto(null)} title="Close preview">
              ✕
            </button>
            <div className="lightbox-img-wrapper">
              <img src={selectedPhoto.url} alt={selectedPhoto.title} className="lightbox-img" />
            </div>
            <div className="lightbox-info">
              <span className="lightbox-category">{selectedPhoto.category}</span>
              <h3 className="lightbox-title">{selectedPhoto.title}</h3>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .art-gallery-section {
          width: 100%;
          background: #FFFFFF;
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
          color: #475569;
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
          height: 440px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .art-photo-img {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center top;
          image-rendering: -webkit-optimize-contrast;
          transition: transform 0.4s ease;
        }

        .art-photo-card:hover .art-photo-img {
          transform: scale(1.05);
        }

        .art-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,13,26,0.88) 100%);
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

        .click-hint {
          font-family: var(--font-sans);
          font-size: 12px;
          color: #D1D5DB;
          margin-top: 6px;
        }

        /* Lightbox Backdrop */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(3, 8, 26, 0.92);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          animation: fadeIn 0.25s ease;
        }

        .lightbox-content {
          position: relative;
          max-width: 900px;
          max-height: 90vh;
          background: #0A0D1A;
          border: 2px solid #C9A84C;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px rgba(0,0,0,0.8);
        }

        .lightbox-close {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 10;
          background: rgba(3, 8, 26, 0.8);
          border: 1px solid #C9A84C;
          color: #C9A84C;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .lightbox-close:hover {
          transform: scale(1.1);
          background: #C9A84C;
          color: #0A0D1A;
        }

        .lightbox-img-wrapper {
          width: 100%;
          max-height: 70vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
        }

        .lightbox-img {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
        }

        .lightbox-info {
          padding: 20px 24px;
          background: #0A0D1A;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .lightbox-category {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 12px;
          color: #C9A84C;
          text-transform: uppercase;
        }

        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 24px;
          color: #FFFFFF;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
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
