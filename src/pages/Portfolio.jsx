import React from 'react';
import Project from '../components/Project';
import '../assets/styles/Portfolio.css';

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
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          repoLink={project.repoLink}
        />
      ))}
    </section>
  );
}

export default Portfolio;
