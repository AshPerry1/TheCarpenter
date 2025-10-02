import React from 'react';

interface VerseChipProps {
  reference: string;
  text?: string;
  className?: string;
}

export default function VerseChip({ reference, text, className = '' }: VerseChipProps) {
  return (
    <div className={`inline-block ${className}`}>
      {text && <span className="italic text-graphite">{text}</span>}
      <span className="ml-2 text-sm font-medium text-olive">— {reference}</span>
    </div>
  );
}

