import React, { useMemo } from 'react';
import { Episode } from '../types/episodes';
import EpisodeCard from './EpisodeCard';

interface RonConwaySeriesProps {
  episodes: Episode[];
}

const RON_CONWAY_ORDER = [
  'ron-conway-part-4',
  'ron-conway-part-3',
  'ron-conway-part-2',
  'ron-conway-s3',
];

const RonConwaySeries: React.FC<RonConwaySeriesProps> = ({ episodes }) => {
  const ronConwayEpisodes = useMemo(() => {
    const filtered = episodes.filter(ep => ep.id.startsWith('ron-conway'));
    return filtered.sort(
      (a, b) => RON_CONWAY_ORDER.indexOf(a.id) - RON_CONWAY_ORDER.indexOf(b.id)
    );
  }, [episodes]);

  return (
    <section className="episodes-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Ron Conway Special Series</h2>
        </div>
        <div className="episodes-grid">
          {ronConwayEpisodes.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} showTitle />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RonConwaySeries;
