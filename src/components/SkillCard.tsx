import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="p-6 rounded-lg relative group border border-[rgb(0_255_255_/_0.3)] hover:border-[rgb(0_255_255_/_0.5)] transition-colors">
      <h3 className="text-xl font-bold text-[rgb(0_255_255_/_0.8)] mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded border border-[rgb(0_255_255_/_0.3)] text-white/80
              hover:border-[rgb(0_255_255_/_0.5)] hover:text-white transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
