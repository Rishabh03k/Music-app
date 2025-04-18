import React from 'react';
import { Play, Clock3 } from 'lucide-react';
import Section from '../components/section/Section';
import MusicGrid from '../components/section/MusicGrid';
import TrackList from '../components/TrackList';
import { recommendedPlaylists, newReleases, trendingArtists, madeForYou, mockTracks } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="flex items-center gap-8 mb-8">
        <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-xl">
          <Play size={64} fill="white" className="text-white ml-2" />
        </div>
        
        <div>
          <p className="text-sm text-neutral-300 mb-1">PLAYLIST</p>
          <h1 className="text-5xl font-bold mb-4">Your Weekly Mix</h1>
          <p className="text-neutral-300">
            Personalized playlist with recommendations based on your listening habits
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-neutral-400">
            <span className="font-medium text-neutral-300">MelodyStream</span>
            <span>•</span>
            <span>Updated today</span>
            <span>•</span>
            <span>40 songs, 2 hr 30 min</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 mb-8">
        <button className="btn btn-primary px-8">
          Play
        </button>
        <button className="btn btn-secondary">
          Save to Library
        </button>
      </div>
      
      {/* Recently played tracks */}
      <Section 
        title="Recently Played" 
        subtitle="Pick up where you left off"
      >
        <TrackList 
          tracks={mockTracks.slice(0, 5)} 
          showHeader={true}
          showAlbum={true}
          showArtist={true}
        />
      </Section>
      
      {/* Made for you */}
      <Section 
        title="Made For You" 
        subtitle="Your personal mixes updated daily"
        seeAllLink="/explore"
      >
        <MusicGrid items={madeForYou} columns={4} />
      </Section>
      
      {/* New releases */}
      <Section 
        title="New Releases" 
        subtitle="Hot off the press"
        seeAllLink="/explore"
      >
        <MusicGrid items={newReleases} columns={4} />
      </Section>
      
      {/* Trending artists */}
      <Section 
        title="Popular Artists" 
        subtitle="Trending globally"
        seeAllLink="/explore"
      >
        <MusicGrid 
          items={trendingArtists.map(artist => ({
            id: artist.id,
            title: artist.name,
            artist: `${artist.monthlyListeners.toLocaleString()} monthly listeners`,
            imageUrl: artist.imageUrl,
            type: 'artist'
          }))} 
          columns={6} 
        />
      </Section>
      
      {/* Recommended playlists */}
      <Section 
        title="Recommended Playlists" 
        subtitle="Based on your recent listening"
        seeAllLink="/explore"
      >
        <MusicGrid items={recommendedPlaylists} columns={4} />
      </Section>
    </div>
  );
};

export default Home;