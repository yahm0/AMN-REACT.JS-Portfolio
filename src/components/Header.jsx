import React from 'react';
import Navigation from './Navigation';
import { FaGithub, FaLinkedin /*, FaStackOverflow*/ } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='logo-section'>
        <Link to='/' className='logo-button'>
          <span className='logo-text'>Adam Nuccio</span>
        </Link>
        <div className='header-icons'>
          <a href='https://github.com/yahm0' aria-label='GitHub'>
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/adam-nuccio/'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
          {/* <a
            href='https://stackoverflow.com/users/25155278/yahmo'
            aria-label='Stack Overflow'
          >
            <FaStackOverflow />
          </a> */}
        </div>
      </div>
      <div className='nav-container'>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
