import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EpisodesGrid from './components/EpisodesGrid';
import Testimonials from './components/Testimonials';
import Quote from './components/Quote';
import Hosts from './components/Hosts';
import About from './components/About';
import Footer from './components/Footer';
import EpisodesPage from './components/EpisodesPage';
import { episodesData } from './types/episodes';
import './App.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'episodes'>('home');

  const handleViewAllEpisodes = () => {
    setCurrentPage('episodes');
    // Scroll to top when navigating to episodes page
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
      <Testimonials />
      <Hosts />
      <About />
      <Quote />
      <Footer />
    </div>
  );
};

export default App;
