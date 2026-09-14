import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import HeroCarousel from '../components/hero/HeroCarousel';
import MarqueeTicker from '../components/common/MarqueeTicker';
import ShowHighlight from '../components/events/ShowHighlight';
import ArtGallery from '../components/art/ArtGallery';
import EventsSection from '../components/events/EventsSection';
import QuoteBanner from '../components/quotes/QuoteBanner';
import BookingCtaSection from '../components/forms/BookingCtaSection';
import CommunitySection from '../components/community/CommunitySection';
import Footer from '../components/common/Footer';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('HOME');

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    const elementMap: Record<string, string> = {
      HOME: 'top',
      TICKETS: 'tickets',
      ARTIST: 'artist',
      COMMUNITY: 'community',
    };
    const targetId = elementMap[tab];
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId) {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage-wrapper">
      {/* 1. Navigation Bar (90px, #0A0D1A, 4 Links: HOME, TICKETS, ARTIST, COMMUNITY) */}
      <Navbar activeTab={activeTab} onNavigate={handleNavigate} />

      {/* 2. Hero 5-Slide 5-Star Auto Carousel (720px, #0A0D1A) */}
      <HeroCarousel />

      {/* 3. Marquee Ticker Ribbon (65px, #C9A84C Gold) */}
      <MarqueeTicker />

      {/* 4. Featured Show Spotlight Banner (#11162E) */}
      <ShowHighlight />

      {/* 5. ART Section Breaker & 12 Pictures 3x4 Grid (#F5F0E8 Cream) */}
      <ArtGallery />

      {/* 6. Upcoming Appearances "events" Section (#11162E) */}
      <EventsSection />

      {/* 7. Press Quote Section (#0A0D1A) */}
      <QuoteBanner />

      {/* 8. Front-Row Call To Action Section (#F5F0E8 Cream) */}
      <BookingCtaSection />

      {/* 9. JOIN OUR COMMUNITY Form & Talent Manager Contact Section (#F5F0E8 Cream) */}
      <CommunitySection />

      {/* 10. Footer (280px, #11162E) */}
      <Footer />
    </div>
  );
};

export default Home;
