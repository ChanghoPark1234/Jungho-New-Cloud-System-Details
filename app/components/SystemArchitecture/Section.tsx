import React from 'react';

interface SectionProps {
  title: string;
  content: string;
}

export const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}; 