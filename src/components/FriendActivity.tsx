import React from 'react';
import { Users, X } from 'lucide-react';

interface FriendActivityProps {
  className?: string;
}

const FriendActivity: React.FC<FriendActivityProps> = ({ className }) => {
  const onlineFriends = [
    { id: 1, name: 'Alex Johnson', imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', song: 'Blinding Lights', artist: 'The Weeknd', timeAgo: '2m' },
    { id: 2, name: 'Jamie Smith', imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', song: 'As It Was', artist: 'Harry Styles', timeAgo: '10m' },
    { id: 3, name: 'Taylor Wilson', imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg', song: 'Bad Habit', artist: 'Steve Lacy', timeAgo: '15m' },
    { id: 4, name: 'Morgan Lee', imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg', song: 'Shivers', artist: 'Ed Sheeran', timeAgo: '1h' },
    { id: 5, name: 'Casey Rivera', imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg', song: 'Happier Than Ever', artist: 'Billie Eilish', timeAgo: '2h' },
  ];

  return (
    <aside className={`bg-background p-4 overflow-y-auto border-l border-neutral-800 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users size={20} />
          <h2 className="font-bold text-lg">Friend Activity</h2>
        </div>
        <button className="btn-icon">
          <X size={18} />
        </button>
      </div>
      
      <div className="space-y-4">
        {onlineFriends.map(friend => (
          <div key={friend.id} className="flex items-start gap-3 animate-fade-in">
            <div className="relative">
              <img 
                src={friend.imageUrl} 
                alt={friend.name} 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium truncate">{friend.name}</h4>
              <p className="text-xs text-neutral-400 truncate">{friend.song}</p>
              <p className="text-xs text-neutral-400 truncate">{friend.artist}</p>
            </div>
            
            <span className="text-xs text-neutral-500">{friend.timeAgo}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-xs text-neutral-400 mb-3">
          Find friends who use MelodyStream
        </p>
        <button className="btn btn-secondary text-sm">
          Find Friends
        </button>
      </div>
    </aside>
  );
};

export default FriendActivity;