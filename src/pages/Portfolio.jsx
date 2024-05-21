import React from 'react';
import Project from '../components/Project';
import '../assets/styles/Portfolio.css';

// Array of project objects to be displayed in the portfolio
const projects = [
  {
    title: 'Project 1',
    image: '/path-to-project1.png',
    deployedLink: 'https://deployed-link1.com',
    repoLink: 'https://github.com/repo1'
  },
  {
    title: 'Project 2',
    image: '/path-to-project2.png',
    deployedLink: 'https://deployed-link2.com',
    repoLink: 'https://github.com/repo2'
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
