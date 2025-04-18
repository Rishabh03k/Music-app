import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, MoreHorizontal, Clock3, Heart } from 'lucide-react';
import TrackList from '../components/TrackList';
import MusicGrid from '../components/section/MusicGrid';
import Section from '../components/section/Section';
import { mockAlbums, mockArtists } from '../data/mockData';

const Album: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [album, setAlbum] = useState(mockAlbums[0]);
  const [artist, setArtist] = useState(mockArtists[0]);
  
  useEffect(() => {
    const foundAlbum = mockAlbums.find(a => a.id === id);
    if (foundAlbum) {
      setAlbum(foundAlbum);
      
      // Find associated artist
      const foundArtist = mockArtists.find(a => a.name === foundAlbum.artist);
      if (foundArtist) {
        setArtist(foundArtist);
      }
    }
  }, [id]);
  
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0 relative group">
          <img 
            src={album.imageUrl} 
            alt={album.title} 
            className="w-full h-full object-cover shadow-lg rounded-md"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Play size={28} fill="white" className="text-white ml-1" />
            </button>
          </div>
        </div>
        
        <div className="flex flex-col justify-end">
          <p className="text-sm text-neutral-300 mb-1">ALBUM</p>
          <h1 className="text-5xl font-bold mb-4">{album.title}</h1>
          <div className="flex items-center gap-2 text-sm">
            <img 
              src={artist.imageUrl} 
              alt={artist.name} 
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="font-medium text-neutral-100">{album.artist}</span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-400">{new Date(album.releaseDate).getFullYear()}</span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-400">{album.tracks.length} songs, 35 min</span>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center gap-4 py-4 mb-4">
        <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform">
          <Play size={24} fill="white" className="text-white ml-0.5" />
        </button>
        
        <button className="btn-icon">
          <Heart size={24} />
        </button>
        
        <button className="btn-icon">
          <MoreHorizontal size={24} />
        </button>
      </div>
      
      {/* Track list */}
      <TrackList 
        tracks={album.tracks} 
        showHeader={true}
        showAlbum={false}
        showArtist={false}
        showCover={false}
      />
      
      {/* Artist section */}
      <Section title={`More by ${album.artist}`} seeAllLink={`/artist/${artist.id}`}>
        <MusicGrid 
          items={mockAlbums
            .filter(a => a.artist === album.artist && a.id !== album.id)
            .map(a => ({
              id: a.id,
              title: a.title,
              artist: a.artist,
              imageUrl: a.imageUrl,
              type: 'album'
            }))}
          columns={5}
        />
      </Section>
    </div>
  );
};

export default Album;