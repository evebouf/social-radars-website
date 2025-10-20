import React, { useEffect, useState, useMemo } from 'react';
import { Episode } from '../types/episodes';
import EpisodesGrid from './EpisodesGrid';
import Navigation from './Navigation';
import Footer from './Footer';

interface EpisodesPageProps {
  episodes: Episode[];
}

const EpisodesPage: React.FC<EpisodesPageProps> = ({ episodes }) => {
  const [selectedSeason, setSelectedSeason] = useState<number | 'all'>('all');

  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique seasons from episodes
  const seasons = useMemo(() => {
    const uniqueSeasons = [...new Set(episodes.map(ep => ep.season))].sort((a, b) => b - a);
    return uniqueSeasons;
  }, [episodes]);

  // Filter episodes based on selected season
  const filteredEpisodes = useMemo(() => {
    if (selectedSeason === 'all') {
      return episodes.sort((a, b) => {
        if (a.season !== b.season) {
          return b.season - a.season; // Newer seasons first
        }
        return 0; // Keep original order within season
      });
    }
    return episodes.filter(ep => ep.season === selectedSeason);
  }, [episodes, selectedSeason]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="episodes-hero-section">
          <div className="episodes-hero-content">
            <div className="episodes-hero-text">
              <h1 className="episodes-hero-title">
                All Episodes
              </h1>
              {/* <p className="episodes-hero-description">
                Complete archive of conversations with Silicon Valley's most successful founders
              </p> */}
            </div>
          </div>
        </section>
        
        {/* Season Filter Section */}
        <section className="py-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Season Filter Pills */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 px-4">
                <button
                  onClick={() => setSelectedSeason('all')}
                  className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 ${
                    selectedSeason === 'all'
                      ? 'bg-red-600 text-white'
                      : 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                  }`}
                >
                  All Seasons
                </button>
                {seasons.map(season => (
                  <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 ${
                      selectedSeason === season
                        ? 'bg-red-600 text-white'
                        : 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    Season {season}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Episodes Grid */}
        <EpisodesGrid episodes={filteredEpisodes} showAll={true} />
      </main>
      
      <Footer />
    </div>
  );
};

export default EpisodesPage;
