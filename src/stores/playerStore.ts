import { create } from 'zustand';
import { Track } from '../types';

interface PlayerState {
  currentTrack: Track | null;
  queue: Track[];
  history: Track[];
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  repeatMode: 'off' | 'all' | 'one';
  isShuffled: boolean;
  
  // Actions
  playTrack: (track: Track) => void;
  togglePlayPause: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
  addToQueue: (track: Track) => void;
  clearQueue: () => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  toggleRepeat: () => void;
  toggleShuffle: () => void;
}

const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  queue: [],
  history: [],
  isPlaying: false,
  volume: 80,
  isMuted: false,
  repeatMode: 'off',
  isShuffled: false,
  
  playTrack: (track: Track) => {
    const current = get().currentTrack;
    
    set(state => ({
      currentTrack: track,
      isPlaying: true,
      history: current ? [...state.history, current] : state.history,
    }));
  },
  
  togglePlayPause: () => {
    set(state => ({ isPlaying: !state.isPlaying }));
  },
  
  nextTrack: () => {
    const { queue, currentTrack, history, repeatMode } = get();
    
    if (queue.length > 0) {
      const nextTrack = queue[0];
      const newQueue = queue.slice(1);
      
      set({
        currentTrack: nextTrack,
        queue: newQueue,
        history: currentTrack ? [...history, currentTrack] : history,
        isPlaying: true,
      });
    } else if (repeatMode === 'all' && history.length > 0) {
      // Repeat all tracks in history
      set({
        queue: history,
        history: [],
      });
      get().nextTrack();
    } else {
      // No next track available
      set({ isPlaying: false });
    }
  },
  
  previousTrack: () => {
    const { history, currentTrack } = get();
    
    if (history.length > 0) {
      const prevTrack = history[history.length - 1];
      const newHistory = history.slice(0, -1);
      
      set({
        currentTrack: prevTrack,
        history: newHistory,
        queue: currentTrack ? [currentTrack, ...get().queue] : get().queue,
        isPlaying: true,
      });
    }
  },
  
  addToQueue: (track: Track) => {
    set(state => ({
      queue: [...state.queue, track],
    }));
  },
  
  clearQueue: () => {
    set({ queue: [] });
  },
  
  setVolume: (volume: number) => {
    set({
      volume,
      isMuted: volume === 0,
    });
  },
  
  toggleMute: () => {
    set(state => ({
      isMuted: !state.isMuted,
    }));
  },
  
  toggleRepeat: () => {
    set(state => ({
      repeatMode: 
        state.repeatMode === 'off' ? 'all' :
        state.repeatMode === 'all' ? 'one' : 'off',
    }));
  },
  
  toggleShuffle: () => {
    set(state => ({
      isShuffled: !state.isShuffled,
      queue: state.isShuffled ? state.queue : [...state.queue].sort(() => Math.random() - 0.5),
    }));
  },
}));

export default usePlayerStore;