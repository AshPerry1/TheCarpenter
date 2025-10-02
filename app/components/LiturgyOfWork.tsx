import React from 'react';
import VerseChip from './VerseChip';

const practices = [
  {
    title: 'Begin with Thanks',
    description: 'Start your workday by acknowledging that this shift, these tasks, and this opportunity belong to the Lord.',
    prompt: '"This shift is Yours, Lord."',
    verse: 'Col 3:23–24'
  },
  {
    title: 'Name Your Neighbor',
    description: 'Pick one coworker or customer to quietly serve today. Look for a small way to love them well.',
    prompt: 'Who will I serve today?',
    verse: 'Matt 5:16'
  },
  {
    title: 'Integrity Check',
    description: 'Commit to telling the truth in emails, estimates, and time tracking. Let your yes be yes.',
    prompt: 'Will I be honest in all things today?',
    verse: 'WLC Q141'
  },
  {
    title: 'Excellence Sprint',
    description: 'Choose one task to do beautifully—even if no one else notices. Do it as unto Christ.',
    prompt: 'What one thing will I do with excellence?',
    verse: 'Heb 6:10'
  },
  {
    title: 'Witness with Wisdom',
    description: 'Be ready to answer questions about your faith with gentleness and respect when the opportunity arises.',
    prompt: 'Am I ready to give an answer?',
    verse: '1 Pet 3:15'
  },
  {
    title: 'Close in Rest',
    description: 'At day's end, release outcomes to God. Trust that your labor in the Lord is not in vain.',
    prompt: '"It is finished. My work is in Your hands."',
    verse: '1 Cor 15:58'
  }
];

export default function LiturgyOfWork() {
  return (
    <section className="py-16 md:py-24 bg-navy text-linen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-cinzel text-3xl md:text-4xl text-center mb-4">
          Monday at 9am: A Liturgy of Work
        </h2>
        <p className="text-center text-linen/70 max-w-2xl mx-auto mb-12">
          Six micro-practices to bring worship into your workweek
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div 
              key={index}
              className="bg-linen/5 backdrop-blur-sm p-6 rounded-lg border border-gold/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-cinzel text-3xl text-gold font-bold">{index + 1}</span>
                <h3 className="font-cinzel text-lg">{practice.title}</h3>
              </div>
              <p className="text-linen/80 leading-relaxed mb-3 text-sm">
                {practice.description}
              </p>
              <p className="italic text-gold/90 text-sm mb-3">
                {practice.prompt}
              </p>
              <div className="text-linen/60">
                <VerseChip reference={practice.verse} className="text-linen/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

