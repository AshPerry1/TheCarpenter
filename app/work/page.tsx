import React from 'react';
import WaysYourWorkMatters from '../components/WaysYourWorkMatters';
import LiturgyOfWork from '../components/LiturgyOfWork';
import VerseChip from '../components/VerseChip';
import Button from '../components/Button';

export default function WorkPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy text-linen py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-cinzel text-4xl md:text-5xl mb-6">
            The Sacredness of Secular Work
          </h1>
          <p className="text-xl text-linen/80 leading-relaxed max-w-3xl mx-auto mb-6">
            Your job—whether you're writing code, teaching children, driving a truck, or serving coffee—has profound spiritual significance. Here's why.
          </p>
          <VerseChip 
            reference="Col 3:23–24" 
            text=""Whatever you do, work heartily, as for the Lord and not for men…""
            className="text-linen/90"
          />
        </div>
      </section>

      {/* Main Content */}
      <WaysYourWorkMatters />

      {/* Jesus the Carpenter */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cinzel text-3xl text-navy text-center mb-8">
            Jesus: The Carpenter Who Became Poor
          </h2>
          <div className="bg-linen p-8 rounded-lg">
            <p className="text-graphite leading-relaxed mb-4">
              Jesus wasn't just a rabbi or a miracle worker. Before His public ministry, He was known as "the carpenter" (Mark 6:3). He worked with His hands, crafting wood, serving customers, and supporting His family through honest labor.
            </p>
            <p className="text-graphite leading-relaxed mb-4">
              Though He was rich—the eternal Son of God—He became poor for our sake (2 Cor 8:9). He experienced the dignity and the toil of everyday work. He understands your Monday morning, your difficult boss, your tight deadlines.
            </p>
            <p className="text-graphite leading-relaxed">
              When we work as unto the Lord, we follow in the footsteps of Jesus the Carpenter—the One who dignified all honest work by doing it Himself.
            </p>
            <div className="mt-6 flex gap-4">
              <VerseChip reference="Mark 6:3" />
              <VerseChip reference="2 Cor 8:9" />
            </div>
          </div>
        </div>
      </section>

      <LiturgyOfWork />

      {/* CTA */}
      <section className="py-16 bg-linen">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cinzel text-3xl text-navy mb-6">
            Ready to Put This Into Practice?
          </h2>
          <p className="text-graphite mb-8 max-w-2xl mx-auto">
            Get practical tools, prayers, and resources to help you see your work as worship.
          </p>
          <Button href="/tools">Explore Tools & Resources</Button>
        </div>
      </section>
    </div>
  );
}

