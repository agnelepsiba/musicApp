import React, { useState, useEffect } from 'react';
import './AlbumDetails.scss';
import { useParams } from 'react-router-dom';
import { getSongs } from '../services/albumsService';

interface Song {
  albumId: number;
  id: number;
  title: string;
  url: string;
}

const AlbumDetails: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const [songs, setSongs] = useState<Song[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await getSongs(albumId ? parseInt(albumId, 10) : 0);
      setSongs(data);
    };

    fetchSongs();
  }, [albumId]);

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="album-details-container">
      <h2 className="album-title">Album Details</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search songs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <h3>Songs</h3>
      <ul className="song-list">
        {filteredSongs.map((song) => (
          <li key={song.id} className="song-item">
            <a href={song.url} className="song-link">{song.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumDetails;
