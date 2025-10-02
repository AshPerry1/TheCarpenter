'use client';

import React, { useState } from 'react';

export default function CTABand() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with email service
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-16 bg-gold">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-cinzel text-3xl md:text-4xl text-navy mb-4">
          Join the Movement
        </h2>
        <p className="text-navy/80 mb-8 max-w-2xl mx-auto">
          Get weekly encouragement, prayers for your work, and resources to help you see your job as worship.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy text-graphite"
            />
            <button 
              type="submit"
              className="bg-navy text-linen px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="bg-navy/10 text-navy px-6 py-4 rounded-lg max-w-md mx-auto">
            Thanks! Check your email to confirm your subscription.
          </div>
        )}
      </div>
    </section>
  );
}

