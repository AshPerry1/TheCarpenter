import React from 'react';
import FourMovements from '../components/FourMovements';
import HowPeopleBelieve from '../components/HowPeopleBelieve';
import Button from '../components/Button';

export default function GospelPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy text-linen py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-cinzel text-4xl md:text-5xl mb-6">
            The Gospel: God's Story of Redemption
          </h1>
          <p className="text-xl text-linen/80 leading-relaxed max-w-3xl mx-auto">
            Before we can understand why our work matters, we need to understand the story we're part of—the story of creation, fall, redemption, and restoration.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <FourMovements />
      <HowPeopleBelieve />

      {/* Next Steps */}
      <section className="py-16 bg-linen">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cinzel text-3xl text-navy mb-6">
            What's Next?
          </h2>
          <p className="text-graphite mb-8 max-w-2xl mx-auto">
            Now that you've heard the gospel, discover how it transforms the way you see your everyday work.
          </p>
          <Button href="/work">See How Your Work Matters</Button>
        </div>
      </section>
    </div>
  );
}

