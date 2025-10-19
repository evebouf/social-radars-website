import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Social Radars
            </h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto mb-8"></div>
          </div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Jessica and Carolynn see potential in founders before anyone else does. 
            They've backed world-changing companies when they were just ideas in someone's dorm room.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
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
