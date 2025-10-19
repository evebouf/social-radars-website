import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-16" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">The Social Radars</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Jessica Livingston and Carolynn Levy sit with Silicon Valley's most successful founders to uncover the real stories of how they did it.
            </p>
            <a href="https://pod.link/1677066062" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-3 inline-block">
              Listen Now
            </a>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#episodes" className="text-gray-300 hover:text-red-400 transition-colors">
                  Episodes
                </a>
              </li>
              <li>
                <a href="#hosts" className="text-gray-300 hover:text-red-400 transition-colors">
                  Meet the Hosts
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
          
          {/* Listen On */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Listen On</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  Spotify
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  Google Podcasts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 The Social Radars. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
