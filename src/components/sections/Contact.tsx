import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { GlassInput } from '../ui/GlassInput';
import { GlassTextarea } from '../ui/GlassTextarea';
import { GlassButton } from '../ui/GlassButton';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
        <GlassCard className="max-w-2xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <GlassInput
              label="Name"
              type="text"
              required
            />
            <GlassInput
              label="Email"
              type="email"
              required
            />
            <GlassTextarea
              label="Message"
              rows={4}
              required
            />
            <GlassButton type="submit">
              Send Message
            </GlassButton>
          </form>
        </GlassCard>
      </div>
    </section>
  );
};