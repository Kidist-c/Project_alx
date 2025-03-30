
import { useState, useEffect, useRef } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import MusicCard from './MusicCard';
import SearchBar from './SearchBar';

const MusicPlayer = () => {
  const [tracks, setTracks] = useLocalStorage('deezer_tracks', []);
  const [favorites, setFavorites] = useLocalStorage('favorite_tracks', []);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const handleSearch = (results) => {
    const tracksWithFavorites = results.map(track => ({
      ...track,
      isFavorite: favorites.some(fav => fav.id === track.id)
    }));
    setTracks(tracksWithFavorites);
  };

  const handlePlay = (track) => {
    if (currentTrack && currentTrack.id === track.id) {
      // Toggle play/pause for current track
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      // Play new track
      setCurrentTrack({ ...track, progress: 0 });
      setIsPlaying(true);
      // The audio element's onPlay event will handle the actual playing
    }
  };

  const toggleFavorite = (trackId) => {
    const updatedTracks = tracks.map(track => {
      if (track.id === trackId) {
        const updatedTrack = { ...track, isFavorite: !track.isFavorite };
        
        // Update favorites list
        if (updatedTrack.isFavorite) {
          setFavorites(prev => [...prev, updatedTrack]);
        } else {
          setFavorites(prev => prev.filter(fav => fav.id !== trackId));
        }
        
        return updatedTrack;
      }
      return track;
    });
    
    setTracks(updatedTracks);
  };

  // Handle audio playback
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio.duration) {
        const newProgress = (audio.currentTime / audio.duration) * 100;
        setProgress(newProgress);
        setCurrentTrack(prev => prev ? { ...prev, progress: newProgress } : null);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Play/pause when currentTrack or isPlaying changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (currentTrack) {
      audioRef.current.src = currentTrack.preview;
      audioRef.current.load();
      
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Playback failed:', error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentTrack, isPlaying]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Deezer Music Player</h1>
      
      <SearchBar onSearch={handleSearch} />
      
      <audio ref={audioRef} />
      
      <div className="space-y-3">
        {tracks.length === 0 ? (
          <p className="text-center text-gray-500">Search for songs to display results</p>
        ) : (
          tracks.map(track => (
            <MusicCard
              key={track.id}
              track={track}
              isPlaying={isPlaying}
              currentTrack={currentTrack}
              onPlay={handlePlay}
              onToggleFavorite={toggleFavorite}
            />
          ))
        )}
      </div>
      
      {favorites.length > 0 && (


<div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Your Favorites</h2>
          <div className="space-y-3">
            {favorites.map(track => (
              <MusicCard
                key={track.id}
                track={track}
                isPlaying={isPlaying}
                currentTrack={currentTrack}
                onPlay={handlePlay}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;