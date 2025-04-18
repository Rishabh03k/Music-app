import React from 'react';
import AlbumCard from '../AlbumCard';

interface MusicGridProps {
  items: Array<{
    id: string;
    title: string;
    artist: string;
    imageUrl: string;
    type?: 'album' | 'playlist' | 'artist';
  }>;
  columns?: number;
}

const MusicGrid: React.FC<MusicGridProps> = ({ items, columns = 5 }) => {
  const gridCols = {
    2: 'grid-cols-2 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
  }[columns] || 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';

  return (
    <div className={`grid ${gridCols} gap-4`}>
      {items.map(item => (
        <AlbumCard 
          key={item.id}
          id={item.id}
          title={item.title}
          artist={item.artist}
          imageUrl={item.imageUrl}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default MusicGrid;