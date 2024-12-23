import React from 'react';

interface GlassTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const GlassTextarea: React.FC<GlassTextareaProps> = ({ label, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <textarea
        {...props}
        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#00FFB2] transition-colors resize-none"
      />
    </div>
  );
};