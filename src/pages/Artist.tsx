import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, MoreHorizontal, Heart, Share2, Shuffle } from 'lucide-react';
import TrackList from '../components/TrackList';
import MusicGrid from '../components/section/MusicGrid';
import Section from '../components/section/Section';
import { mockArtists } from '../data/mockData';

const Artist: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState(mockArtists[0]);
  
  useEffect(() => {
    const foundArtist = mockArtists.find(a => a.id === id);
    if (foundArtist) {
      setArtist(foundArtist);
    }
  }, [id]);
  
  return (
    <div className="pb-20">
      {/* Hero section with large artist image */}
      <div className="relative h-80 mb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background">
          <img 
            src={artist.imageUrl} 
            alt={artist.name} 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 p-6 flex items-end">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm bg-primary-800 text-primary px-2 py-0.5 rounded-sm">VERIFIED ARTIST</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">{artist.name}</h1>
            <p className="text-neutral-300">{artist.monthlyListeners.toLocaleString()} monthly listeners</p>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center gap-4 py-4 mb-8">
        <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform">
          <Play size={24} fill="white" className="text-white ml-0.5" />
        </button>
        
        <button className="btn btn-secondary">
          <div className="flex items-center gap-2">
            <Shuffle size={18} />
            <span>Shuffle</span>
          </div>
        </button>
        
        <button className="btn-icon">
          <Heart size={24} />
        </button>
        
        <button className="btn-icon">
          <MoreHorizontal size={24} />
        </button>
      </div>
      
      {/* Popular tracks */}
      <Section title="Popular">
        <TrackList 
          tracks={artist.topTracks.slice(0, 5)} 
          showHeader={false}
          showAlbum={true}
          showArtist={false}
        />
      </Section>
      
      {/* Albums */}
      <Section title="Albums" seeAllLink={`/artist/${artist.id}/albums`}>
        <MusicGrid 
          items={artist.albums.map(album => ({
            id: album.id,
            title: album.title,
            artist: artist.name,
            imageUrl: album.imageUrl,
            type: 'album'
          }))}
          columns={5}
        />
      </Section>
      
      {/* Artist bio */}
      <Section title="About">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="text-neutral-300 mb-4">{artist.biography}</p>
            <button className="text-neutral-400 hover:text-white underline">
              Read more
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Monthly Listeners</h3>
            <p className="text-3xl font-bold text-white mb-4">
              {artist.monthlyListeners.toLocaleString()}
            </p>
            
            <div className="flex justify-end">
              <button className="btn-icon">
                <Share2 size={20} className="text-neutral-400" />
              </button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Similar artists */}
      <Section title="Fans also like">
        <MusicGrid 
          items={mockArtists
            .filter(a => a.id !== artist.id)
            .map(a => ({
              id: a.id,
              title: a.name,
              artist: `${a.monthlyListeners.toLocaleString()} monthly listeners`,
              imageUrl: a.imageUrl,
              type: 'artist'
            }))}
          columns={6}
        />
      </Section>
    </div>
  );
};

export default Artist;