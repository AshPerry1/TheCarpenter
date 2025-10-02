import React from 'react';
import Stories from '../components/Stories';

const moreStories = [
  {
    name: 'David Park',
    occupation: 'Accountant',
    quote: 'I used to see numbers as cold and lifeless. Now I see my work helping businesses steward their resources wisely as a way to serve the common good and honor God with truth and precision.',
    location: 'Atlanta, GA'
  },
  {
    name: 'Jennifer Williams',
    occupation: 'Nurse',
    quote: 'Every patient I care for is made in God's image. When I tend to their wounds and ease their pain, I'm showing the compassion of Christ. My work is ministry.',
    location: 'Nashville, TN'
  },
  {
    name: 'Carlos Martinez',
    occupation: 'Restaurant Manager',
    quote: 'Hospitality is holy work. Creating a place where people feel welcomed and fed—body and soul—is a picture of the kingdom. I'm serving God's image-bearers every shift.',
    location: 'Chicago, IL'
  },
  {
    name: 'Rachel Kim',
    occupation: 'Graphic Designer',
    quote: 'Creativity reflects the Creator. Every design I make—whether it's a logo or a poster—is an opportunity to bring beauty and clarity into the world. That's a form of worship.',
    location: 'Portland, OR'
  },
  {
    name: 'James Thompson',
    occupation: 'Construction Foreman',
    quote: 'Building homes for families to live in reminds me that Jesus was a carpenter. I'm providing shelter and safety—basic human needs. God sees that work, and it matters.',
    location: 'Denver, CO'
  },
  {
    name: 'Lisa Nguyen',
    occupation: 'Physical Therapist',
    quote: 'Helping people regain mobility and strength is restoration work. It's a glimpse of the ultimate restoration God is doing in all creation. I get to participate in that.',
    location: 'Seattle, WA'
  }
];

export default function StoriesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy text-linen py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-cinzel text-4xl md:text-5xl mb-6">
            Stories from the Field
          </h1>
          <p className="text-xl text-linen/80 leading-relaxed max-w-3xl mx-auto">
            Real people from all walks of life discovering that their everyday work is worship. These are their stories.
          </p>
        </div>
      </section>

      {/* Main Stories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreStories.map((testimony, index) => (
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
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cinzel text-3xl text-navy mb-6">
            Share Your Story
          </h2>
          <p className="text-navy/80 mb-8 max-w-2xl mx-auto">
            How has seeing your work as worship changed your perspective? We'd love to hear from you and share your story to encourage others.
          </p>
          <a 
            href="mailto:stories@thecarpenter.com?subject=My Work Story"
            className="inline-block bg-navy text-linen px-8 py-4 rounded-xl font-semibold hover:bg-navy/90 transition-colors"
          >
            Submit Your Story
          </a>
        </div>
      </section>
    </div>
  );
}

