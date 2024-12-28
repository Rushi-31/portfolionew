import React from 'react';

const ArcReactor = () => {
  return (
    <div className="arc-reactor-container">
      <div className="arc-reactor">
        <div className="ring-1"></div>
        <div className="ring-2"></div>
        <div className="ring-3"></div>
        <div className="core"></div>
        <div className="segments">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="segment" 
              style={{ 
                transform: `rotate(${i * 60}deg)` 
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArcReactor;