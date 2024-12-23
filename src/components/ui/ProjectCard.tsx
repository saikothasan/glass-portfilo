import React from 'react';
import { GlassCard } from './GlassCard';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image
}) => {
  return (
    <GlassCard className="project-card p-6 cursor-pointer overflow-hidden">
      <div className="aspect-video mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </GlassCard>
  );
};