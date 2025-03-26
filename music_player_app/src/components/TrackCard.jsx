import React from 'react';

const TrackCard = ({ track }) => {
  return (
    <div className="border rounded p-4 mb-2 flex items-center">
      <img src={track.album.cover} alt={track.title} className="w-16 h-16 mr-4" />
      <div>
        <h3 className="font-semibold">{track.title}</h3>
        <p>{track.artist.name}</p>
      </div>
    </div>
  );
};

export default TrackCard;

