import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';

// Array of project objects to be displayed in the portfolio
const projects = [
  {
    title: 'Atlas Ingest',
    image: '', // No image for this project
    repoLink: 'https://github.com/yahm0/Atlas-Ingest',
    description: 'Production-grade, serverless financial document ingestion and AI processing pipeline. End-to-end system that automatically acquires, validates, processes, and transforms financial documents (SEC filings, 10-Ks, 10-Qs, 8-Ks) into structured, searchable knowledge using AWS AI services and modern cloud architecture.'
  },
  {
    title: 'Lyra Insight',
    image: '', // No image for this project
    repoLink: 'https://github.com/yahm0/Lyra-Insight',
    description: 'RAG + Custom Models (AI Agent & Analytics)'
  },
  {
    title: 'Quant Analytics Notebook',
    image: '', // No image for this project
    repoLink: 'https://github.com/yahm0/Quant-Analytics-Notebook',
    description: 'Risk & Backtesting'
  },
  {
    title: 'Terminal Softwares Website',
    image: '/assets/imgs/GPA Home.jpg', // Using GPA Home image as placeholder for software company website
    repoLink: 'https://github.com/Terminal-Software/react-website',
    description: 'Professional website for Terminal Software, showcasing software development services and company information.'
  },
  {
    title: 'Book Search Engine and Manager',
    image: '/assets/imgs/books.jpg', // Books image is perfect for this project
    repoLink: 'https://github.com/yahm0/Book-Search-Engine-And-Manager',
    description: 'Full-stack web application for searching and managing books, featuring Google Books API integration and user authentication.'
  },
  {
    title: 'Infrastructure as Code Example',
    image: '/assets/imgs/iac_thumbnail.png', // IAC thumbnail is perfect for this project
    repoLink: 'https://github.com/yahm0/Infrastructure-as-Code-Example',
    description: 'Demonstration of Infrastructure as Code principles using AWS CDK and CloudFormation for automated infrastructure deployment.'
  },
  {
    title: 'Analytics Pipeline Showcase',
    image: '/assets/imgs/analytics_pipeline.png', // Analytics pipeline image is perfect for this project
    repoLink: 'https://github.com/yahm0/Analytics-Pipeline-Showcase',
    description: 'End-to-end data analytics pipeline implementation showcasing data ingestion, processing, and visualization workflows.'
  },
  {
    title: 'Machine Learning with SageMaker',
    image: '/assets/imgs/sagemaker_demo.png', // SageMaker image is perfect for this project
    repoLink: 'https://github.com/yahm0/Machine-Learning-with-SageMaker',
    description: 'Machine learning project demonstrating model development, training, and deployment using Amazon SageMaker services.'
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
          repoLink={project.repoLink} // Link to project's GitHub repository
          description={project.description} // Project description (optional)
        />
      ))}
    </section>
  );
}

export default Portfolio;
