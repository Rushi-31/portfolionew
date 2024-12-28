import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  points: string[];
}

const ProjectCard = ({ title, description, tech, points }: ProjectCardProps) => {
  return (
    <div className="p-6 rounded-lg relative group border border-[rgb(0_255_255_/_0.3)] hover:border-[rgb(0_255_255_/_0.5)] transition-colors">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[rgb(0_255_255_/_0.8)]">{title}</h3>
        <p className="text-white/90">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded text-sm border border-[rgb(0_255_255_/_0.3)] text-white/80
                hover:border-[rgb(0_255_255_/_0.5)] transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="list-disc list-inside space-y-2 text-white/80">
          {points.map((point, index) => (
            <li key={index} className="group-hover:text-white transition-colors duration-300">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
