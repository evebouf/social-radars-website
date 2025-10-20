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
            {episode.hasTranscript && episode.transcriptUrl && (
              <a 
                href={episode.transcriptUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-transcript"
              >
                Transcript
              </a>
            )}
            {episode.hasAudio && episode.audioUrl && (
              <a 
                href={episode.audioUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-small btn-small-primary episode-listen-btn"
              >
                <span>Listen now</span>
                <svg className="episode-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
