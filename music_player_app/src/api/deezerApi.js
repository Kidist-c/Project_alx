import axios from 'axios';

const API_BASE = 'https://api.deezer.com';

export const searchTracks = async (query) => {
  try {
    const response = await axios.get(`${API_BASE}/search?q=${query}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching tracks:', error);
    return [];
  }
};

export const getTrack = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}/track/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching track:', error);
    return null;
  }
}