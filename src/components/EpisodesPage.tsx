import React, { useEffect } from 'react';
import { Episode } from '../types/episodes';
import Navigation from './Navigation';
import Footer from './Footer';

interface EpisodesPageProps {
  episodes: Episode[];
}

const EpisodesPage: React.FC<EpisodesPageProps> = ({ episodes }) => {
  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            </div>
          </div>
        </section>
        

        {/* All Episodes List */}
        <section className="pt-10 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200">
              {episodes.map((episode, index) => (
                <div key={episode.id} className={`flex flex-col md:flex-row gap-6 py-8 ${index !== episodes.length - 1 ? 'border-b border-gray-200' : ''} hover:bg-gray-50 transition-colors duration-200`}>
                  {/* Episode Image */}
                  <div className="md:w-48 flex-shrink-0">
                    <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden">
                      {episode.image ? (
                        <img
                          src={episode.image}
                          alt={episode.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`w-full h-full flex items-center justify-center ${episode.image ? 'hidden' : ''}`}>
                        <div className="text-center text-gray-500">
                          <div className="text-4xl mb-2">🎙️</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Episode Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{episode.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-4">{episode.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Season {episode.season}</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={episode.transcriptUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-small btn-small-secondary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Transcript
                        </a>
                        <a
                          href={episode.audioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-small btn-small-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Listen now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EpisodesPage;
