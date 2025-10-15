import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Carolynn and Jessica find a way to get guests to let down their guard and share in great storytelling. Becoming one of my faves.",
      author: "Rich Ri.",
      source: "Apple Podcasts",
      rating: 5
    },
    {
      quote: "Reliving some of the glory days of YC and the founding of these giant names in startup world through this podcast gives me so much nostalgia and joy.",
      author: "Prashanth S.",
      source: "Apple Podcasts",
      rating: 5
    },
    {
      quote: "These are the best founder stories on the web because they're unvarnished and come from conversations among people who already know each other.",
      author: "ndkgosncksk",
      source: "Apple Podcasts",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return '★'.repeat(rating);
  };

  return (
    <section className="testimonials-section py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What the listeners say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-6 rounded-lg shadow-sm">
              <div className="text-6xl text-gray-300 font-serif leading-none mb-4">"</div>
              <blockquote className="text-lg text-gray-700 mb-4 leading-relaxed">
                {testimonial.quote}
              </blockquote>
              <div className="text-sm text-gray-600 mb-2">
                <span className="font-medium">{testimonial.author}</span>
                <span className="mx-1">•</span>
                <span>{testimonial.source}</span>
              </div>
              <div className="text-yellow-500 text-lg">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
