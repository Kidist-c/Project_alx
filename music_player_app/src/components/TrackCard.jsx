// src/components/TrackList.jsx
import React from 'react';

function TrackList({ tracks, onSelectTrack }) {
  return (
    <ul className="divide-y divide-gray-200">
      {tracks.map((track) => (
        <li
          key={track.id}
          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelectTrack(track)}
        >
          <div className="flex items-center space-x-3">
            <div>
              <p className="text-gray-800 font-medium">{track.title}</p>
              <p className="text-gray-500">{track.artist.name}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TrackList;
