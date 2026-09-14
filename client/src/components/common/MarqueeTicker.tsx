import React from 'react';

interface MarqueeTickerProps {
  text?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  text = 'BRIGIDING LIVE IN CONCERT · BOOKING INQUIRIES OPEN · QUEEN OF THE STAGE · INTERNATIONAL DRAG ROYALTY · ',
}) => {
  return (
    <div className="marquee-ticker-container">
      <div className="animate-marquee">
        <span className="marquee-text">{text.repeat(4)}</span>
        <span className="marquee-text">{text.repeat(4)}</span>
      </div>

      <style>{`
        .marquee-ticker-container {
          width: 100%;
          height: 65px;
          background: #C9A84C;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 45s linear infinite;
          will-change: transform;
        }

        .marquee-text {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 24px;
          line-height: 33px;
          text-transform: uppercase;
          color: #11162E;
          padding-right: 24px;
          letter-spacing: 0.05em;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeTicker;

