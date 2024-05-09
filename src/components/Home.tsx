
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home: React.FC = () => {
  return (
   
    <div className="home-container">
    <h2 className="title">Welcome to Lumel Music</h2>
    <Link to="/albums" className="link">Explore Albums</Link>
  </div>
  );
}

export default Home;
