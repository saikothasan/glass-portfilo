import React from 'react';
import { GlassCard } from '../ui/GlassCard';

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-lg">
              A passionate developer focused on creating immersive web experiences
              that combine beautiful design with powerful functionality.
            </p>
          </GlassCard>
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-4">What I Do</h3>
            <p className="text-lg">
              I specialize in building modern web applications using cutting-edge
              technologies and best practices in web development.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};