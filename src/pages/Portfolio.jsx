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
    title: 'Junk Twitter',
    image: '',
    deployedLink: 'https://junk-twitter-1f692e920bc6.herokuapp.com/login',
    repoLink: 'https://github.com/yahm0/Junk-Twitter',
  },
  {
    title: 'Book Search Engine and Manager',
    image: '/assets/imgs/books.jpg',
    deployedLink:
      'https://book-search-engine-and-manager-16b16f7fd358.herokuapp.com/',
    repoLink: 'https://github.com/yahm0/Book-Search-Engine-And-Manager',
  },
  {
    title: 'Eventii Management Platform',
    image: '',
    deployedLink: 'https://eventii-management-platform-l6xt.onrender.com/',
    repoLink: 'https://github.com/yahm0/Eventii-Management-Platform',
  },
  {
    title: 'Accurate Employee Tracker',
    image: '/assets/imgs/AET.jpg',
    deployedLink: '',
    repoLink: 'https://github.com/yahm0/Accurate-Employee-Tracker',
  },
  // {
  //   title: 'Muscle Growth Near Me',
  //   image: '',
  //   deployedLink: 'https://yahm0.github.io/Muscle-Growth-Near-Me/',
  //   repoLink: 'https://github.com/yahm0/Gym-Finder'
  // },
  // Add more projects as needed
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
