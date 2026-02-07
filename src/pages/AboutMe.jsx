import React from 'react';
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
            <h2>Adam Nuccio</h2>
            <p className='tagline'>
              Cloud Architecture | Data Engineering | Applied Mathematics
            </p>

            <p>
              Adam Nuccio integrates mathematical rigor with executive IT
              leadership to build scalable, data-driven systems. He is currently
              pursuing a degree in Mathematics: Computational and Applied at the
              University of South Florida, concentrating in Discrete Math and
              Cryptography.
            </p>

            <h3>Executive Impact</h3>

            <h4>Infrastructure &amp; Operations</h4>
            <p>
              As Director of IT at Stan Weaver &amp; Company, Adam led a $1M+
              budget and directed the Cors-Air to Stan Weaver merger
              integration, migrating 200+ users into a shared hybrid domain,
              unifying Microsoft 365 email, and standardizing DNS and group
              policies -- boosting operational efficiency by 20%. He built two
              on-premises data centers and integrated Azure hybrid cloud,
              migrating the RDS Farm with DUO authentication, which improved
              uptime by 15% and reduced operational costs by 20%.
            </p>
            <p>
              Adam transformed ERP data into queryable datasets and built Power
              BI and ML pipelines that reduced query times by 60% and increased
              BI output by 40%. He deployed HubSpot CRM and a help desk system
              with KPIs, CSAT surveys, a knowledge base, and automated
              workflows, improving user satisfaction by 50%. He implemented an
              ELK observability stack, phishing-awareness campaigns, Intune
              device management, and Azure AD RBAC, reducing downtime risks by
              25%. He also adopted ManageEngine as an RMM platform to patch,
              monitor, and audit 150+ workstations and 20+ servers across
              Florida, and migrated legacy PBX to RingCentral cloud VoIP to cut
              telephony costs across all locations.
            </p>
            <p>
              Prior to Stan Weaver, Adam designed and maintained network
              infrastructure as a Network Engineer at Infotect Design Solutions,
              implementing firewalls and backup systems to protect client data.
              At ITS Group, he resolved Tier 1 and Tier 2 help desk tickets,
              deployed Kaseya RMM across 300+ servers and 1,300+ workstations,
              staged and configured 100+ PCs with structured cabling and VoIP
              drops, and deployed Proofpoint email security alongside
              on-premises PBX, VoIP, and Microsoft Exchange environments.
            </p>

            <h4>Cloud Engineering &amp; Consulting</h4>
            <p>
              As founder of Green Pipe Analytics, Adam delivered cloud-native
              frameworks that reduced client infrastructure costs by 30% and
              deployment times by 40%. He engineered microservices that cut
              query latency by 65 ms and maintained 99.9% uptime for
              multi-tenant hosting environments.
            </p>
            <p>
              As a Cloud Consultant Intern on the AWS ProServe Data and ML
              Specialty team, Adam delivered 80% faster safety-compliance
              answers via hybrid retrieval and cross-encoder reranking on a
              fully serverless stack. He built a document-intelligence pipeline
              using Textract, Comprehend, and Bedrock Agents covering OCR, NER,
              PII detection, summarization, and RAG over NIOSH data. He
              validated resilience and cost with Monte Carlo simulations on
              volume, Lambda duration, SQS latency, and error rates. He also
              built an analytics UI with React.js and Three.js, architected a
              DynamoDB data lake with Athena querying at 99.99% availability and
              30% faster query times, and automated GDPR rights workflows,
              secure data export, WAF protections, and Cognito identity with
              infrastructure defined in CloudFormation.
            </p>

            <h3>Technical Foundation</h3>
            <p>
              With a decade of experience spanning U.S. Navy aviation
              maintenance and enterprise network engineering, Adam specializes
              in troubleshooting complex systems in high-pressure environments.
              He applies discrete mathematics to optimize network topology and
              cryptography to engineer secure, resilient data pipelines.
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
