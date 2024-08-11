import React from 'react';
import '../styles/Resume.css';

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="assets/resume/ANResume2024_combined.pdf" download className="resume-download">
        Download Resume
      </a>
      {/* Add more content as needed */}
    </section>
  );
}

export default Resume;
