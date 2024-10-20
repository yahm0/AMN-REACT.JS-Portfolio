import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'; // Importing icons

function Footer() {
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
        <a
          href='https://stackoverflow.com/users/25155278/yahmo'
          aria-label='Stack Overflow'
        >
          <FaStackOverflow />
        </a>
      </div>
      <p>&copy; 2024 Adam Nuccio</p>
    </footer>
  );
}

export default Footer;
