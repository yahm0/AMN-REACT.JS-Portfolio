import React from 'react';
import '../assets/styles/Resume.css';

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/path-to-your-resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
}

export default Resume;
