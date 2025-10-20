import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Responsive hero image using picture element */}
      <picture className="hero-bg">
        <source media="(max-width: 767px)" srcSet="/images/jessica-hero-mobile.svg" />
        <img 
          src="/images/jessica-hero-image.png" 
          alt="Jessica Livingston and Carolynn Levy recording The Social Radars podcast"
          className="hero-bg-image"
        />
      </picture>
      
      <div className="hero-content">
        {/* Bottom Left - Headline */}
        <div className="hero-headline-container">
          <h1 className="hero-title">
            Come be a fly on the wall
          </h1>
        </div>
        
        {/* Bottom Right - Description */}
        <div className="hero-description-container">
          <p className="hero-description">
            Join Jessica Livingston and Carolynn Levy as they sit with Silicon Valley's most successful founders to uncover the real stories of how they did it.
          </p>
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
