import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="rmdb-header">
    <div className="rmdb-header-content">
      <Link to="/">
        <img className="movie-reel-logo" src="/images/movie_reel_logo.jpg" width="160" height="90" alt="movie-reel-logo" />
      </Link>
      <h1 className="heading-text">Movie Mania</h1>
    </div>
  </div>
)

export default Header;