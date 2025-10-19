import React from 'react';

const Hosts: React.FC = () => {
  return (
    <section id="hosts" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Hosts</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Jessica Livingston */}
          <div className="bg-gray-50 rounded-3xl  overflow-hidden border border-gray-100">
            <div className="p-10">
              <div className="text-center mb-8">
                <div className="inline-block">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                    <img 
                      src="images/hosts/jessica-livingston.webp" 
                      alt="Jessica Livingston" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Jessica Livingston</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Jessica Livingston is one of the founders of Y Combinator, the first startup accelerator, which since 2005 has funded over 4000 companies. It was there that she got the nickname "the social radar" for her insights into the characters of successful founders. She is also the author of one of the best selling books about startups, Founders at Work. She lives in England with her husband and two sons, and enjoys writing about startups whenever she can find time.
                </p>
              </div>
            </div>
          </div>

          {/* Carolynn Levy */}
          <div className="bg-gray-50 rounded-3xl  overflow-hidden border border-gray-100">
            <div className="p-10">
              <div className="text-center mb-8">
                <div className="inline-block">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                    <img 
                      src="images/hosts/carolynn-levy.webp" 
                      alt="Carolynn Levy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Carolynn Levy</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Carolynn Levy is Managing Director, Chief Legal Officer and head of the People Operations team at Y Combinator. During her 25-year legal career, she has helped thousands of startup founders with legal and business issues. She is known for creating the Safe, an open-sourced financing document that simplified investing in early stage companies. She got her BA from UCLA and JD from University of San Francisco, then spent 14 years at Wilson Sonsini doing corporate and securities work. She lives in the SF Bay Area and loves her two chihuahua rescues more than could be considered normal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Listen Now CTA */}
        <div className="text-center">
          <a href="#" className="btn-primary text-lg px-10 py-4">
            Listen Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hosts;
