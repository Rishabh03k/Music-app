export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  releaseDate: string;
  tracks: Track[];
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  creator: string;
  imageUrl: string;
  tracks: Track[];
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  monthlyListeners: number;
  biography: string;
  albums: Album[];
  topTracks: Track[];
}

export interface User {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
  playlists: Playlist[];
  likedSongs: Track[];
  likedAlbums: Album[];
  followingArtists: Artist[];
  recentlyPlayed: Track[];
}