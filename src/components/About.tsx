import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section py-20 bg-gray-50">
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
          <div className="grid grid-cols-3 gap-4">
            {/* Row 1 */}
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/first-batch.jpeg" 
                alt="Y Combinator First Batch" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/carolynn-jessica-female-conference-1.png" 
                alt="Carolynn and Jessica at Female Conference" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/medium_Table_2.jpg" 
                alt="YC Office" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Row 2 */}
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/medium_nutgrimace.jpeg" 
                alt="Early YC Days" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/medium_Screen_Shot_2018-06-29_at_5.17.12_PM.png" 
                alt="YC History" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="images/how-it-started/medium_1400-2007-02-27.jpeg" 
                alt="Early YC Batch" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
