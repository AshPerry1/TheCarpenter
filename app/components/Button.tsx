import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ 
  href, 
  onClick, 
  variant = 'primary', 
  children, 
  className = '' 
}: ButtonProps) {
  const buttonClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  if (href) {
    return (
      <Link href={href} className={`${buttonClass} inline-block ${className}`}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={`${buttonClass} ${className}`}>
      {children}
    </button>
  );
}

