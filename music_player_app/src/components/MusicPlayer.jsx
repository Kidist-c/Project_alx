// src/components/MusicPlayer.jsx
import React, { useState, useEffect, useRef } from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage'
import MusicCard from './MusicCard';
import Searchbar from './Searchbar'
function MusicPlayer({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentTrack) {
      audioRef.current.src = currentTrack.preview;
      audioRef.current.load();
      setIsPlaying(true);
      audioRef.current.play().catch(error => {
        console.error("Autoplay prevented:", error);
        setIsPlaying(false);
      });
    }
  }, [currentTrack]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">
      {currentTrack ? (
        <>
          <h2 className="text-lg font-semibold">{currentTrack.title}</h2>
          <p className="text-gray-400">{currentTrack.artist.name}</p>
          <audio ref={audioRef} />
          <button onClick={togglePlayPause} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2">
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </>
      ) : (
        <p>No track selected.</p>
      )}
    </div>
  );
}

export default MusicPlayer;
