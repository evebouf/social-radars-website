import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EpisodesGrid from './components/EpisodesGrid';
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
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'episodes') {
    return <EpisodesPage episodes={episodesData} onBackToHome={handleBackToHome} />;
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
      <Quote />
      <Hosts />
      <About />
      <Footer />
    </div>
  );
};

export default App;
