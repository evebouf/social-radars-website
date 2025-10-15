import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Social Radars
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-400 mx-auto mb-8"></div>
          </div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Jessica and Carolynn see potential in founders before anyone else does. 
            They've backed world-changing companies when they were just ideas in someone's dorm room.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-amber-300 rounded-full mr-2"></div>
                <h3 className="text-2xl font-bold text-gray-900">The Art of Seeing Potential Before Anyone Else</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                While others see college dropouts and crazy ideas, they see the patterns that predict success.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 lg:col-span-2">
            {/* Haphazard scrapbook-style photo gallery */}
            <div className="relative h-[600px] w-full">
              {/* First Batch - Slightly off-center top */}
              <div className="absolute top-4 left-6 w-72 h-52 transform rotate-[-2deg]">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-white">
                  <img 
                    src="images/episodes/first-batch.jpeg" 
                    alt="Y Combinator First Batch" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Young Drew - Overlapping top right */}
              <div className="absolute top-12 right-8 w-52 h-52 transform rotate-[4deg] z-10">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-white bg-gray-50">
                  <img 
                    src="images/episodes/young-drew.jpg" 
                    alt="Young Drew Houston" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Young Patrick Collison - Middle left, slightly overlapping */}
              <div className="absolute top-32 left-16 w-52 h-52 transform rotate-[-3deg] z-20">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-white bg-gray-50">
                  <img 
                    src="images/episodes/young-patrick-collison.jpg" 
                    alt="Young Patrick Collison" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Steve H - Bottom left, scattered */}
              <div className="absolute bottom-8 left-2 w-56 h-56 transform rotate-[2deg] z-15">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-white bg-gray-50">
                  <img 
                    src="images/episodes/steve-h.jpg" 
                    alt="Young Steve Huffman" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Young Tracy - Off-center bottom */}
              <div className="absolute bottom-4 left-64 w-48 h-64 transform rotate-[-1deg] z-25">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-white bg-gray-50">
                  <img 
                    src="images/episodes/young-tracy.jpeg" 
                    alt="Young Tracy Young" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Young Briana - Bottom right, angled */}
              <div className="absolute bottom-12 right-4 w-48 h-56 transform rotate-[3deg] z-30">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-white bg-gray-50">
                  <img 
                    src="images/episodes/young-briana.png" 
                    alt="Young Briana" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
