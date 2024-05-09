import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAlbums } from '../services/albumsService';
import './Albums.scss';

interface Album {
  userId: number;
  id: number;
  title: string;
}

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchAlbums = async () => {
      const data = await getAlbums();
      setAlbums(data);
    };

    fetchAlbums();
  }, []);

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="albums-container">
      <h2 className="albums-title">Albums</h2>
      <input
        type="text"
        placeholder="Search albums..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="album-list">
        {filteredAlbums.map((album) => (
          <li key={album.id} className="album-item">
            <Link to={`/albums/${album.id}`} className="album-link">
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
