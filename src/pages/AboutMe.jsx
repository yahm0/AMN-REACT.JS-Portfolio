import React from 'react';
import { CONTACT_EMAIL, CONTACT_MAILTO } from '../constants/contact';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div className='about-me-background'>
      <div className='about-me-container'>
        {/* Bio Section */}
        <div className='bio-container'>
          <section className='about-me-header'>
            <img
              src='/assets/imgs/AMNHS.jpg'
              alt='Developer'
              className='profile-picture w-32 h-32 md:w-48 md:h-48 object-cover rounded-full'
            />
          </section>
          <section className='about-me-card'>
            <h1 className='about-me-name'>Adam Nuccio</h1>
            <p className='tagline'>
              Cloud Architecture | Data Engineering | Applied Mathematics
            </p>
            <p className='contact-email'>
              <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
            </p>

            <p>
              I blend mathematical rigor with IT leadership to build scalable,
              data-driven systems. My work draws on a B.S. in Mathematics
              (Computational &amp; Applied) from the University of South
              Florida, with a concentration in Discrete Math and Cryptography.
            </p>

            <h3>Executive Impact</h3>

            <h4>Infrastructure &amp; Operations</h4>
            <p>
              As Director of IT at Stan Weaver &amp; Company, I managed a $1M+
              budget and led the Cors-Air merger integration, migrating 200+
              users to a shared hybrid domain. I built two on-premises data
              centers with Azure hybrid cloud, cut query times by 60% through
              ERP-to-Power BI pipelines, and improved user satisfaction by 50%
              via HubSpot CRM and automated help desk workflows. I also
              implemented an ELK observability stack, Intune device management,
              and Azure AD RBAC, and migrated legacy PBX to RingCentral VoIP.
            </p>

            <h4>Cloud Engineering &amp; Consulting</h4>
            <p>
              As founder of Green Pipe Analytics, I reduced client
              infrastructure costs by 30% and deployment times by 40% through
              cloud-native frameworks and microservices. As an AWS ProServe
              Cloud Consultant intern, I built a serverless document
              intelligence pipeline using Textract, Comprehend, and Bedrock
              Agents delivering 80% faster compliance answers, architected a
              DynamoDB data lake with Athena at 99.99% availability, and
              automated GDPR workflows with CloudFormation.
            </p>

            <h3>Technical Foundation</h3>
            <p>
              A decade in U.S. Navy aviation maintenance and enterprise network
              engineering sharpened my ability to diagnose complex systems under
              pressure. That operational discipline now drives how I apply
              discrete mathematics and cryptography to build secure, resilient
              data pipelines.
            </p>
          </section>
        </div>

        {/* Disciplines Section */}
        <div className='disciplines-container'>
          <h3>Disciplines</h3>
          <div className='grid-layout'>
            <div className='discipline'>
              <h4>Cloud Architecture</h4>
              <p>
                Designing and deploying scalable cloud-native solutions across
                AWS and Azure, from hybrid infrastructure to microservices.
              </p>
            </div>
            <div className='discipline'>
              <h4>Data Engineering</h4>
              <p>
                Building ETL pipelines, optimizing query performance, and
                transforming raw data into actionable business intelligence.
              </p>
            </div>
            <div className='discipline'>
              <h4>Applied Mathematics</h4>
              <p>
                Applying discrete math, cryptography, and stochastic processes
                to solve complex engineering and security problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
