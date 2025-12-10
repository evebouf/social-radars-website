import React, { useState, useEffect } from 'react';

// Navigation component for The Social Radars podcast
const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero') || document.querySelector('.hero-section');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      
      // Only show background when we've scrolled past the hero section
      setIsScrolled(scrollPosition > heroHeight - 100);
    };

    const handleRouteChange = () => {
      // Route change handler - currently not needed
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleRouteChange);
    
    // Check initial route
    handleRouteChange();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    } else {
      // If element doesn't exist (e.g., on episodes page), navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 pl-4">
            <a href="/" className="text-lg md:text-xl font-bold">
              <span className={`font-clash-display ${
                isScrolled ? 'text-rose-600' : 'text-white drop-shadow-lg'
              }`}>
                The Social Radars
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="/episodes" 
              className={`font-medium px-2 py-2 transition-all duration-200 ${
                isScrolled ? 'text-rose-600 hover:opacity-70' : 'text-white hover:opacity-80'
              }`}
            >
              All Episodes
            </a>
            <a 
              href="#hosts" 
              className={`font-medium px-2 py-2 transition-all duration-200 ${
                isScrolled ? 'text-rose-600 hover:opacity-70' : 'text-white hover:opacity-80'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hosts');
              }}
            >
              Meet the Hosts
            </a>
            <a 
              href="https://substack.com/@thesocialradars" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`font-medium px-2 py-2 transition-all duration-200 ${
                isScrolled ? 'text-rose-600 hover:opacity-70' : 'text-white hover:opacity-80'
              }`}
            >
              Substack
            </a>
            <a 
              href="https://www.youtube.com/@TheSocialRadars" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-2 py-2 transition-all duration-200 ${
                isScrolled ? 'text-rose-600 hover:opacity-70' : 'text-white hover:opacity-80'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/jesslivingston" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-2 py-2 transition-all duration-200 ${
                isScrolled ? 'text-rose-600 hover:opacity-70' : 'text-white hover:opacity-80'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 300 300.251" fill="currentColor">
                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
              </svg>
            </a>
            <a href="https://pod.link/1677066062" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200">
              Listen Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'text-rose-600' 
                  : 'text-white drop-shadow-lg'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white/90 backdrop-blur-md shadow-lg rounded-3xl mx-4 mt-2">
              <a 
                href="/episodes" 
                className="block px-4 py-3 text-lg font-medium text-rose-600 hover:text-rose-700 transition-all duration-200"
              >
                All Episodes
              </a>
              <a 
                href="#hosts" 
                className="block px-4 py-3 text-lg font-medium text-rose-600 hover:text-rose-700 transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hosts');
                }}
              >
                Meet the Hosts
              </a>
              <a 
                href="https://substack.com/@thesocialradars" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-3 text-lg font-medium text-rose-600 hover:text-rose-700 transition-all duration-200"
              >
                Substack
              </a>
              <a 
                href="https://www.youtube.com/@TheSocialRadars" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 text-lg font-medium text-rose-600 hover:text-rose-700 transition-all duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a 
                href="https://x.com/jesslivingston" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 text-lg font-medium text-rose-600 hover:text-rose-700 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 300 300.251" fill="currentColor" className="mr-2">
                  <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
                </svg>
                Follow on X
              </a>
              <div className="px-4 py-2">
                <a href="https://pod.link/1677066062" target="_blank" rel="noopener noreferrer" className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-200 inline-block text-center">
                  Listen Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
