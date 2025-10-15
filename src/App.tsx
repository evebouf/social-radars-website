import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EpisodesGrid from './components/EpisodesGrid';
import Quote from './components/Quote';
import Hosts from './components/Hosts';
import About from './components/About';
import Footer from './components/Footer';
import { episodesData } from './types/episodes';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <EpisodesGrid episodes={episodesData} />
      <Quote />
      <Hosts />
      <About />
      <Footer />
    </div>
  );
};

export default App;
