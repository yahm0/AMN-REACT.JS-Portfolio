import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';

// Array of project objects to be displayed in the portfolio
const projects = [
  {
    title: 'Atlas Ingest',
    image: '', // Document processing and data pipeline
    repoLink: 'https://github.com/yahm0/Atlas-Ingest',
    description:
      'Production-grade, serverless financial document ingestion and AI processing pipeline. End-to-end system that automatically acquires, validates, processes, and transforms financial documents (SEC filings, 10-Ks, 10-Qs, 8-Ks) into structured, searchable knowledge using AWS AI services and modern cloud architecture.',
  },
  {
    title: 'Lyra Insight',
    image: '', // AI and machine learning
    repoLink: 'https://github.com/yahm0/Lyra-Insight',
    description:
      'Advanced RAG (Retrieval-Augmented Generation) system with custom fine-tuned models for AI agent development and business analytics. Features Hugging Face integrations, vector embeddings, and intelligent document processing for enhanced decision-making and automated insights.',
  },
  {
    title: 'Quant Analytics Notebook',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center', // Analytics pipeline image fits well for quantitative analysis
    repoLink: 'https://github.com/yahm0/Quant-Analytics-Notebook',
    description:
      'Comprehensive quantitative analysis platform for financial risk modeling, backtesting strategies, and portfolio optimization. Implements Monte Carlo simulations, time series analysis, and statistical modeling for data-driven investment decisions.',
  },
  {
    title: 'Terminal Softwares Webapp',
    image: '/assets/imgs/TSWebsite.png', // Terminal Software website image
    deployedLink: 'https://terminalsoftware.gg',
    description:
      'Professional website for Terminal Software, showcasing software development services and company information.',
  },
  {
    title: 'Book Search Engine and Manager',
    image: '/assets/imgs/books.jpg', // Books image is perfect for this project
    repoLink: 'https://github.com/yahm0/Book-Search-Engine-And-Manager',
    description:
      'Full-stack web application for searching and managing books, featuring Google Books API integration and user authentication.',
  },
  {
    title: 'Infrastructure as Code Example',
    image: '/assets/imgs/iac_thumbnail.png', // IAC thumbnail is perfect for this project
    repoLink: 'https://github.com/yahm0/Infrastructure-as-Code-Example',
    description:
      'Demonstration of Infrastructure as Code principles using AWS CDK and CloudFormation for automated infrastructure deployment.',
  },

  {
    title: 'Machine Learning with SageMaker',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center', // AI and machine learning
    repoLink: 'https://github.com/yahm0/Machine-Learning-with-SageMaker',
    description:
      'Machine learning project demonstrating model development, training, and deployment using Amazon SageMaker services.',
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
          deployedLink={project.deployedLink} // Link to deployed site
          repoLink={project.repoLink} // Link to project's GitHub repository
          description={project.description} // Project description (optional)
        />
      ))}
    </section>
  );
}

export default Portfolio;
