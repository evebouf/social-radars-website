import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EpisodesGrid from './components/EpisodesGrid';
import Testimonials from './components/Testimonials';
import Quote from './components/Quote';
import Hosts from './components/Hosts';
import About from './components/About';
import Footer from './components/Footer';
import RonConwaySeries from './components/RonConwaySeries';
import EpisodesPage from './components/EpisodesPage';
import { episodesData } from './types/episodes';
import './App.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'episodes'>('home');

  // Handle URL-based routing
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/episodes') {
        setCurrentPage('episodes');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    // Listen for popstate events (back/forward buttons)
    window.addEventListener('popstate', handleRouteChange);
    
    // Check initial route
    handleRouteChange();

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleViewAllEpisodes = () => {
    setCurrentPage('episodes');
    window.history.pushState({}, '', '/episodes');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'episodes') {
    return <EpisodesPage episodes={episodesData} />;
  }

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <EpisodesGrid 
        episodes={episodesData} 
        showAll={false}
        onViewAll={handleViewAllEpisodes}
      />
      <RonConwaySeries episodes={episodesData} />
      <Testimonials />
      <Hosts />
      <About />
      <Quote />
      <Footer />
    </div>
  );
};

export default App;
