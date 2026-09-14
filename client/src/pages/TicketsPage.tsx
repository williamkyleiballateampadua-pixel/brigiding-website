import React from 'react';
import Navbar from '../components/common/Navbar';
import ArtGalleryTickets from '../components/tickets/ArtGalleryTickets';
import JuliaContactBox from '../components/contacts/JuliaContactBox';
import Footer from '../components/common/Footer';

interface TicketsPageProps {
  onNavigate?: (tab: string) => void;
}

export const TicketsPage: React.FC<TicketsPageProps> = ({ onNavigate }) => {
  return (
    <div className="tickets-page-wrapper">
      <Navbar activeTab="TICKETS" onNavigate={onNavigate} />
      <ArtGalleryTickets />
      <div style={{ background: '#0A0D1A', paddingBottom: '80px' }}>
        <JuliaContactBox />
      </div>
      <Footer />
    </div>
  );
};

export default TicketsPage;
