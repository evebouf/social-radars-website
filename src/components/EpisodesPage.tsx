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
        {/* Page Header */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">
                All Episodes
              </h1>
              
              {/* Season Filter Pills */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 px-4">
                <button
                  onClick={() => setSelectedSeason('all')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedSeason === 'all'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Seasons
                </button>
                {seasons.map(season => (
                  <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedSeason === season
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
