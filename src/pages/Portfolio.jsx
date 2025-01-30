import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';

// Array of project objects to be displayed in the portfolio
const projects = [
  {
    title: 'Green Pipe Analytics Website',
    image: '/assets/imgs/GPA Home.jpg',
    deployedLink: 'https://greenpipeanalytics.com',
    repoLink: 'https://github.com/yahm0/Green-Pipe-Analytics-Website',
  },
  {
    title: 'Terminal Softwares Website',
    image: '',
    deployedLink: 'https://terminalsoftware.gg',
    repoLink: 'https://github.com/yahm0/Terminal-Software-Website',
  },
  {
    title: 'Book Search Engine and Manager',
    image: '/assets/imgs/books.jpg',
    deployedLink:
      'https://book-search-engine-and-manager-16b16f7fd358.herokuapp.com/',
    repoLink: 'https://github.com/yahm0/Book-Search-Engine-And-Manager',
  },
  {
    title: 'Coming Soon...',
    image: '',
    deployedLink: '#',
    repoLink: '#',
  },
  {
    title: 'Coming Soon...',
    image: '',
    deployedLink: '#',
    repoLink: '#',
  },
];

function Portfolio() {
  return (
    <section className='portfolio'>
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
