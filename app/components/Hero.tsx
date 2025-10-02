import React from 'react';
import Link from 'next/link';
import Button from './Button';
import VerseChip from './VerseChip';

export default function Hero() {
  return (
    <section className="bg-linen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-navy leading-tight">
            Your everyday work is worship.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite leading-relaxed">
            God sees your shift, your spreadsheets, your lesson plans, your routes.
          </p>
          <div className="mt-4">
            <VerseChip 
              reference="Heb 6:10" 
              text=""God is not unjust so as to overlook your work …""
            />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/gospel">Start Here</Button>
            <Link 
              href="/work" 
              className="text-navy underline font-medium hover:text-gold transition-colors self-start sm:self-center"
            >
              Why your job matters →
            </Link>
          </div>
        </div>
        <div className="relative">
          <svg viewBox="0 0 400 400" className="w-full h-auto">
            {/* Simple carpenter illustration */}
            <circle cx="200" cy="200" r="180" fill="#FAF6EF" stroke="#0B1E2D" strokeWidth="2"/>
            <circle cx="200" cy="200" r="150" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.3"/>
            
            {/* Chisel */}
            <path d="M150 180 L150 220 L170 230 L170 170 Z" fill="#2E2E2E" stroke="#0B1E2D" strokeWidth="2"/>
            <rect x="168" y="150" width="4" height="20" fill="#5B6B4D"/>
            
            {/* Plumb line */}
            <line x1="250" y1="150" x2="250" y2="250" stroke="#0B1E2D" strokeWidth="2"/>
            <circle cx="250" cy="255" r="8" fill="#C9A227" stroke="#0B1E2D" strokeWidth="2"/>
            <path d="M245 145 L250 135 L255 145 Z" fill="#2E2E2E"/>
            
            {/* Wood grain texture */}
            <path d="M100 280 Q150 275 200 280 T300 280" fill="none" stroke="#5B6B4D" strokeWidth="1" opacity="0.4"/>
            <path d="M100 290 Q150 285 200 290 T300 290" fill="none" stroke="#5B6B4D" strokeWidth="1" opacity="0.4"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

