import React from 'react';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const GlassButton: React.FC<GlassButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full py-3 px-6 rounded-lg bg-[#00FFB2] text-black font-medium hover:bg-[#00FFB2]/90 transition-colors"
    >
      {children}
    </button>
  );
};