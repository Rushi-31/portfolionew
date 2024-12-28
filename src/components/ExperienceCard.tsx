import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
}

const ExperienceCard = ({
  title,
  company,
  period,
  location,
  responsibilities,
  achievements,
}: ExperienceCardProps) => {
  return (
    <div className="p-6 rounded-lg relative group border border-[#00ff00]/30 hover:border-[#00ff00]/50 transition-colors">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[rgb(0_255_255_/_0.8)]">{title}</h3>
        <p className="text-white/90">{company}</p>
        <div className="flex flex-wrap gap-4 text-white/80">
          <span className="px-2 py-1 border border-[#00ff00]/30 rounded">{period}</span>
          <span className="px-2 py-1 border border-[#00ff00]/30 rounded">{location}</span>
        </div>
        
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-bold text-[rgb(0_255_255_/_0.8)] mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              {responsibilities.map((resp, index) => (
                <li key={index} className="group-hover:text-white transition-colors duration-300">
                  {resp}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[rgb(0_255_255_/_0.8)] mb-2">Achievements:</h4>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              {achievements.map((achievement, index) => (
                <li key={index} className="group-hover:text-white transition-colors duration-300">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
