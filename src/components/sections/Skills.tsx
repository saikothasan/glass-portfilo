import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { SkillBar } from '../ui/SkillBar';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Three.js/WebGL', level: 80 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'PostgreSQL', level: 75 }
    ]
  },
  {
    title: 'Design',
    skills: [
      { name: 'UI/UX Design', level: 85 },
      { name: '3D Modeling', level: 75 },
      { name: 'Motion Design', level: 70 }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};