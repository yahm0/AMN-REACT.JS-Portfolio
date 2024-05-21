import React from 'react';
import '../assets/styles/Project.css';

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployedLink}>View Application</a>
      <a href={repoLink}>View Repository</a>
    </div>
  );
}

export default Project;
