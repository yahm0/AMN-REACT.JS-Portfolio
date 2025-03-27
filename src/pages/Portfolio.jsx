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
    title: 'Infrastructure as Code Example',
    image: '/assets/imgs/iac_thumbnail.png', // replace with actual path or URL
    deployedLink: '#', // link to live demo if applicable
    repoLink: 'https://github.com/yahm0/Infrastructure-as-Code-Example',
  },
  {
    title: 'Analytics Pipeline Showcase',
    image: '/assets/imgs/analytics_pipeline.png', // replace with actual path or URL
    deployedLink: '#', // optional: link to public dashboard or demo
    repoLink: 'https://github.com/yahm0/Analytics-Pipeline-Showcase',
  },
  {
    title: 'Machine Learning with SageMaker',
    image: '/assets/imgs/sagemaker_demo.png', // replace with actual path or URL
    deployedLink: '#', // optional: link to API endpoint or demo video
    repoLink: 'https://github.com/yahm0/Machine-Learning-with-SageMaker',
  }
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
