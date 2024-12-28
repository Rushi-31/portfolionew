import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
}

const TypewriterText = ({ text }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text]);

  return (
    <div className="font-mono relative group">
      <span className="text-[#0ff] typing-text relative">
        {displayText}
        <span 
          className={`absolute ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity ml-1`}
        >
          |
        </span>
      </span>
      <div className="typing-glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default TypewriterText;