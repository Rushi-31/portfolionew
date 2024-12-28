import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

const Section = ({ title, children, icon }: SectionProps) => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6 group">
        {icon && <div className="text-[rgb(0_255_255_/_0.8)] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>}
        <h2 className="text-2xl font-bold text-[rgb(0_255_255_/_0.8)] cyber-glitch">{title}</h2>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
