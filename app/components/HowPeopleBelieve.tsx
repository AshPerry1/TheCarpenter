import React from 'react';
import VerseChip from './VerseChip';

const steps = [
  {
    title: 'Hear the Gospel',
    content: 'Faith begins with hearing the good news about Jesus Christ—His life, death, and resurrection for sinners.',
    verse: 'Rom 10:17'
  },
  {
    title: 'Be Born of the Spirit',
    content: 'New birth is God's work. The Holy Spirit opens blind eyes and gives spiritual life to those dead in sin.',
    verse: 'John 3:5–8'
  },
  {
    title: 'Repent & Believe',
    content: 'Turn from sin and trust in Jesus' death and resurrection. Confess that Jesus is Lord and believe God raised Him from the dead.',
    verse: 'Rom 10:9–10'
  },
  {
    title: 'Confess Jesus as Lord',
    content: 'The Spirit enables us to confess "Jesus is Lord." This confession marks the beginning of a new life under His loving rule.',
    verse: '1 Cor 12:3'
  }
];

export default function HowPeopleBelieve() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-cinzel text-3xl md:text-4xl text-navy text-center mb-4">
          How Do People Become Believers?
        </h2>
        <p className="text-center text-graphite/70 max-w-2xl mx-auto mb-12">
          Understanding the path to faith in Christ
        </p>

        <div className="space-y-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold text-navy flex items-center justify-center font-cinzel font-bold text-xl">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-cinzel text-xl text-navy mb-2">{step.title}</h3>
                <p className="text-graphite leading-relaxed mb-2">
                  {step.content}
                </p>
                <VerseChip reference={step.verse} />
              </div>
            </div>
          ))}
        </div>

        {/* Prayer Prompt */}
        <div className="bg-linen p-8 rounded-lg border-l-4 border-navy">
          <h3 className="font-cinzel text-xl text-navy mb-4">A Prayer to Begin</h3>
          <p className="text-graphite leading-relaxed italic mb-4">
            "Lord Jesus, I turn from my sin and trust You. You died and rose for me. Make me new by Your Spirit. Be my Lord. Teach me to honor You in all my life and work. Amen."
          </p>
          <p className="text-sm text-graphite/70">
            This is a model prayer, not a magic formula. God looks at the heart. If you prayed this in faith, tell a Christian friend or pastor—they will rejoice with you and help you take next steps.
          </p>
        </div>
      </div>
    </section>
  );
}

