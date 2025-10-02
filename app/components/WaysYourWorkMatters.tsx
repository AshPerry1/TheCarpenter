import React from 'react';
import VerseChip from './VerseChip';

const ways = [
  {
    title: 'Work as Worship',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L7 4z" />
      </svg>
    ),
    content: 'We do our jobs "as for the Lord," not merely for human approval. Whether you're coding software, teaching children, or driving a truck, your work is an act of worship when done for Christ.',
    verse: 'Col 3:23–24'
  },
  {
    title: 'Work as Witness',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    content: 'Excellence, honesty, and love in our work adorn the gospel. When we work with integrity and serve others well, we put the character of Christ on display before a watching world.',
    verse: 'Matt 5:16; 1 Thes 4:11–12'
  },
  {
    title: 'Work as Service',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    content: 'Your vocation serves your neighbor. Through our everyday work we love others by meeting their needs—providing food, shelter, healing, education, transportation, and more.',
    verse: 'WLC Q141'
  },
  {
    title: 'Work as Eternal Investment',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: 'God sees and rewards your faithfulness. Your labor "in the Lord is not in vain." What you do in Christ's name and for His glory has eternal significance and will be remembered.',
    verse: 'Heb 6:10; 1 Cor 15:58'
  }
];

export default function WaysYourWorkMatters() {
  return (
    <section className="py-16 md:py-24 bg-linen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-cinzel text-3xl md:text-4xl text-navy text-center mb-4">
          Four Ways Your Work Matters
        </h2>
        <p className="text-center text-graphite/70 max-w-2xl mx-auto mb-12">
          Your job is not just a paycheck—it has profound spiritual significance
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {ways.map((way, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-gold mb-4">
                {way.icon}
              </div>
              <h3 className="font-cinzel text-xl text-navy mb-3">{way.title}</h3>
              <p className="text-graphite leading-relaxed mb-4">
                {way.content}
              </p>
              <VerseChip reference={way.verse} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

