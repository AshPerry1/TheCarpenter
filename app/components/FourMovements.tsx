import React from 'react';
import VerseChip from './VerseChip';

const movements = [
  {
    title: 'Creation',
    content: 'God made us to reflect His glory in all of life—including work. Every task, every skill, every job is an opportunity to image our Creator. Work was given before the Fall; it is not a curse but a calling.',
    verse: 'Gen 1:26–28; 1 Cor 10:31'
  },
  {
    title: 'Fall',
    content: 'Sin broke our relationship with God, others, and work itself. Toil, futility, and frustration entered the workplace. We often work for the wrong reasons—pride, greed, or mere survival—rather than for God's glory.',
    verse: 'Gen 3; Rom 8:20–22'
  },
  {
    title: 'Redemption',
    content: 'Jesus lived the perfect life we couldn't live, died the death we deserved, and rose to give us new life. Sinners are saved by grace through faith—not by our works, but for good works.',
    verse: 'Eph 2:8–9; Rom 10:9–10'
  },
  {
    title: 'Restoration',
    content: 'In Christ we are God's "workmanship," recreated for good works He prepared in advance. Our labor in the Lord is not in vain. God is making all things new—including our work.',
    verse: 'Eph 2:10; 1 Cor 15:58'
  }
];

export default function FourMovements() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-cinzel text-3xl md:text-4xl text-navy text-center mb-4">
          The Gospel in Four Movements
        </h2>
        <p className="text-center text-graphite/70 max-w-2xl mx-auto mb-12">
          The story of the Bible—and your work—in four acts
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {movements.map((movement, index) => (
            <div 
              key={index}
              className="bg-linen p-8 rounded-lg border-l-4 border-gold"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-cinzel text-4xl text-gold font-bold">{index + 1}</span>
                <h3 className="font-cinzel text-2xl text-navy">{movement.title}</h3>
              </div>
              <p className="text-graphite leading-relaxed mb-4">
                {movement.content}
              </p>
              <VerseChip reference={movement.verse} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

