import React from 'react';

const Quote: React.FC = () => {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <blockquote className="text-3xl md:text-4xl font-bold text-white leading-relaxed mb-8">
            "I'd try to pick up on all these little social cues—are these people committed, do they care, are they going to quit their job? That's why they called me the Social Radar."
          </blockquote>
          <div className="text-xl font-semibold text-gray-300">
            — Jessica Livingston
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
