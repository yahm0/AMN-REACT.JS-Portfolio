import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';

const categories = [
  {
    label: 'Cloud Engineering',
    projects: [
      {
        title: 'Atlas Ingest',
        repoLink: 'https://github.com/yahm0/Atlas-Ingest',
        description:
          'Serverless AWS pipeline that ingests SEC filings and transforms them into structured, searchable knowledge using Textract, Comprehend, and Bedrock.',
      },
      {
        title: 'Lyra Insight',
        repoLink: 'https://github.com/yahm0/Lyra-Insight',
        description:
          'Advanced RAG system with fine-tuned models for business analytics, featuring Hugging Face integrations, vector embeddings, and intelligent document processing.',
      },
      {
        title: 'Infrastructure as Code',
        repoLink: 'https://github.com/yahm0/Infrastructure-as-Code-Example',
        description:
          'Demonstrates IaC principles using AWS CDK and CloudFormation for automated infrastructure deployment.',
      },
      {
        title: 'Invoice Tracker Automation',
        repoLink: 'https://github.com/yahm0/InvoiceTrackerAutomation',
        description:
          'Google Apps Script that automates Gmail invoice fetching, parsing, and tracking — eliminating manual data entry.',
      },
    ],
  },
  {
    label: 'Web Development',
    projects: [
      {
        title: 'React Portfolio',
        deployedLink: 'https://adamnuccio.com',
        repoLink: 'https://github.com/yahm0/AMN-REACT.JS-Portfolio',
        description:
          'Performance-optimized personal portfolio built with React 18, React Router, and code splitting. Deployed on Netlify.',
      },
      {
        title: 'Terminal Softwares Webapp',
        deployedLink: 'https://terminalsoftware.gg',
        description:
          'Professional website for Terminal Software showcasing software development services.',
      },
      {
        title: 'Book Search Engine',
        repoLink: 'https://github.com/yahm0/Book-Search-Engine-And-Manager',
        description:
          'Full-stack app for searching and managing books with Google Books API integration and user authentication.',
      },
    ],
  },
  {
    label: 'Mathematics',
    projects: [
      {
        title: 'Geometry of Bezier Curves in Typography',
        repoLink:
          'https://github.com/yahm0/The-Geometry-of-Bezier-Curves-in-Typography',
        description:
          'Explores how Bezier curves and linear transformations define digital type, bridging applied mathematics and computational design.',
      },
      {
        title: 'Linear Transformations Report',
        repoLink: 'https://github.com/yahm0/linear-transformations-report',
        description:
          '27-page LaTeX report exploring linear transformations with custom theorem environments and MATLAB visualizations.',
      },
      {
        title: "Euler's Theorem & the Multiplicative Structure of Z/nZ",
        repoLink:
          'https://github.com/yahm0/Euler-s-Theorem-and-the-Multiplicative-Structure-of-Z-nZ',
        description:
          "Mathematical exploration of Euler's theorem and the multiplicative group structure of integers modulo n, with applications to cryptography.",
      },
      {
        title: 'Modeling DNA Evolution as a Markov Chain',
        repoLink:
          'https://github.com/yahm0/Modeling-DNA-Evolution-as-a-Markov-Chain',
        description:
          'Models how a single DNA site drifts toward a stable base composition as a discrete-time finite Markov chain under the Jukes-Cantor (1969) substitution model, with stationary distribution and eigenvalue-based convergence analysis.',
      },
      {
        title: 'Selling a Decaying Asset: A Markov Stopping Rule',
        repoLink:
          'https://github.com/yahm0/Selling-a-Decaying-Asset-A-Markov-Stopping-Rule',
        description:
          'Determines when to sell an asset whose quality drifts as a Markov chain, using optimal stopping to balance immediate payoff against per-period holding cost and a hard deadline.',
      },
    ],
  },
];

function Portfolio() {
  return (
    <div className='portfolio-page'>
      <h2 className='portfolio-heading'>Projects</h2>
      {categories.map((cat) => (
        <section key={cat.label} className='portfolio-section'>
          <p className='portfolio-section-label'>{cat.label}</p>
          <div className='portfolio-grid'>
            {cat.projects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Portfolio;
