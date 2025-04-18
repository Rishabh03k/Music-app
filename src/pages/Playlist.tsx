import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, MoreHorizontal, Clock3, Heart } from 'lucide-react';
import TrackList from '../components/TrackList';
import { mockPlaylists } from '../data/mockData';

const Playlist: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState(mockPlaylists[0]);
  
  useEffect(() => {
    const foundPlaylist = mockPlaylists.find(p => p.id === id);
    if (foundPlaylist) {
      setPlaylist(foundPlaylist);
    }
  }, [id]);
  
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0 relative group">
          <img 
            src={playlist.imageUrl} 
            alt={playlist.title} 
            className="w-full h-full object-cover shadow-lg rounded-md"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Play size={28} fill="white" className="text-white ml-1" />
            </button>
          </div>
        </div>
        
        <div className="flex flex-col justify-end">
          <p className="text-sm text-neutral-300 mb-1">PLAYLIST</p>
          <h1 className="text-5xl font-bold mb-4">{playlist.title}</h1>
          <p className="text-neutral-300 mb-4">{playlist.description}</p>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span className="font-medium text-neutral-300">{playlist.creator}</span>
            <span>•</span>
            <span>{playlist.tracks.length} songs</span>
            <span>•</span>
            <span>2 hr 30 min</span>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center gap-4 py-4 mb-4">
        <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform">
          <Play size={24} fill="white" className="text-white ml-0.5" />
        </button>
        
        <button className="btn-icon">
          <Heart size={24} className="text-primary" />
        </button>
        
        <button className="btn-icon">
          <MoreHorizontal size={24} />
        </button>
      </div>
      
      {/* Track list */}
      <TrackList 
        tracks={playlist.tracks} 
        showHeader={true}
        showAlbum={true}
        showArtist={true}
      />
    </div>
  );
};

export default Playlist;