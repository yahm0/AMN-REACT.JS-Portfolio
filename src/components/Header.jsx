import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Adam Nuccio</h1>
      <div className="nav-container">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
