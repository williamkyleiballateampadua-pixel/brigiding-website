import React from 'react';

interface MarqueeTickerProps {
  text?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  text = 'CONFIRMADA · SÃO PAULO DRAGCON BRASIL 2026 · BRIGIDING LIVE IN CONCERT · BOOKING INQUIRIES OPEN · ',
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
        }

        .marquee-text {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 24px;
          line-height: 33px;
          text-transform: uppercase;
          color: #11162E;
          padding-right: 12px;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
};

export default MarqueeTicker;
