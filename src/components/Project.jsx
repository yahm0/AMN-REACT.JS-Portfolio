import React from 'react';
import '../styles/Project.css';

function Project({ title, image, deployedLink, repoLink, description }) {
  return (
    <div className='project'>
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      {description && <p className='project-description'>{description}</p>}
      <div className='project-links'>
        {deployedLink && (
          <a href={deployedLink} target='_blank' rel='noopener noreferrer'>
            View Site
          </a>
        )}
        {repoLink && (
          <a href={repoLink} target='_blank' rel='noopener noreferrer'>
            View Repository
          </a>
        )}
      </div>
    </div>
  );
}

export default React.memo(Project);
