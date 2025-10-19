import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            How It Started
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A journey through the early days of Silicon Valley's most successful founders.
          </p>
        </div>
        
        {/* Brick wall of pictures */}
        <div className="relative">
          <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Row 1 */}
            <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/first-batch.jpeg" 
                alt="Y Combinator First Batch" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/steve-h.jpg" 
                alt="Young Steve Huffman" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/medium_Table_2.jpg" 
                alt="YC Office" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/medium_nutgrimace.jpeg" 
                alt="Early YC Days" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Row 2 */}
            <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/medium_Screen_Shot_2018-06-29_at_5.17.12_PM.png" 
                alt="YC History" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/medium_1400-2007-02-27.jpeg" 
                alt="Early YC Batch" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-2xl mb-2">📷</div>
                  <div className="text-sm">Placeholder</div>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-2xl mb-2">📷</div>
                  <div className="text-sm">Placeholder</div>
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
