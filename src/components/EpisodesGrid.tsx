import React, { useMemo } from 'react';
import { Episode } from '../types/episodes';
import EpisodeCard from './EpisodeCard';

interface EpisodesGridProps {
  episodes: Episode[];
  showAll?: boolean;
  onViewAll?: () => void;
}

const EpisodesGrid: React.FC<EpisodesGridProps> = ({ episodes, showAll = false, onViewAll }) => {
  // Show latest episodes sorted by season (newest first)
  const filteredEpisodes = useMemo(() => {
    let episodesToShow = episodes.sort((a, b) => {
      if (a.season !== b.season) {
        return b.season - a.season; // Newer seasons first
      }
      return 0; // Keep original order within season
    });
    
    // If not showing all episodes, limit to last 6
    if (!showAll) {
      episodesToShow = episodesToShow.slice(0, 6);
    }
    
    return episodesToShow;
  }, [episodes, showAll]);

  return (
    <section id="episodes" className="episodes-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showAll && (
          <div className="episodes-header">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Latest Episodes</h2>
            </div>
          </div>
        )}
        
        <div className="episodes-grid">
          {filteredEpisodes.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} showDescription={showAll} />
          ))}
        </div>
        
        {!showAll && onViewAll && (
          <div className="text-center mt-12">
            <button 
              className="btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
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
