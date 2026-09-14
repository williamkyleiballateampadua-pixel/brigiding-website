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

interface HomeProps {
  onNavigate?: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('HOME');

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    if (tab !== 'HOME' && onNavigate) {
      onNavigate(tab);
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="homepage-wrapper" style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      {/* 1. Navigation Bar (90px, Royal Blue Silk, 4 Links: HOME, TICKETS, ARTIST, COMMUNITY) */}
      <Navbar activeTab={activeTab} onNavigate={handleNavigate} />

      {/* 2. Hero 5-Slide 5-Star Auto Carousel (720px, Full-width) */}
      <HeroCarousel />

      {/* 3. Marquee Ticker Ribbon (65px, #C9A84C Gold) */}
      <MarqueeTicker />

      {/* 4. Featured Show Spotlight Banner */}
      <ShowHighlight />

      {/* 5. ART Section Breaker & 12 Pictures 3x4 Grid */}
      <ArtGallery />

      {/* 6. Upcoming Appearances "events" Section */}
      <EventsSection />

      {/* 7. Press Quote Section */}
      <QuoteBanner />

      {/* 8. Front-Row Call To Action Section */}
      <BookingCtaSection />

      {/* 9. JOIN OUR COMMUNITY Form & Talent Manager Contact Section */}
      <CommunitySection />

      {/* 10. Footer (280px, #0A0D1A) */}
      <Footer />
    </div>
  );
};

export default Home;
