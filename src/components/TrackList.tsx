import React from 'react';
import { Play, Heart, MoreHorizontal, Clock3 } from 'lucide-react';
import { Track } from '../types';
import usePlayerStore from '../stores/playerStore';

interface TrackListProps {
  tracks: Track[];
  showHeader?: boolean;
  showAlbum?: boolean;
  showArtist?: boolean;
  showCover?: boolean;
}

const TrackList: React.FC<TrackListProps> = ({ 
  tracks, 
  showHeader = true, 
  showAlbum = true,
  showArtist = true,
  showCover = true,
}) => {
  const { currentTrack, playTrack } = usePlayerStore();
  
  return (
    <div className="w-full">
      {showHeader && (
        <div className="grid grid-cols-[16px_4fr_2fr_1fr] md:grid-cols-[16px_4fr_2fr_2fr_1fr] gap-4 px-4 py-2 text-neutral-400 text-sm border-b border-neutral-800 mb-2">
          <div className="text-right">#</div>
          <div>Title</div>
          {showAlbum && <div className="hidden md:block">Album</div>}
          {showArtist && <div>Artist</div>}
          <div className="flex justify-end">
            <Clock3 size={16} />
          </div>
        </div>
      )}

      <div className="divide-y divide-neutral-800/50">
        {tracks.map((track, index) => {
          const isCurrentTrack = currentTrack?.id === track.id;
          
          return (
            <div 
              key={track.id}
              className={`grid grid-cols-[16px_4fr_2fr_1fr] md:grid-cols-[16px_4fr_2fr_2fr_1fr] gap-4 px-4 py-2 items-center hover:bg-neutral-800/50 rounded group ${isCurrentTrack ? 'bg-neutral-800/30 text-primary' : ''}`}
              onClick={() => playTrack(track)}
            >
              <div className="flex justify-center text-sm text-neutral-400 group-hover:hidden">
                {index + 1}
              </div>
              <div className="hidden group-hover:flex justify-center">
                <Play size={14} className="cursor-pointer" />
              </div>
              
              <div className="flex items-center gap-3 truncate">
                {showCover && (
                  <img 
                    src={track.imageUrl} 
                    alt={track.title} 
                    className="w-10 h-10 rounded"
                  />
                )}
                <div className="truncate">
                  <div className={`font-medium truncate ${isCurrentTrack ? 'text-primary' : ''}`}>{track.title}</div>
                  {showArtist && (
                    <div className="text-sm text-neutral-400 truncate">{track.artist}</div>
                  )}
                </div>
              </div>
              
              {showAlbum && (
                <div className="text-sm text-neutral-400 truncate hidden md:block">
                  {track.album}
                </div>
              )}
              
              {showArtist && (
                <div className="text-sm text-neutral-400 truncate">
                  {track.artist}
                </div>
              )}
              
              <div className="flex items-center justify-end gap-4">
                <button className="text-neutral-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={16} />
                </button>
                <div className="text-sm text-neutral-400">{track.duration}</div>
                <button className="text-neutral-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackList;