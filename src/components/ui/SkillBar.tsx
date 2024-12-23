import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-[#00FFB2]"
        />
      </div>
    </div>
  );
};