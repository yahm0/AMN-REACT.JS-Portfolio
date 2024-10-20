import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header() {
  return (
    <header className='header'>
      <button className='logo-button' onClick={() => window.location.href = '/'}>Adam Nuccio</button>
      <div className='nav-container'>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
