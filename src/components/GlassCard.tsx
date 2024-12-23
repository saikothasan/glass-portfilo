import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 shadow-xl ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      whileHover={{
        transform: 'rotate3d(1, 1, 0, 2deg)',
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
};