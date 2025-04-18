import React, { useState } from 'react';
import { Grid, List as ListIcon, Music, Mic2, Clock, PlayCircle, Plus } from 'lucide-react';
import MusicGrid from '../components/section/MusicGrid';
import TrackList from '../components/TrackList';
import { mockPlaylists, mockAlbums, mockArtists, mockTracks } from '../data/mockData';

const Library: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'playlists' | 'albums' | 'artists' | 'songs'>('playlists');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const renderContent = () => {
    switch (activeTab) {
      case 'playlists':
        return viewMode === 'grid' ? (
          <MusicGrid 
            items={mockPlaylists.map(playlist => ({
              id: playlist.id,
              title: playlist.title,
              artist: playlist.creator,
              imageUrl: playlist.imageUrl,
              type: 'playlist'
            }))}
            columns={5}
          />
        ) : (
          <TrackList 
            tracks={mockTracks} 
            showHeader={true}
            showArtist={true}
            showAlbum={true}
          />
        );
      
      case 'albums':
        return (
          <MusicGrid 
            items={mockAlbums.map(album => ({
              id: album.id,
              title: album.title,
              artist: album.artist,
              imageUrl: album.imageUrl,
              type: 'album'
            }))}
            columns={5}
          />
        );
      
      case 'artists':
        return (
          <MusicGrid 
            items={mockArtists.map(artist => ({
              id: artist.id,
              title: artist.name,
              artist: `${artist.monthlyListeners.toLocaleString()} monthly listeners`,
              imageUrl: artist.imageUrl,
              type: 'artist'
            }))}
            columns={5}
          />
        );
      
      case 'songs':
        return (
          <TrackList 
            tracks={mockTracks} 
            showHeader={true}
            showArtist={true}
            showAlbum={true}
          />
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold">Your Library</h1>
        
        <div className="flex items-center gap-2">
          <button 
            className="btn-icon"
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          >
            {viewMode === 'grid' ? (
              <ListIcon size={20} />
            ) : (
              <Grid size={20} />
            )}
          </button>
          
          <button className="btn btn-secondary">
            <div className="flex items-center gap-2">
              <Plus size={18} />
              <span>New Playlist</span>
            </div>
          </button>
        </div>
      </div>
      
      <div className="mb-6 border-b border-neutral-800">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === 'playlists' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'}`}
            onClick={() => setActiveTab('playlists')}
          >
            <div className="flex items-center gap-2">
              <PlayCircle size={16} />
              <span>Playlists</span>
            </div>
          </button>
          
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === 'albums' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'}`}
            onClick={() => setActiveTab('albums')}
          >
            <div className="flex items-center gap-2">
              <Music size={16} />
              <span>Albums</span>
            </div>
          </button>
          
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === 'artists' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'}`}
            onClick={() => setActiveTab('artists')}
          >
            <div className="flex items-center gap-2">
              <Mic2 size={16} />
              <span>Artists</span>
            </div>
          </button>
          
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === 'songs' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'}`}
            onClick={() => setActiveTab('songs')}
          >
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Songs</span>
            </div>
          </button>
        </div>
      </div>
      
      <div className="animate-fade-in">
        {renderContent()}
      </div>
    </div>
  );
};

export default Library;