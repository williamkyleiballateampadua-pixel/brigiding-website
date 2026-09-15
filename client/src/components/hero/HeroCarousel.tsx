import React, { useState, useEffect } from 'react';

interface SlideData {
  id: number;
  overline: string;
  title: string;
  tagline: string;
  description: string;
  ctaText: string;
  targetTab: string;
  imageUrl: string;
  glowColor: string;
  secondaryGlow: string;
}

interface HeroCarouselProps {
  onNavigate?: (tab: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate }) => {
  const slides: SlideData[] = [
    {
      id: 1,
      overline: '✦ JOIN OUR COMMUNITY',
      title: 'BRIGIDING',
      tagline: 'Glamour without borders.',
      description: 'Experience Filipino artistry, fearless high-fashion performance, and unforgettable stage energy combined in a global drag dynasty.',
      ctaText: 'GET IN TOUCH →',
      targetTab: 'COMMUNITY',
      imageUrl: '/Pictures/1%20-%20Promo%20Look.jpg',
      glowColor: 'rgba(201, 168, 76, 0.28)',
      secondaryGlow: 'rgba(15, 50, 148, 0.45)',
    },
    {
      id: 2,
      overline: '✦ FIRST DRAG RACE SLAYSIAN ROYALE SUPERSTAR',
      title: 'SLAYSIAN ROYALE',
      tagline: 'International Drag Royalty.',
      description: 'Reigning supreme on global stages, bringing authentic Filipina excellence and runway dominance to sold-out arenas worldwide.',
      ctaText: 'EXPLORE SHOWS →',
      targetTab: 'TICKETS',
      imageUrl: '/Pictures/BRIGIDING-252-web.jpg',
      glowColor: 'rgba(255, 215, 0, 0.32)',
      secondaryGlow: 'rgba(180, 83, 9, 0.25)',
    },
    {
      id: 3,
      overline: '✦ MOTHER OF THE HOUSE OF DING',
      title: 'HOUSE OF DING',
      tagline: 'Nurturing legendary talent.',
      description: 'Founding mother of Manila’s premier drag dynasty, cultivating high-octane choreography and boundary-pushing performance art.',
      ctaText: 'MEET THE HOUSE →',
      targetTab: 'ARTIST',
      imageUrl: '/Pictures/5%20-%20Terno%20Look.jpg',
      glowColor: 'rgba(245, 158, 11, 0.3)',
      secondaryGlow: 'rgba(124, 45, 18, 0.35)',
    },
    {
      id: 4,
      overline: '✦ SHOW PRODUCER',
      title: 'THEATRICAL GALA',
      tagline: 'Mastermind of stage & spectacle.',
      description: 'Directing and producing sold-out theatrical galas, Drag PH premiere nights, and cross-border performance showcases.',
      ctaText: 'VIEW PRODUCTIONS →',
      targetTab: 'TICKETS',
      imageUrl: '/Pictures/14%20-%20Ruveal.jpg',
      glowColor: 'rgba(147, 51, 234, 0.3)',
      secondaryGlow: 'rgba(201, 168, 76, 0.28)',
    },
    {
      id: 5,
      overline: '✦ PODCASTER: BEYOND THE BRAND',
      title: 'BEYOND THE BRAND',
      tagline: 'Unfiltered tea behind the lashes.',
      description: 'Host of the acclaimed podcast unpacking the art, business, grit, and chaos of international drag stardom.',
      ctaText: 'LISTEN NOW →',
      targetTab: 'COMMUNITY',
      imageUrl: '/Pictures/11%20-%20Pearl%20Look.jpg',
      glowColor: 'rgba(236, 72, 153, 0.32)',
      secondaryGlow: 'rgba(6, 182, 212, 0.3)',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all slide images into browser cache immediately
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.imageUrl;
    });
  }, []);

  // Auto-play slide transition every 8 seconds (slowed down for comfortable reading)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleCtaClick = (e: React.MouseEvent, targetTab: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetTab);
    } else {
      const el = document.getElementById(targetTab.toLowerCase());
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Dynamic React Bits Ambient Mesh Spotlight Layer (Unified Royal Blue Silk & Gold Theme) */}
      <div
        className="ambient-spotlight-layer"
        style={{
          background: `
            radial-gradient(ellipse at 75% 45%, rgba(15, 50, 148, 0.55) 0%, rgba(7, 22, 72, 0.3) 50%, transparent 75%),
            radial-gradient(ellipse at 25% 65%, rgba(201, 168, 76, 0.28) 0%, transparent 60%),
            radial-gradient(circle at 50% 0%, rgba(15, 50, 148, 0.4) 0%, transparent 70%),
            #050814
          `,
        }}
      />

      {/* React Bits Floating Gold Sparkle Particles */}
      <div className="sparkle-particles-layer">
        <span className="sparkle p1">✦</span>
        <span className="sparkle p2">✧</span>
        <span className="sparkle p3">✦</span>
        <span className="sparkle p4">✧</span>
        <span className="sparkle p5">✦</span>
      </div>

      <div className="hero-inner">
        {/* Stacked Slides Container for 60fps GPU Cross-Fade */}
        <div className="slides-container">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`hero-slide ${isActive ? 'active' : ''}`}
                style={{
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 2 : 1,
                }}
              >
                {/* Hero Left Content Column */}
                <div className="hero-left">
                  <div className="section-overline">{slide.overline}</div>

                  <div className="hero-title-group">
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-tagline">{slide.tagline}</p>
                  </div>

                  <p className="hero-description">{slide.description}</p>

                  <div className="hero-cta">
                    <button
                      onClick={(e) => handleCtaClick(e, slide.targetTab)}
                      className="button-gold"
                    >
                      {slide.ctaText}
                    </button>
                  </div>

                  {/* 5 Star Indicators placed directly beneath the CTA button */}
                  <div className="star-indicators">
                    {slides.map((starSlide, starIndex) => {
                      const isStarActive = starIndex === currentIndex;
                      return (
                        <button
                          key={starSlide.id}
                          className={`star-btn ${isStarActive ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(starIndex);
                          }}
                          title={`Go to slide ${starSlide.id}: ${starSlide.overline}`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill={isStarActive ? '#FFD700' : 'none'}
                            stroke={isStarActive ? '#FFD700' : '#9CA3AF'}
                            strokeWidth="2"
                          >
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
                    style={{ backgroundImage: `url("${slide.imageUrl}")` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .hero-section {
          width: 100%;
          height: 720px;
          background: #050814;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .ambient-spotlight-layer {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          transition: background 1.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: background;
        }

        .sparkle-particles-layer {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }

        .sparkle {
          position: absolute;
          color: rgba(255, 215, 0, 0.6);
          font-size: 14px;
          animation: floatSparkle 6s ease-in-out infinite alternate;
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.8));
        }

        .sparkle.p1 { top: 15%; left: 10%; animation-delay: 0s; font-size: 18px; }
        .sparkle.p2 { top: 75%; left: 35%; animation-delay: 1.5s; font-size: 14px; }
        .sparkle.p3 { top: 25%; left: 45%; animation-delay: 3s; font-size: 20px; }
        .sparkle.p4 { top: 85%; left: 15%; animation-delay: 4.5s; font-size: 12px; }
        .sparkle.p5 { top: 50%; left: 48%; animation-delay: 2s; font-size: 16px; }

        @keyframes floatSparkle {
          0% { transform: translateY(0px) scale(0.8) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-15px) scale(1.2) rotate(15deg); opacity: 0.9; }
          100% { transform: translateY(-30px) scale(0.9) rotate(30deg); opacity: 0.4; }
        }

        .hero-inner {
          width: 100%;
          max-width: 100%;
          height: 720px;
          position: relative;
          z-index: 3;
        }

        .slides-container {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 720px;
          display: flex;
          flex-direction: row;
          transition: opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
        }

        .hero-left {
          width: 50%;
          height: 720px;
          padding: 0 clamp(40px, 7vw, 160px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: clamp(16px, 2.2vw, 24px);
          z-index: 5;
        }

        .hero-title-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hero-title {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: clamp(44px, 5.5vw, 80px);
          line-height: 95%;
          color: #FFFFFF;
          text-shadow: 0 4px 25px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.25);
          letter-spacing: -0.01em;
        }

        .hero-tagline {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: clamp(20px, 2.2vw, 32px);
          line-height: 120%;
          color: #FFD700;
          text-shadow: 0 2px 15px rgba(255, 215, 0, 0.4);
        }

        .hero-description {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: clamp(14px, 1.1vw, 16px);
          line-height: 160%;
          color: #EFEAE0;
          max-width: 540px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
        }

        .hero-cta {
          margin-top: 4px;
        }

        .star-indicators {
          display: flex;
          align-items: center;
          gap: 12px;
          height: 32px;
          margin-top: 8px;
        }

        .star-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          padding: 0;
          margin: 0;
          background: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .star-btn:hover {
          transform: scale(1.25);
        }

        .star-btn.active svg {
          filter: drop-shadow(0 0 12px rgba(255, 215, 0, 0.9));
        }

        .hero-right {
          position: relative;
          width: 50%;
          height: 720px;
          overflow: hidden;
        }

        /* Seamless Royal Blue Photo Blend Overlay into Left Column */
        .hero-right::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background: linear-gradient(to right, #050814 0%, rgba(5, 8, 20, 0.65) 20%, rgba(7, 22, 72, 0.3) 40%, transparent 70%);
        }

        .hero-photograph {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center 20%;
          image-rendering: -webkit-optimize-contrast;
          mask-image: radial-gradient(ellipse at 65% 50%, black 70%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse at 65% 50%, black 70%, transparent 100%);
        }

        @media (max-width: 1024px) {
          .hero-section, .hero-inner, .hero-slide {
            height: auto;
          }
          .hero-slide {
            position: relative;
            flex-direction: column;
          }
          .hero-left {
            width: 100%;
            height: auto;
            padding: 48px 32px 32px 32px;
            gap: 24px;
          }
          .hero-right {
            width: 100%;
            height: 420px;
          }
          .hero-right::before {
            background: linear-gradient(to bottom, #050814 0%, rgba(5, 8, 20, 0.65) 20%, rgba(7, 22, 72, 0.3) 40%, transparent 70%);
          }
          .hero-photograph {
            mask-image: radial-gradient(ellipse at 50% 50%, black 75%, transparent 100%);
            -webkit-mask-image: radial-gradient(ellipse at 50% 50%, black 75%, transparent 100%);
          }
        }

        @media (max-width: 640px) {
          .hero-left {
            padding: 32px 20px 24px 20px;
            gap: 16px;
          }
          .hero-right {
            height: 320px;
          }
          .star-indicators {
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;





