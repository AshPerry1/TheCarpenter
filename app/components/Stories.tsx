import React from 'react';

const testimonies = [
  {
    name: 'Sarah Chen',
    occupation: 'Software Engineer',
    quote: 'I used to think my faith and my code were separate. Now I see every bug fix, every feature, every code review as an opportunity to serve my team and honor God.',
    location: 'San Francisco, CA'
  },
  {
    name: 'Marcus Johnson',
    occupation: 'Truck Driver',
    quote: 'Those long hauls used to feel meaningless. Now I pray for the families who will receive the goods I deliver. My route is a mission field.',
    location: 'Dallas, TX'
  },
  {
    name: 'Emily Rodriguez',
    occupation: 'Elementary Teacher',
    quote: 'Every lesson plan is an act of love for my students. I'm not just teaching math—I'm imaging God as I help His image-bearers flourish.',
    location: 'Phoenix, AZ'
  }
];

export default function Stories() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-cinzel text-3xl md:text-4xl text-navy text-center mb-4">
          Stories from the Field
        </h2>
        <p className="text-center text-graphite/70 max-w-2xl mx-auto mb-12">
          Real people seeing their everyday work as worship
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonies.map((testimony, index) => (
            <div 
              key={index}
              className="bg-linen p-6 rounded-lg"
            >
              <div className="text-gold text-4xl mb-4">"</div>
              <p className="text-graphite italic leading-relaxed mb-6">
                {testimony.quote}
              </p>
              <div className="border-t border-olive/20 pt-4">
                <p className="font-semibold text-navy">{testimony.name}</p>
                <p className="text-sm text-graphite/70">{testimony.occupation}</p>
                <p className="text-xs text-graphite/50 mt-1">{testimony.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/stories" 
            className="text-navy underline font-medium hover:text-gold transition-colors"
          >
            Read more stories →
          </a>
        </div>
      </div>
    </section>
  );
}

