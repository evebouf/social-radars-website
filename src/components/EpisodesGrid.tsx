import React, { useState, useMemo } from 'react';
import { Episode } from '../types/episodes';
import EpisodeCard from './EpisodeCard';

interface EpisodesGridProps {
  episodes: Episode[];
  showAll?: boolean;
  onViewAll?: () => void;
}

const EpisodesGrid: React.FC<EpisodesGridProps> = ({ episodes, showAll = false, onViewAll }) => {
  const [selectedSeason, setSelectedSeason] = useState<string>('all');

  // Get unique seasons for filter buttons
  const seasons = useMemo(() => {
    const uniqueSeasons = [...new Set(episodes.map(ep => ep.season))];
    return uniqueSeasons.sort((a, b) => b - a); // Newest seasons first
  }, [episodes]);

  // Filter episodes based on selected season
  const filteredEpisodes = useMemo(() => {
    let episodesToShow = episodes;
    
    if (selectedSeason === 'all') {
      episodesToShow = episodes.sort((a, b) => {
        if (a.season !== b.season) {
          return b.season - a.season; // Newer seasons first
        }
        return 0; // Keep original order within season
      });
    } else {
      episodesToShow = episodes
        .filter(episode => episode.season.toString() === selectedSeason)
        .sort((a, b) => {
          if (a.season !== b.season) {
            return b.season - a.season;
          }
          return 0;
        });
    }
    
    // If not showing all episodes, limit to last 6
    if (!showAll) {
      episodesToShow = episodesToShow.slice(0, 6);
    }
    
    return episodesToShow;
  }, [episodes, selectedSeason, showAll]);

  const handleSeasonFilter = (season: string) => {
    setSelectedSeason(season);
  };

  return (
    <section className="episodes-section">
      <div className="episodes-container">
        <div className="episodes-header">
          <h2 className="episodes-title">Featured Episodes</h2>
          <p className="episodes-subtitle">
            Deep conversations with the founders who shaped Silicon Valley
          </p>
          
          {/* Season Filter */}
          <div className="season-filters">
            <button 
              className={`season-filter btn-small ${
                selectedSeason === 'all' 
                  ? 'active btn-small-primary' 
                  : 'season-filter-inactive'
              }`}
              onClick={() => handleSeasonFilter('all')}
            >
              All Seasons
            </button>
            {seasons.map(season => (
              <button
                key={season}
                className={`season-filter btn-small ${
                  selectedSeason === season.toString()
                    ? 'active btn-small-primary'
                    : 'season-filter-inactive'
                }`}
                onClick={() => handleSeasonFilter(season.toString())}
              >
                Season {season}
              </button>
            ))}
          </div>
        </div>
        
        <div className="episodes-grid">
          {filteredEpisodes.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
        
        {!showAll && onViewAll && (
          <div className="text-center mt-12">
            <button 
              className="btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
              onClick={onViewAll}
            >
              View All Episodes
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EpisodesGrid;
