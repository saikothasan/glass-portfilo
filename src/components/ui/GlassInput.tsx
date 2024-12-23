import React from 'react';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const GlassInput: React.FC<GlassInputProps> = ({ label, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#00FFB2] transition-colors"
      />
    </div>
  );
};