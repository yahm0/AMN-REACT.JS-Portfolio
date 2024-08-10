import React from 'react';
import './styles/Resume.css';

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/src/assets/resume/ANResume2024_combined.pdf" download>Download Resume</a>
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
