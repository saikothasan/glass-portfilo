import React from 'react';

export const GlassCard = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white/30 backdrop-blur-lg rounded-lg shadow-lg ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background for the glass effect
      }}
    >
      {children}
    </div>
  );
};
