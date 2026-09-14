import { useState } from 'react';
import Home from './pages/Home';
import TicketsPage from './pages/TicketsPage';
import ArtistPage from './pages/ArtistPage';
import CommunityPage from './pages/CommunityPage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('HOME');

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  switch (currentTab) {
    case 'TICKETS':
      return <TicketsPage onNavigate={handleNavigate} />;
    case 'ARTIST':
      return <ArtistPage onNavigate={handleNavigate} />;
    case 'COMMUNITY':
      return <CommunityPage onNavigate={handleNavigate} />;
    case 'HOME':
    default:
      return <Home onNavigate={handleNavigate} />;
  }
}
