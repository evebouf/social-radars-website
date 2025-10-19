import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Carolynn and Jessica find a way to get guests to let down their guard and share in great storytelling. Becoming one of my faves.",
      author: "Rich Ri.",
      rating: 5
    },
    {
      quote: "Reliving some of the glory days of YC and the founding of these giant names in startup world through this podcast gives me so much nostalgia and joy.",
      author: "Prashanth S.",
      rating: 5
    },
    {
      quote: "These are the best founder stories on the web because they're unvarnished and come from conversations among people who already know each other.",
      author: "ndkgosncksk",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return '★'.repeat(rating);
  };

  return (
    <section className="testimonials-section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What the listeners say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className="text-8xl text-gray-900 font-playfair font-bold leading-none mb-6">"</div>
              <blockquote className="text-lg text-gray-800 mb-6 leading-relaxed">
                {testimonial.quote}
              </blockquote>
              <div className="text-base text-gray-700 mb-3 font-medium">
                {testimonial.author}
              </div>
              <div className="text-yellow-500 text-xl">
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
