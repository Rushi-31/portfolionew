import React from 'react';
import { Terminal } from 'lucide-react';
import TypewriterText from './TypewriterText';

const Header = () => {
  return (
    <header className="bg-black/80 backdrop-blur-sm border-b border-[#00ff00]/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        <Terminal className="text-[#00ff00] animate-pulse" />
        <TypewriterText text='System.out.println("Hello, World!");' />
      </div>
    </header>
  );
};

export default Header;