import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="hover:text-[#00FFB2] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};