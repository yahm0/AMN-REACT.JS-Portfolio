import React from 'react';
import Project from '../components/Project';
import '../assets/styles/Portfolio.css';

// Array of project objects to be displayed in the portfolio
const projects = [
  {
    title: 'Book Search Engine and Manager',
    image: '',
    deployedLink: 'https://book-search-engine-and-manager-16b16f7fd358.herokuapp.com/',
    repoLink: 'https://github.com/yahm0/Book-Search-Engine-And-Manager'
  },
  {
    title: 'PWA Text Editor',
    image: '',
    deployedLink: 'https://pwa-text-editor-y0ld.onrender.com/',
    repoLink: 'https://github.com/yahm0/PWA-Text-Editor'
  },
  {
    title: 'Terminal Softwares Website',
    image: '',
    deployedLink: 'https://terminalsoftware.gg',
    repoLink: 'https://github.com/yahm0/Terminal-Software-Website'
  },
  // Add more projects as needed
];

function Portfolio() {
  return (
    <section className="portfolio">
      {/* Map over the projects array to render a Project component for each project */}
      {projects.map((project, index) => (
        <Project
          key={index} // Unique key for each Project component
          title={project.title} // Project title
          image={project.image} // Project image
          deployedLink={project.deployedLink} // Link to deployed project
          repoLink={project.repoLink} // Link to project's GitHub repository
        />
      ))}
    </section>
  );
}

export default Portfolio;
