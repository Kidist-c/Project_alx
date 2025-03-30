import { FaPlay, FaPause, FaHeart, FaRegHeart } from 'react-icons/fa';

const MusicCard = ({ 
  track, 
  isPlaying, 
  currentTrack, 
  onPlay, 
  onToggleFavorite 
}) => {
  const isCurrentTrack = currentTrack?.id === track.id;
  const isFavorite = track.isFavorite || false;

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md transition-all ${isCurrentTrack ? 'ring-2 ring-purple-500' : ''}`}>
      <div className="flex items-center gap-4">
        <img 
          src={track.album?.cover_medium || 'https://via.placeholder.com/150'} 
          alt={track.title} 
          className="w-16 h-16 rounded-lg object-cover"
        />
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg truncate">{track.title}</h3>
          <p className="text-gray-600">{track.artist?.name}</p>
          <p className="text-sm text-gray-500">{track.album?.title}</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => onPlay(track)}
            className="p-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
          >
            {isCurrentTrack && isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          
          <button 
            onClick={() => onToggleFavorite(track.id)}
            className="p-2 text-red-500 rounded-full hover:bg-red-50 transition-colors"
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
      
      {isCurrentTrack && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className="bg-purple-600 h-1.5 rounded-full" 
              style={`{ width: ${currentTrack.progress || 0}% }`}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicCard;