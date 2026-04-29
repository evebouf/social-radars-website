import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const OgImagePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="episodes-hero-section">
          <div className="episodes-hero-content">
            <div className="episodes-hero-text">
              <h1 className="episodes-hero-title">Open Graph Image</h1>
              <p className="episodes-hero-description">
                Social preview card used when the site is shared on
                X, Facebook, LinkedIn, iMessage, and other platforms.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <img
                src="/og-image.png"
                alt="The Social Radars — hosted by Jessica Livingston & Carolynn Levy"
                className="w-full h-auto block"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="text-sm text-gray-600">
                <div>1200 × 630 · PNG</div>
                <div className="font-mono text-xs mt-1">/og-image.png</div>
              </div>
              <a
                href="/og-image.png"
                download
                className="btn-small btn-small-primary"
              >
                Download image
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OgImagePage;
