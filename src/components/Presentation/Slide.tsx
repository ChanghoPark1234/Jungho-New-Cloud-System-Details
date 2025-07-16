import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  active: boolean;
  className?: string;
}

export default function Slide({ children, active, className = '' }: SlideProps) {
  return (
    <div className={`slide ${active ? 'active' : ''} ${className}`}>
      {children}
    </div>
  );
} 