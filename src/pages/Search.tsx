import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import Section from '../components/section/Section';
import MusicGrid from '../components/section/MusicGrid';
import TrackList from '../components/TrackList';
import { mockTracks, mockAlbums, mockArtists, mockPlaylists } from '../data/mockData';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'The Weeknd',
    'Chill Vibes',
    'Dua Lipa',
    'Workout Mix'
  ]);
  const [filteredTracks, setFilteredTracks] = useState(mockTracks);
  const [filteredAlbums, setFilteredAlbums] = useState(mockAlbums);
  const [filteredArtists, setFilteredArtists] = useState(mockArtists);
  const [filteredPlaylists, setFilteredPlaylists] = useState(mockPlaylists);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredTracks(mockTracks);
      setFilteredAlbums(mockAlbums);
      setFilteredArtists(mockArtists);
      setFilteredPlaylists(mockPlaylists);
      return;
    }
    
    const q = query.toLowerCase();
    
    // Filter tracks
    setFilteredTracks(
      mockTracks.filter(track => 
        track.title.toLowerCase().includes(q) ||
        track.artist.toLowerCase().includes(q) ||
        track.album.toLowerCase().includes(q)
      )
    );
    
    // Filter albums
    setFilteredAlbums(
      mockAlbums.filter(album => 
        album.title.toLowerCase().includes(q) ||
        album.artist.toLowerCase().includes(q)
      )
    );
    
    // Filter artists
    setFilteredArtists(
      mockArtists.filter(artist => 
        artist.name.toLowerCase().includes(q)
      )
    );
    
    // Filter playlists
    setFilteredPlaylists(
      mockPlaylists.filter(playlist => 
        playlist.title.toLowerCase().includes(q) ||
        playlist.description.toLowerCase().includes(q)
      )
    );
    
    // Add to recent searches if not empty
    if (query.trim() !== '' && !recentSearches.includes(query)) {
      setRecentSearches(prev => [query, ...prev.slice(0, 7)]);
    }
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setFilteredTracks(mockTracks);
    setFilteredAlbums(mockAlbums);
    setFilteredArtists(mockArtists);
    setFilteredPlaylists(mockPlaylists);
  };
  
  const removeRecentSearch = (index: number) => {
    setRecentSearches(prev => prev.filter((_, i) => i !== index));
  };
  
  return (
    <div className="pb-20">
      <h1 className="text-4xl font-bold mb-8">Search</h1>
      
      <div className="mb-8">
        <div className="relative">
          <SearchIcon size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="What do you want to listen to?"
            className="w-full h-12 pl-12 pr-10 bg-neutral-800 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {searchQuery && (
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white"
              onClick={clearSearch}
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>
      
      {searchQuery === '' ? (
        // Recent searches
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Searches</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {recentSearches.map((search, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <div 
                  className="p-3 bg-neutral-800 rounded-lg cursor-pointer hover:bg-neutral-700 transition-colors"
                  onClick={() => handleSearch(search)}
                >
                  <p className="text-sm truncate">{search}</p>
                </div>
                <button 
                  className="absolute top-1 right-1 w-5 h-5 bg-neutral-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeRecentSearch(index)}
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Search results
        <div className="space-y-8 animate-fade-in">
          {filteredTracks.length > 0 && (
            <Section title="Songs">
              <TrackList 
                tracks={filteredTracks.slice(0, 5)} 
                showHeader={true}
                showArtist={true}
                showAlbum={true}
              />
            </Section>
          )}
          
          {filteredArtists.length > 0 && (
            <Section title="Artists">
              <MusicGrid 
                items={filteredArtists.map(artist => ({
                  id: artist.id,
                  title: artist.name,
                  artist: `${artist.monthlyListeners.toLocaleString()} monthly listeners`,
                  imageUrl: artist.imageUrl,
                  type: 'artist'
                }))}
                columns={5}
              />
            </Section>
          )}
          
          {filteredAlbums.length > 0 && (
            <Section title="Albums">
              <MusicGrid 
                items={filteredAlbums.map(album => ({
                  id: album.id,
                  title: album.title,
                  artist: album.artist,
                  imageUrl: album.imageUrl,
                  type: 'album'
                }))}
                columns={5}
              />
            </Section>
          )}
          
          {filteredPlaylists.length > 0 && (
            <Section title="Playlists">
              <MusicGrid 
                items={filteredPlaylists.map(playlist => ({
                  id: playlist.id,
                  title: playlist.title,
                  artist: playlist.creator,
                  imageUrl: playlist.imageUrl,
                  type: 'playlist'
                }))}
                columns={5}
              />
            </Section>
          )}
          
          {filteredTracks.length === 0 && filteredAlbums.length === 0 && 
           filteredArtists.length === 0 && filteredPlaylists.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-xl font-bold mb-2">No results found for "{searchQuery}"</h2>
              <p className="text-neutral-400">
                Please check your spelling or try different keywords
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;