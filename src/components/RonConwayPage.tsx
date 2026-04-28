import React, { useEffect, useMemo } from 'react';
import { Episode } from '../types/episodes';
import Navigation from './Navigation';
import Footer from './Footer';

interface RonConwayPageProps {
  episodes: Episode[];
}

const RON_CONWAY_SERIES_ORDER = [
  'ron-conway-s3',
  'ron-conway-part-2',
  'ron-conway-part-3',
  'ron-conway-part-4',
  'ron-conway-svb',
];

const RonConwayPage: React.FC<RonConwayPageProps> = ({ episodes }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ronConwayEpisodes = useMemo(() => {
    const filtered = episodes.filter(ep => ep.id.startsWith('ron-conway'));
    return filtered.sort(
      (a, b) =>
        RON_CONWAY_SERIES_ORDER.indexOf(a.id) -
        RON_CONWAY_SERIES_ORDER.indexOf(b.id)
    );
  }, [episodes]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="episodes-hero-section">
          <div className="episodes-hero-content">
            <div className="episodes-hero-text">
              <h1 className="episodes-hero-title">
                Ron Conway Special Series
              </h1>
              <p className="episodes-hero-description">
                Our multi-part conversation with legendary investor Ron Conway,
                tracing his journey through the defining moments of Silicon
                Valley history.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200">
              {ronConwayEpisodes.map((episode, index) => (
                <div
                  key={episode.id}
                  className={`flex flex-col md:flex-row gap-6 py-8 ${
                    index !== ronConwayEpisodes.length - 1
                      ? 'border-b border-gray-200'
                      : ''
                  } hover:bg-gray-50 transition-colors duration-200`}
                >
                  <div className="md:w-48 flex-shrink-0">
                    <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={
                          episode.image ||
                          'images/episode-covers/TSR-primary-cover-art.jpg'
                        }
                        alt={episode.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (
                            target.src !==
                            'images/episode-covers/TSR-primary-cover-art.jpg'
                          ) {
                            target.src =
                              'images/episode-covers/TSR-primary-cover-art.jpg';
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {episode.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-4">
                          {episode.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Season {episode.season}</span>
                          {episode.date && <span>{episode.date}</span>}
                          {episode.duration && <span>{episode.duration}</span>}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        {episode.hasTranscript && episode.transcriptUrl && (
                          <a
                            href={episode.transcriptUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-small btn-small-secondary"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Transcript
                          </a>
                        )}
                        {episode.hasAudio && episode.audioUrl && (
                          <a
                            href={episode.audioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-small btn-small-primary"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Listen now
                          </a>
                        )}
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

export default RonConwayPage;
