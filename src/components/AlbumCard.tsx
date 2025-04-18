import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface AlbumCardProps {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  type?: 'album' | 'playlist' | 'artist';
}

const AlbumCard: React.FC<AlbumCardProps> = ({ 
  id, 
  title, 
  artist, 
  imageUrl, 
  type = 'album' 
}) => {
  const linkTo = type === 'artist' 
    ? `/artist/${id}` 
    : type === 'playlist' 
      ? `/playlist/${id}` 
      : `/album/${id}`;
  
  return (
    <Link to={linkTo} className="card group relative">
      <div className="w-full aspect-square mb-4 rounded-md overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-80 ${type === 'artist' ? 'rounded-full' : ''}`}
        />
        <div className="absolute right-2 bottom-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg cursor-pointer">
          <Play size={20} fill="white" className="text-white ml-0.5" />
        </div>
      </div>
      <h3 className="font-semibold truncate">{title}</h3>
      <p className="text-sm text-neutral-400 truncate">{artist}</p>
    </Link>
  );
};

export default AlbumCard;