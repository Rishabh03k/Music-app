import React, { useState } from 'react';
import { Edit, User, LogOut, Bell, Settings, Moon, Volume, Shield } from 'lucide-react';
import { mockTracks } from '../data/mockData';
import TrackList from '../components/TrackList';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'account' | 'preferences' | 'privacy'>('account');
  
  return (
    <div className="pb-20">
      <h1 className="text-4xl font-bold mb-8">Your Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-background-card rounded-lg p-6 mb-4 flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-neutral-800 flex items-center justify-center">
                <User size={36} className="text-neutral-400" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                <Edit size={16} className="text-white" />
              </button>
            </div>
            
            <h2 className="text-xl font-bold mb-1">Alex Johnson</h2>
            <p className="text-neutral-400 text-sm mb-4">alex.johnson@example.com</p>
            
            <button className="btn btn-secondary w-full">
              <div className="flex items-center justify-center gap-2">
                <LogOut size={16} />
                <span>Log Out</span>
              </div>
            </button>
          </div>
          
          <div className="bg-background-card rounded-lg overflow-hidden">
            <button 
              className={`w-full text-left px-4 py-3 flex items-center gap-3 ${activeTab === 'account' ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'}`}
              onClick={() => setActiveTab('account')}
            >
              <User size={18} />
              <span>Account</span>
            </button>
            
            <button 
              className={`w-full text-left px-4 py-3 flex items-center gap-3 ${activeTab === 'preferences' ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'}`}
              onClick={() => setActiveTab('preferences')}
            >
              <Settings size={18} />
              <span>Preferences</span>
            </button>
            
            <button 
              className={`w-full text-left px-4 py-3 flex items-center gap-3 ${activeTab === 'privacy' ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'}`}
              onClick={() => setActiveTab('privacy')}
            >
              <Shield size={18} />
              <span>Privacy</span>
            </button>
          </div>
        </div>
        
        {/* Main content */}
        <div className="md:col-span-3">
          {activeTab === 'account' && (
            <div>
              <div className="bg-background-card rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Account Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">Username</label>
                    <input 
                      type="text" 
                      value="alexjohnson"
                      className="w-full bg-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">Email</label>
                    <input 
                      type="email" 
                      value="alex.johnson@example.com"
                      className="w-full bg-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">Date of Birth</label>
                    <div className="flex gap-2">
                      <select className="bg-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                        {Array.from({ length: 31 }, (_, i) => (
                          <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                      
                      <select className="bg-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => (
                          <option key={i} value={i + 1}>{month}</option>
                        ))}
                      </select>
                      
                      <select className="bg-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                        {Array.from({ length: 100 }, (_, i) => (
                          <option key={i} value={2023 - i}>{2023 - i}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <button className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-background-card rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Recently Played</h2>
                
                <TrackList 
                  tracks={mockTracks.slice(0, 5)} 
                  showHeader={false}
                  showAlbum={true}
                  showArtist={true}
                />
              </div>
            </div>
          )}
          
          {activeTab === 'preferences' && (
            <div className="bg-background-card rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Preferences</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Bell size={18} />
                    <span>Notifications</span>
                  </h3>
                  
                  <div className="space-y-3 pl-7">
                    <div className="flex items-center justify-between">
                      <label className="text-neutral-300">New music from artists you follow</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-neutral-300">Playlist updates</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-neutral-300">Friend activity</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Moon size={18} />
                    <span>Appearance</span>
                  </h3>
                  
                  <div className="space-y-3 pl-7">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-neutral-800 p-3 rounded-lg border-2 border-primary">
                        <div className="w-full h-24 bg-background rounded-md mb-2"></div>
                        <p className="text-center text-sm">Dark</p>
                      </div>
                      <div className="bg-neutral-800 p-3 rounded-lg">
                        <div className="w-full h-24 bg-neutral-200 rounded-md mb-2"></div>
                        <p className="text-center text-sm">Light</p>
                      </div>
                      <div className="bg-neutral-800 p-3 rounded-lg">
                        <div className="w-full h-24 rounded-md mb-2 bg-gradient-to-b from-neutral-200 to-background"></div>
                        <p className="text-center text-sm">System</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Volume size={18} />
                    <span>Playback</span>
                  </h3>
                  
                  <div className="space-y-4 pl-7">
                    <div>
                      <label className="block text-neutral-300 mb-2">Audio Quality</label>
                      <select className="w-full bg-neutral-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Automatic</option>
                        <option>Low</option>
                        <option>Normal</option>
                        <option>High</option>
                        <option>Very High</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-neutral-300 mb-2">Volume Level</label>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value="80" 
                        className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-neutral-300">Enable gapless playback</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'privacy' && (
            <div className="bg-background-card rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Privacy Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Social Sharing</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-neutral-300">Share my listening activity on MelodyStream</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-neutral-300">Show my recently played artists</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-neutral-300">Make my playlists public</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Data</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-neutral-300">Use my data to improve recommendations</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-neutral-300">Personalized ads based on my preferences</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <button className="btn btn-secondary text-sm">Download My Data</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;