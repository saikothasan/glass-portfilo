import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Hero3D } from '../Hero3D';
import { SocialLink } from '../ui/SocialLink';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <Hero3D />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          Creative Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Building beautiful digital experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <SocialLink href="#" icon={<Github size={24} />} />
          <SocialLink href="#" icon={<Linkedin size={24} />} />
          <SocialLink href="#" icon={<Mail size={24} />} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};