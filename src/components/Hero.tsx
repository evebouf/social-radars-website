import React from 'react';

const Hero: React.FC = () => {
  const scrollToEpisodes = () => {
    const element = document.getElementById('episodes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-bg hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Come be a fly on the wall
        </h1>
        
        <p className="hero-description">
          Join Jessica Livingston and Carolynn Levy as they sit with Silicon Valley's most successful founders to uncover the real stories of how they did it.
        </p>
        
        <div className="hero-button-container">
          <button 
            className="btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
            onClick={scrollToEpisodes}
          >
            <span className="hero-button-content">
              <span className="hero-button-icon">🎧</span>
              <span>Listen Now</span>
            </span>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <svg className="scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
