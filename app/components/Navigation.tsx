'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/gospel', label: 'Gospel' },
    { href: '/work', label: 'Your Work' },
    { href: '/stories', label: 'Stories' },
    { href: '/tools', label: 'Tools' },
    { href: '/print-cards', label: 'Print Cards' },
  ];

  return (
    <nav className="bg-navy text-linen sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M35 30 L50 45 L35 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" strokeWidth="2"/>
                <line x1="65" y1="30" x2="65" y2="70" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="font-cinzel text-xl font-semibold">The Carpenter</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                className="hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gold/30 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="hover:text-gold transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

