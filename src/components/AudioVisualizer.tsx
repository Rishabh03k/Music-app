import React from 'react';

interface AudioVisualizerProps {
  isPlaying: boolean;
  className?: string;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isPlaying, className }) => {
  return (
    <div className={`audio-wave flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={i}
          className={`wave-bar w-1 bg-primary rounded-sm ${isPlaying ? '' : 'animation-pause'}`}
          style={{ 
            height: `${Math.max(3, Math.min(12, 5 + i * 2))}px`,
            animationDelay: `${i * 0.1}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default AudioVisualizer;