import React, { useState } from 'react';
import deezerApi from './api/deezer';

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return; // Prevent empty searches

    try {
      const response = await deezerApi.get(`/search?q=${encodeURIComponent(query)}`);

      onSearchResults(response.data.data); // Pass search results to parent component
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a song, artist, or album"
        className="border rounded p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2">Search</button>
    </form>
  );
};

export default SearchBar;
