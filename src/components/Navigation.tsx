import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEpisodesPage, setIsEpisodesPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero') || document.querySelector('.hero-section');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      
      // Only show background when we've scrolled past the hero section
      setIsScrolled(scrollPosition > heroHeight - 100);
    };

    const handleRouteChange = () => {
      const path = window.location.pathname;
      setIsEpisodesPage(path === '/episodes');
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
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-300 flex justify-between items-center h-16 rounded-2xl ${
          isScrolled
            ? 'mx-4 mt-2 bg-white/95 backdrop-blur-sm shadow-sm px-4 border border-white' 
            : 'mt-4 mx-4 px-4 border border-white'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-lg md:text-xl font-bold">
              <span className={`font-clash-display ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                The Social Radars
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/episodes" 
              className={`font-medium px-3 py-2 rounded-full border border-transparent hover:border-red-600 ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              All Episodes
            </a>
            <a 
              href="#hosts" 
              className={`font-medium px-3 py-2 rounded-full border border-transparent hover:border-red-600 ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hosts');
              }}
            >
              Meet the Hosts
            </a>
            <a 
              href="https://substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`font-medium px-3 py-2 rounded-full border border-transparent hover:border-red-600 ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              Subscribe
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-all duration-200 hover:opacity-80 ${
                isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 300 300.251" fill="currentColor">
                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
              </svg>
            </a>
            <a href="https://pod.link/1677066062" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-200">
              Listen Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-600' 
                  : 'text-white'
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
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-md border-t border-white/20 shadow-lg mx-4 rounded-b-2xl">
              <a 
                href="/episodes" 
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 border border-transparent hover:border-red-600 rounded-full"
              >
                All Episodes
              </a>
              <a 
                href="#hosts" 
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 border border-transparent hover:border-red-600 rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hosts');
                }}
              >
                Meet the Hosts
              </a>
              <a 
                href="https://substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 border border-transparent hover:border-red-600 rounded-full"
              >
                Subscribe
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 text-lg font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
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
