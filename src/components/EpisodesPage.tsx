import React from 'react';
import { Episode } from '../types/episodes';
import EpisodesGrid from './EpisodesGrid';
import Navigation from './Navigation';
import Footer from './Footer';

interface EpisodesPageProps {
  episodes: Episode[];
  onBackToHome: () => void;
}

const EpisodesPage: React.FC<EpisodesPageProps> = ({ episodes, onBackToHome }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                All Episodes
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Complete archive of The Social Radars conversations
              </p>
              <button 
                onClick={onBackToHome}
                className="btn-secondary"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </section>

        {/* All Episodes Grid */}
        <EpisodesGrid episodes={episodes} showAll={true} />
      </main>
      
      <Footer />
    </div>
  );
};

export default EpisodesPage;
