import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="mb-16 relative">
      <div className="cyber-card p-8 rounded-lg scanline">
        <div className="space-y-6">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4 cyber-glitch">
              Rushikesh Chopade
            </h1>
            <p className="text-xl text-[#0ff]/80 mb-6 cyber-anim">Software Developer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cyber-grid-items">
            <div className="flex items-center gap-2 cyber-item">
              <MapPin size={16} className="text-[#0ff]" />
              <span>Pune, India</span>
            </div>
            <div className="flex items-center gap-2 cyber-item">
              <Phone size={16} className="text-[#0ff]" />
              <span>+917720908782</span>
            </div>
            <div className="flex items-center gap-2 cyber-item">
              <Mail size={16} className="text-[#0ff]" />
              <span>rushipc@gmail.com</span>
            </div>
          </div>

          <div className="flex gap-4 cyber-buttons">
            <a 
              href="https://linkedin.com/in/rushikesh731" 
              className="cyber-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-[#0ff]" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/rushi-31" 
              className="cyber-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-[#0ff]" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;