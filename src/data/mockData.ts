import { Track, Album, Playlist, Artist } from '../types';

// Mock Tracks
export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    imageUrl: 'https://images.pexels.com/photos/1671597/pexels-photo-1671597.jpeg',
  },
  {
    id: '2',
    title: 'As It Was',
    artist: 'Harry Styles',
    album: "Harry's House",
    duration: '2:47',
    imageUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
  },
  {
    id: '3',
    title: 'Stay',
    artist: 'The Kid LAROI, Justin Bieber',
    album: 'F*CK LOVE 3: OVER YOU',
    duration: '2:21',
    imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
  },
  {
    id: '4',
    title: 'Easy On Me',
    artist: 'Adele',
    album: '30',
    duration: '3:44',
    imageUrl: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg',
  },
  {
    id: '5',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    album: 'Dreamland',
    duration: '3:58',
    imageUrl: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg',
  },
  {
    id: '6',
    title: 'Bad Habits',
    artist: 'Ed Sheeran',
    album: '=',
    duration: '3:51',
    imageUrl: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
  },
  {
    id: '7',
    title: 'STAY',
    artist: 'The Kid LAROI, Justin Bieber',
    album: 'F*CK LOVE 3: OVER YOU',
    duration: '2:21',
    imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
  },
  {
    id: '8',
    title: 'good 4 u',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: '2:58',
    imageUrl: 'https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg',
  },
  {
    id: '9',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:23',
    imageUrl: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg',
  },
  {
    id: '10',
    title: 'MONTERO (Call Me By Your Name)',
    artist: 'Lil Nas X',
    album: 'MONTERO',
    duration: '2:17',
    imageUrl: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg',
  },
];

// Mock Albums
export const mockAlbums: Album[] = [
  {
    id: '1',
    title: 'After Hours',
    artist: 'The Weeknd',
    imageUrl: 'https://images.pexels.com/photos/1671597/pexels-photo-1671597.jpeg',
    releaseDate: '2020-03-20',
    tracks: mockTracks.slice(0, 5),
  },
  {
    id: '2',
    title: "Harry's House",
    artist: 'Harry Styles',
    imageUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
    releaseDate: '2022-05-20',
    tracks: mockTracks.slice(1, 6),
  },
  {
    id: '3',
    title: 'SOUR',
    artist: 'Olivia Rodrigo',
    imageUrl: 'https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg',
    releaseDate: '2021-05-21',
    tracks: mockTracks.slice(2, 7),
  },
  {
    id: '4',
    title: 'Future Nostalgia',
    artist: 'Dua Lipa',
    imageUrl: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg',
    releaseDate: '2020-03-27',
    tracks: mockTracks.slice(3, 8),
  },
  {
    id: '5',
    title: '30',
    artist: 'Adele',
    imageUrl: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg',
    releaseDate: '2021-11-19',
    tracks: mockTracks.slice(4, 9),
  },
  {
    id: '6',
    title: 'Dreamland',
    artist: 'Glass Animals',
    imageUrl: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg',
    releaseDate: '2020-08-07',
    tracks: mockTracks.slice(5, 10),
  },
];

// Mock Playlists
export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    title: 'Chill Vibes',
    description: 'Relax and unwind with these smooth tracks',
    creator: 'MelodyStream',
    imageUrl: 'https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg',
    tracks: mockTracks.slice(0, 8),
  },
  {
    id: '2',
    title: 'Workout Mix',
    description: 'High energy tracks to fuel your workout',
    creator: 'MelodyStream',
    imageUrl: 'https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg',
    tracks: mockTracks.slice(1, 9),
  },
  {
    id: '3',
    title: 'Coding Focus',
    description: 'Concentrate and code with these focused beats',
    creator: 'MelodyStream',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    tracks: mockTracks.slice(2, 10),
  },
  {
    id: '4',
    title: 'Relaxing Jazz',
    description: 'Smooth jazz for your relaxation',
    creator: 'MelodyStream',
    imageUrl: 'https://images.pexels.com/photos/4087991/pexels-photo-4087991.jpeg',
    tracks: mockTracks.slice(0, 6),
  },
  {
    id: '5',
    title: 'Road Trip',
    description: 'Perfect tracks for the open road',
    creator: 'MelodyStream',
    imageUrl: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
    tracks: mockTracks.slice(3, 8),
  },
  {
    id: '6',
    title: 'Morning Coffee',
    description: 'Start your day right with these tracks',
    creator: 'MelodyStream',
    imageUrl: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    tracks: mockTracks.slice(1, 6),
  },
];

// Mock Artists
export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'The Weeknd',
    imageUrl: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg',
    monthlyListeners: 85433921,
    biography: 'Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.',
    albums: [mockAlbums[0]],
    topTracks: mockTracks.slice(0, 5),
  },
  {
    id: '2',
    name: 'Dua Lipa',
    imageUrl: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg',
    monthlyListeners: 65340123,
    biography: 'Dua Lipa is an English singer and songwriter. After working as a model, she signed with Warner Music Group in 2015.',
    albums: [mockAlbums[3]],
    topTracks: mockTracks.slice(8, 10).concat(mockTracks.slice(0, 3)),
  },
  {
    id: '3',
    name: 'Harry Styles',
    imageUrl: 'https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg',
    monthlyListeners: 74569023,
    biography: 'Harry Edward Styles is an English singer, songwriter, and actor. His musical career began in 2010 as a solo contestant on the British music competition series The X Factor.',
    albums: [mockAlbums[1]],
    topTracks: mockTracks.slice(1, 6),
  },
  {
    id: '4',
    name: 'Olivia Rodrigo',
    imageUrl: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
    monthlyListeners: 58345678,
    biography: 'Olivia Isabel Rodrigo is an American singer-songwriter and actress. She gained recognition in the late 2010s with her lead roles on the Disney television programs.',
    albums: [mockAlbums[2]],
    topTracks: mockTracks.slice(2, 7),
  },
  {
    id: '5',
    name: 'Adele',
    imageUrl: 'https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg',
    monthlyListeners: 61234567,
    biography: 'Adele Laurie Blue Adkins MBE is an English singer-songwriter. She is known for her powerful mezzo-soprano vocals and songwriting.',
    albums: [mockAlbums[4]],
    topTracks: mockTracks.slice(3, 8),
  },
  {
    id: '6',
    name: 'Glass Animals',
    imageUrl: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg',
    monthlyListeners: 32567890,
    biography: 'Glass Animals are an English indie rock band formed in Oxford in 2010. Led by singer, songwriter, and producer Dave Bayley, the group also features his childhood friends Joe Seaward, Ed Irwin-Singer and Drew MacFarlane.',
    albums: [mockAlbums[5]],
    topTracks: mockTracks.slice(4, 9),
  },
];

// Recommended Playlists (based on listening history)
export const recommendedPlaylists = mockPlaylists.slice(0, 4);

// New Releases
export const newReleases = mockAlbums.slice(0, 4);

// Trending Artists
export const trendingArtists = mockArtists.slice(0, 4);

// Made For You
export const madeForYou = [
  {
    id: '1',
    title: 'Daily Mix 1',
    artist: 'Based on your listening',
    imageUrl: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg',
    type: 'playlist',
  },
  {
    id: '2',
    title: 'Daily Mix 2',
    artist: 'Based on your listening',
    imageUrl: 'https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg',
    type: 'playlist',
  },
  {
    id: '3',
    title: 'Discover Weekly',
    artist: 'New discoveries every Monday',
    imageUrl: 'https://images.pexels.com/photos/1292845/pexels-photo-1292845.jpeg',
    type: 'playlist',
  },
  {
    id: '4',
    title: 'Release Radar',
    artist: 'New from artists you follow',
    imageUrl: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
    type: 'playlist',
  },
];

// Genres
export const genres = [
  { id: '1', name: 'Pop', color: '#8c67ab' },
  { id: '2', name: 'Hip-Hop', color: '#ba5d08' },
  { id: '3', name: 'Rock', color: '#e61e32' },
  { id: '4', name: 'Electronic', color: '#0d73ec' },
  { id: '5', name: 'R&B', color: '#148a08' },
  { id: '6', name: 'Jazz', color: '#8c1932' },
  { id: '7', name: 'Classical', color: '#7d4b32' },
  { id: '8', name: 'Country', color: '#9cf0e1' },
];