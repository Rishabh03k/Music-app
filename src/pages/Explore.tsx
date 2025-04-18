import React from 'react';
import Section from '../components/section/Section';
import MusicGrid from '../components/section/MusicGrid';
import { genres, newReleases, mockPlaylists, mockArtists } from '../data/mockData';

const Explore: React.FC = () => {
  return (
    <div className="pb-20">
      <h1 className="text-4xl font-bold mb-8">Explore</h1>
      
      {/* Genre browsing */}
      <Section title="Browse by Genre">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {genres.map(genre => (
            <div 
              key={genre.id}
              className="relative h-32 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: genre.color }}
            >
              <div className="absolute inset-0 p-6 flex items-end">
                <h3 className="text-xl font-bold text-white">{genre.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Charts */}
      <Section title="Charts" subtitle="The most played tracks on MelodyStream" seeAllLink="/charts">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Global Top 50", "United States Top 50", "Viral Hits"].map((chart, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <img 
                src={mockPlaylists[i].imageUrl}
                alt={chart}
                className="w-full h-full object-cover transition-opacity group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{chart}</h3>
                <p className="text-sm text-neutral-300">The hottest tracks right now</p>
              </div>
              <div className="absolute right-4 bottom-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg cursor-pointer">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* New Releases */}
      <Section title="New Releases" subtitle="The latest hits to check out">
        <MusicGrid items={newReleases} columns={5} />
      </Section>
      
      {/* Trending Artists */}
      <Section title="Popular Artists" subtitle="Trending globally">
        <MusicGrid 
          items={mockArtists.map(artist => ({
            id: artist.id,
            title: artist.name,
            artist: `${artist.monthlyListeners.toLocaleString()} monthly listeners`,
            imageUrl: artist.imageUrl,
            type: 'artist'
          }))}
          columns={6}
        />
      </Section>
      
      {/* Moods and activities */}
      <Section title="Moods & Activities" subtitle="Playlists to match your mood">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {["Workout", "Focus", "Relax", "Party", "Sleep", "Travel", "Mood Booster", "Throwback"].map((mood, i) => (
            <div 
              key={i}
              className="relative h-40 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img 
                src={`https://images.pexels.com/photos/${[791763, 577585, 355887, 1540406, 1557238, 2007647, 1671597, 210922][i]}/pexels-photo-${[791763, 577585, 355887, 1540406, 1557238, 2007647, 1671597, 210922][i]}.jpeg`}
                alt={mood}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{mood}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Explore;