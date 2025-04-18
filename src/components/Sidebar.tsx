import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Search, Library, PlusCircle, Heart, Users } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={`bg-background p-4 overflow-y-auto ${className}`}>
      <div className="flex items-center gap-2 mb-8 pl-4">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Users size={18} className="text-white" />
        </div>
        <h1 className="text-xl font-bold">MelodyStream</h1>
      </div>
      
      <nav className="mb-8">
        <ul className="space-y-1">
          <li>
            <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} end>
              <Home size={20} />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              <Compass size={20} />
              <span>Explore</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              <Search size={20} />
              <span>Search</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/library" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              <Library size={20} />
              <span>Your Library</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className="mb-6">
        <h2 className="text-sm uppercase font-bold text-neutral-400 px-4 mb-3">Your Playlists</h2>
        <button className="flex items-center gap-2 px-4 py-2 text-neutral-400 hover:text-white transition-colors">
          <PlusCircle size={18} />
          <span>Create Playlist</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-neutral-400 hover:text-white transition-colors">
          <Heart size={18} />
          <span>Liked Songs</span>
        </button>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-sm uppercase font-bold text-neutral-400 px-4 mb-3">Your Playlists</h2>
        {Array.from({ length: 8 }).map((_, i) => (
          <NavLink 
            key={i} 
            to={`/playlist/${i + 1}`}
            className="block px-4 py-2 text-sm text-neutral-400 hover:text-white truncate"
          >
            {['Chill Vibes', 'Workout Mix', 'Coding Focus', 'Relaxing Jazz', 'Road Trip', 'Morning Coffee', 'Evening Wind Down', 'Throwback Hits'][i]}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;