import React from 'react';
import '../styles/Project.css';

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className='project'>
      {image && <img src={image} alt={title} />}{' '}
      {/* Render image only if provided */}
      <h3>{title}</h3> {/* Ensure title is only rendered once */}
      <div className='project-links'>
        <a href={deployedLink} target='_blank' rel='noopener noreferrer'>
          View Application
        </a>
        <a href={repoLink} target='_blank' rel='noopener noreferrer'>
          View Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
