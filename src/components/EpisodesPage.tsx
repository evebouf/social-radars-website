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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                All Episodes
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Complete archive of conversations with Silicon Valley's most successful founders. 
                From the early days of Y Combinator to the latest insights on building companies.
              </p>
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
