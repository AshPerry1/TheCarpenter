import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-linen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-cinzel text-lg font-semibold mb-4">The Carpenter</h3>
            <p className="text-sm leading-relaxed text-linen/80">
              Helping every follower of Jesus see their everyday work as worship—because God sees it, and it matters forever.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/gospel" className="hover:text-gold transition-colors">Gospel</Link>
              <Link href="/work" className="hover:text-gold transition-colors">Your Work</Link>
              <Link href="/stories" className="hover:text-gold transition-colors">Stories</Link>
              <Link href="/tools" className="hover:text-gold transition-colors">Tools</Link>
            </div>
          </div>

          {/* Statement of Faith */}
          <div>
            <h3 className="font-cinzel text-lg font-semibold mb-4">Statement of Faith</h3>
            <p className="text-sm leading-relaxed text-linen/80">
              We affirm salvation by grace alone through faith alone in Christ alone. We hold to historic Protestant orthodoxy and the Westminster Standards (PCA).
            </p>
          </div>
        </div>

        <div className="border-t border-gold/30 mt-8 pt-8 text-center text-sm text-linen/70">
          <p>&copy; {new Date().getFullYear()} The Carpenter. All Scripture quotations are from the ESV® Bible.</p>
        </div>
      </div>
    </footer>
  );
}

