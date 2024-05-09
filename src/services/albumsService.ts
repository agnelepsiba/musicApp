import axios from 'axios';

const ALBUMS_API_URL = 'https://jsonplaceholder.typicode.com/albums';
const SONGS_API_URL = 'https://jsonplaceholder.typicode.com/photos';

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface Song {
  albumId: number;
  id: number;
  title: string;
  url: string;
}

export async function getAlbums(): Promise<Album[]> {
  try {
    const response = await axios.get<Album[]>(ALBUMS_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    return [];
  }
}

export async function getSongs(albumId: number): Promise<Song[]> {
  try {
    const response = await axios.get<Song[]>(`${SONGS_API_URL}?albumId=${albumId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    return [];
  }
}

