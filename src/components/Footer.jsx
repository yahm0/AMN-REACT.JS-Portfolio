import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin /*, FaStackOverflow*/ } from 'react-icons/fa'; // Importing icons

function Footer() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <footer className='footer'>
      <div className='footer-icons'>
        <a href='https://github.com/yahm0' aria-label='GitHub'>
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/adam-nuccio/'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
      </div>
      <p>&copy; 2026 Adam Nuccio</p>
      <p className='footer-updated'>Last updated: {lastUpdated}</p>
    </footer>
  );
}

export default Footer;
