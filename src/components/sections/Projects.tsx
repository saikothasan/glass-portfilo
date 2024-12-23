import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory and AI-powered recommendations.',
    image: 'https://source.unsplash.com/random/800x600?tech=1'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard with real-time data visualization and reporting.',
    image: 'https://source.unsplash.com/random/800x600?tech=2'
  },
  {
    title: 'AI Content Generator',
    description: 'Content generation platform powered by advanced AI algorithms.',
    image: 'https://source.unsplash.com/random/800x600?tech=3'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};