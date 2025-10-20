import React from 'react';

const Hosts: React.FC = () => {
  return (
    <section id="hosts" className="hosts-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Meet the Hosts</h2>
        </div>
        
        <div className="space-y-20 mb-20">
          {/* Jessica Livingston */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Left side on desktop */}
            <div className="flex-shrink-0 lg:order-1">
              <div className="w-96 h-96 overflow-hidden">
                <img 
                  src="images/hosts/jessica-headshot.png" 
                  alt="Jessica Livingston" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Bio - Right side on desktop */}
            <div className="flex-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Jessica Livingston</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Jessica Livingston is one of the founders of Y Combinator, the first startup accelerator, which since 2005 has funded over 4000 companies. It was there that she got the nickname "the social radar" for her insights into the characters of successful founders. She is also the author of one of the best selling books about startups, <em>Founders at Work</em>. She lives in England with her husband and two sons, and enjoys <a href="https://foundersatwork.posthaven.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 underline">writing about startups</a> whenever she can find time.
              </p>
            </div>
          </div>

          {/* Carolynn Levy */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Left side on desktop */}
            <div className="flex-shrink-0 lg:order-1">
              <div className="w-96 h-96 overflow-hidden">
                <img 
                  src="images/hosts/carolynn-headshot.png" 
                  alt="Carolynn Levy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Bio - Right side on desktop */}
            <div className="flex-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Carolynn Levy</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Carolynn Levy is Managing Director, Chief Legal Officer and head of the People Operations team at Y Combinator. During her 25-year legal career, Carolynn has helped thousands of startup founders with legal and business issues. She is known for creating the Safe, an open-sourced financing document that simplified investing in early stage companies.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                Carolynn got her BA from UCLA and her JD from University of San Francisco. She joined Wilson Sonsini Goodrich and Rosati right after law school and stayed for 14 years, doing corporate and securities and M&A work. She lives in the SF Bay Area with her husband and is almost an empty-nester. She loves her two chihuahua rescues more than could be considered normal.
              </p>
            </div>
          </div>
        </div>

        {/* Listen Now CTA */}
        <div className="text-center">
          <a href="https://pod.link/1677066062" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
            Listen Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hosts;
