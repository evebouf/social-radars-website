import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      id="navbar" 
      className={`navbar ${isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-links">
            <a 
              href="#episodes" 
              className={`nav-link nav-link-base group ${
                isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-200'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('episodes');
              }}
            >
              <span className="nav-link-span">Episodes</span>
              <div className={`underline-effect ${isScrolled ? 'bg-amber-600' : 'bg-amber-200'}`}></div>
            </a>
            <a 
              href="#hosts" 
              className={`nav-link nav-link-base group ${
                isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-200'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hosts');
              }}
            >
              <span className="nav-link-span">Meet the Hosts</span>
              <div className={`underline-effect ${isScrolled ? 'bg-amber-600' : 'bg-amber-200'}`}></div>
            </a>
          </div>
          <button className="btn-small btn-small-primary">
            Listen Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
