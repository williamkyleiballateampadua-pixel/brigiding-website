import React, { useState, useEffect } from 'react';

interface SlideData {
  id: number;
  overline: string;
  title: string;
  tagline: string;
  description: string;
  ctaText: string;
  imageUrl: string;
}

export const HeroCarousel: React.FC = () => {
  const slides: SlideData[] = [
    {
      id: 1,
      overline: '✦ JOIN OUR COMMUNITY',
      title: 'BRIGIDING',
      tagline: 'Glamour without borders.',
      description: 'Experience Filipino artistry, fearless high-fashion performance, and unforgettable stage energy combined in a global drag dynasty.',
      ctaText: 'GET IN TOUCH →',
      imageUrl: '/Pictures/1%20-%20Promo%20Look.jpg',
    },
    {
      id: 2,
      overline: '✦ FIRST DRAG RACE SLAYSIAN ROYALE SUPERSTAR',
      title: 'SLAYSIAN ROYALE',
      tagline: 'International Drag Royalty.',
      description: 'Reigning supreme on global stages, bringing authentic Filipina excellence and runway dominance to sold-out arenas worldwide.',
      ctaText: 'EXPLORE SHOWS →',
      imageUrl: '/Pictures/BRIGIDING-252.jpg',
    },
    {
      id: 3,
      overline: '✦ MOTHER OF THE HOUSE OF DING',
      title: 'HOUSE OF DING',
      tagline: 'Nurturing legendary talent.',
      description: 'Founding mother of Manila’s premier drag dynasty, cultivating high-octane choreography and boundary-pushing performance art.',
      ctaText: 'MEET THE HOUSE →',
      imageUrl: '/Pictures/5%20-%20Terno%20Look.jpg',
    },
    {
      id: 4,
      overline: '✦ SHOW PRODUCER',
      title: 'THEATRICAL GALA',
      tagline: 'Mastermind of stage & spectacle.',
      description: 'Directing and producing sold-out theatrical galas, Drag PH premiere nights, and cross-border performance showcases.',
      ctaText: 'VIEW PRODUCTIONS →',
      imageUrl: '/Pictures/14%20-%20Ruveal.jpg',
    },
    {
      id: 5,
      overline: '✦ PODCASTER: BEYOND THE BRAND',
      title: 'BEYOND THE BRAND',
      tagline: 'Unfiltered tea behind the lashes.',
      description: 'Host of the acclaimed podcast unpacking the art, business, grit, and chaos of international drag stardom.',
      ctaText: 'LISTEN NOW →',
      imageUrl: '/Pictures/11%20-%20Pearl%20Look.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slide transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="hero-section">
      <div className="hero-inner">
        {/* Hero Left Content Column */}
        <div className="hero-left">
          <div className="section-overline">
            {currentSlide.overline}
          </div>

          <div className="hero-title-group">
            <h1 className="hero-title">{currentSlide.title}</h1>
            <p className="hero-tagline">{currentSlide.tagline}</p>
          </div>

          <p className="hero-description">{currentSlide.description}</p>

          <div className="hero-cta">
            <a href="#community" className="button-gold">
              {currentSlide.ctaText}
            </a>
          </div>

          {/* 5 Star Indicators (Silver turned Gold for active slide) */}
          <div className="star-indicators">
            {slides.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  className={`star-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  title={`Go to slide ${slide.id}: ${slide.overline}`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={isActive ? '#C9A84C' : 'none'} stroke={isActive ? '#C9A84C' : '#9CA3AF'} strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Right Photograph Column */}
        <div className="hero-right">
          <div
            className="hero-photograph"
            style={{ backgroundImage: `url("${currentSlide.imageUrl}")` }}
          />
        </div>
      </div>

      <style>{`
        .hero-section {
          width: 100%;
          height: 720px;
          background: #0A0D1A;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .hero-inner {
          width: 100%;
          max-width: 1440px;
          height: 720px;
          display: flex;
          flex-direction: row;
        }

        .hero-left {
          width: 50%;
          height: 720px;
          padding: 0 48px 0 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 24px;
        }

        .hero-title-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hero-title {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 80px;
          line-height: 95%;
          color: #FFFFFF;
        }

        .hero-tagline {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 32px;
          line-height: 120%;
          color: #C9A84C;
        }

        .hero-description {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 16px;
          line-height: 160%;
          color: #EFEAE0;
          max-width: 540px;
        }

        .hero-cta {
          margin-top: 8px;
        }

        .star-indicators {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
        }

        .star-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          transition: transform 0.2s ease;
        }

        .star-btn:hover {
          transform: scale(1.2);
        }

        .star-btn.active svg {
          filter: drop-shadow(0 0 8px rgba(201, 168, 76, 0.6));
        }

        .hero-right {
          width: 50%;
          height: 720px;
        }

        .hero-photograph {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center 20%;
          image-rendering: -webkit-optimize-contrast;
          transition: background-image 0.6s ease-in-out;
        }

        @media (max-width: 1024px) {
          .hero-section {
            height: auto;
          }
          .hero-inner {
            flex-direction: column;
            height: auto;
          }
          .hero-left, .hero-right {
            width: 100%;
            height: 500px;
            padding: 48px 32px;
          }
          .hero-title {
            font-size: 56px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
