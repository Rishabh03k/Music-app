import React, { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Shuffle, Maximize2, List } from 'lucide-react';
import usePlayerStore from '../stores/playerStore';

interface PlayerProps {
  className?: string;
}

const Player: React.FC<PlayerProps> = ({ className }) => {
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const { 
    currentTrack, 
    isPlaying, 
    togglePlayPause, 
    nextTrack, 
    previousTrack 
  } = usePlayerStore();

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const percent = Math.min(Math.max(0, e.clientX - rect.left), rect.width) / rect.width;
    // Would normally set the audio time here
    console.log(`Seek to ${percent * 100}%`);
  };

  // If no track is selected yet, show a minimal player
  if (!currentTrack) {
    return (
      <div className={`h-16 md:h-20 bg-background-elevate border-t border-neutral-800 p-4 ${className}`}>
        <div className="flex items-center justify-center h-full text-neutral-400">
          <p>Select a track to play</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-16 md:h-20 bg-background-elevate border-t border-neutral-800 px-4 ${className}`}>
      <div className="grid grid-cols-3 h-full items-center">
        {/* Track info */}
        <div className="flex items-center gap-3">
          <img 
            src={currentTrack.imageUrl} 
            alt={currentTrack.title} 
            className="w-12 h-12 rounded"
          />
          <div className="hidden sm:block">
            <h4 className="text-sm font-medium">{currentTrack.title}</h4>
            <p className="text-xs text-neutral-400">{currentTrack.artist}</p>
          </div>
        </div>
        
        {/* Player controls */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4">
            <button className="btn-icon text-neutral-400 hover:text-white">
              <Shuffle size={18} />
            </button>
            <button className="btn-icon" onClick={previousTrack}>
              <SkipBack size={20} />
            </button>
            <button 
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause size={18} className="text-black" /> : <Play size={18} className="text-black ml-0.5" />}
            </button>
            <button className="btn-icon" onClick={nextTrack}>
              <SkipForward size={20} />
            </button>
            <button className="btn-icon text-neutral-400 hover:text-white">
              <Repeat size={18} />
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="w-full max-w-md hidden sm:flex items-center gap-2 mt-1 text-xs">
            <span className="text-neutral-400">1:24</span>
            <div 
              ref={progressRef}
              className="flex-1 h-1 bg-neutral-700 rounded-full cursor-pointer" 
              onClick={handleProgressClick}
            >
              <div className="h-full w-[30%] bg-primary rounded-full relative group">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <span className="text-neutral-400">4:32</span>
          </div>
        </div>
        
        {/* Volume controls */}
        <div className="flex items-center justify-end gap-2">
          <button 
            className="btn-icon text-neutral-400 hover:text-white"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <div className="w-24 hidden sm:block">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={isMuted ? 0 : volume} 
              onChange={(e) => {
                setVolume(Number(e.target.value));
                if (Number(e.target.value) > 0 && isMuted) {
                  setIsMuted(false);
                }
              }}
              className="w-full h-1 accent-primary bg-neutral-700 rounded-full appearance-none cursor-pointer"
            />
          </div>
          <button className="btn-icon text-neutral-400 hover:text-white ml-2">
            <List size={20} />
          </button>
          <button className="btn-icon text-neutral-400 hover:text-white hidden md:flex">
            <Maximize2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;