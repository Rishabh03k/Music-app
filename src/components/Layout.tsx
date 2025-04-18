import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Player from './Player';
import FriendActivity from './FriendActivity';
import usePlayerStore from '../stores/playerStore';

const Layout: React.FC = () => {
  const isPlaying = usePlayerStore(state => state.isPlaying);
  
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Always visible on desktop, collapsible on mobile */}
        <Sidebar className="hidden md:block w-64 flex-shrink-0" />
        
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-28">
          <Outlet />
        </main>
        
        {/* Friend activity - Only visible on larger screens */}
        <FriendActivity className="hidden xl:block w-64 flex-shrink-0" />
      </div>
      
      {/* Fixed player at the bottom */}
      <Player className={`fixed bottom-0 w-full z-10 ${isPlaying ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`} />
    </div>
  );
};

export default Layout;