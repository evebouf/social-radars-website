import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-300 flex justify-between items-center h-16 ${
          isScrolled 
            ? 'mx-6 mt-2 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg px-6' 
            : 'mt-6'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0 ml-8">
            <a href="#" className="text-xl font-bold">
              <span className={`font-clash-display ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                The Social Radars
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#episodes" 
              className={`font-medium transition-colors duration-200 hover:text-red-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('episodes');
              }}
            >
              Episodes
            </a>
            <a 
              href="#hosts" 
              className={`font-medium transition-colors duration-200 hover:text-red-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hosts');
              }}
            >
              Meet the Hosts
            </a>
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm">
              Listen Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-red-600' 
                  : 'text-white hover:text-red-200'
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              <a 
                href="#episodes" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('episodes');
                }}
              >
                Episodes
              </a>
              <a 
                href="#hosts" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hosts');
                }}
              >
                Meet the Hosts
              </a>
              <div className="px-3 py-2">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                  Listen Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
