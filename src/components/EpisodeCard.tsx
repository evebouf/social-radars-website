import React from 'react';
import { Episode } from '../types/episodes';

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const imageClass = episode.imagePosition === 'top' ? 'episode-image-top' : '';
  
  // Determine season display logic
  const getSeasonDisplay = () => {
    if (episode.seasonLabel === 'Founder Mode') {
      return null; // Don't show season for Founder Mode
    }
    if (episode.seasonLabel) {
      return episode.seasonLabel; // Use custom label if provided
    }
    return `S${episode.season}`; // Use S-Z-N format for regular seasons
  };
  
  const seasonDisplay = getSeasonDisplay();

  return (
    <div className="episode-card cursor-pointer" data-season={episode.season}>
      <div className="episode-image relative overflow-hidden">
        <img 
          src={episode.image} 
          alt={episode.name} 
          className={imageClass}
        />
        {/* Glass play button overlay */}
        <div className="episode-glass-overlay">
          <div className="episode-glass-play">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="episode-content">
        <h3 className="episode-name">{episode.name}</h3>
        <p className="episode-title">{episode.title}</p>
        <p className="episode-description">{episode.description}</p>
        <div className="episode-footer">
          {seasonDisplay && (
            <span className="episode-season">{seasonDisplay}</span>
          )}
          <div className="episode-buttons">
            {episode.hasTranscript && (
              <button className="btn-transcript">Transcript</button>
            )}
            {episode.hasAudio && (
              <button className="btn-small btn-small-primary">
                Listen now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
