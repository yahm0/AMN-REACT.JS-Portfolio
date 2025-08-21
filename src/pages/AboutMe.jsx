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
            <div className='container'>
              <h2 className='text-xl font-bold mb-4'>
                Adam Nuccio: A Career of Technical Mastery, Leadership, and
                Innovation
              </h2>

              <p>
                Adam Nuccio's career reflects a rare combination of technical
                expertise, strategic leadership, and creative innovation.
                Starting in enterprise IT and evolving into cloud consulting,
                applied machine learning, and interactive media, Adam has
                consistently delivered scalable solutions that bridge technology
                and business strategy.
              </p>

              <div className='section'>
                <p>
                  Adam began his career supporting enterprise infrastructure at
                  ITS Group, managing over 1,300 workstations and 300 servers
                  across multiple clients. He advanced as a Network Engineer at
                  Infotect Design Solutions, where he implemented firewalls,
                  intrusion detection, and automated vulnerability scans,
                  strengthening client environments and establishing himself as
                  a rising technical leader.
                </p>
              </div>

              <div className='section'>
                <p>
                  As Director of Information Technology at Stan Weaver &
                  Company, Adam managed a $1M+ IT budget and led a six-person
                  team through a major post-merger modernization effort. He
                  unified Microsoft 365 tenants, built two on-premises data
                  centers, integrated Azure into a hybrid model, and transformed
                  ERP data into queryable pipelines that reduced query times by
                  60% and improved business intelligence by 40%. He also
                  established cybersecurity frameworks, observability systems,
                  and a KPI-driven help desk, boosting both uptime and user
                  satisfaction.
                </p>
              </div>

              <div className='section'>
                <p>
                  In 2024, Adam founded Green Pipe Analytics, a consultancy
                  focused on cloud-native architectures and AI-powered business
                  transformation. He has delivered custom GPT pipelines for
                  forecasting and customer engagement, built MERN + GraphQL
                  platforms with analytics dashboards, and integrated
                  omnichannel retail systems spanning CRM, ERP, and POS. His
                  work has cut client infrastructure costs by up to 30% while
                  enabling data-driven automation across industries.
                </p>
              </div>

              <div className='section'>
                <p>
                  At the same time, Adam founded Terminal Software, an indie
                  game studio where he directs both technical development and
                  business strategy. As a computer graphics programmer, he
                  designs innovative mechanics and rendering pipelines in Unity,
                  while leading a cross-functional team using Agile
                  methodologies. His leadership extends to financial planning,
                  marketing, and community building, proving his ability to
                  combine engineering rigor with creative storytelling.
                </p>
              </div>

              <div className='section'>
                <p>
                  Most recently, Adam served as an AI/ML Cloud Consultant Intern
                  at AWS ProServe, where he built a production-scale document
                  intelligence pipeline using Textract, Comprehend, Bedrock, and
                  DynamoDB. His work improved compliance answer speeds by 80%
                  and query performance by 30%, while applying Monte Carlo
                  simulations, serverless architecture, and secure workflows to
                  deliver resilient, scalable solutions.
                </p>
              </div>

              <div className='section'>
                <p>
                  Alongside professional roles, Adam has developed independent
                  projects such as Atlas Ingest, a serverless data ingestion
                  platform, Lyra Insight, a RAG + custom model pipeline with
                  Hugging Face integrations, and a Quant Analytics Notebook for
                  financial risk modeling and backtesting. These projects
                  highlight his interests in stochastic processes, optimization,
                  time series analysis, and applied ML engineering.
                </p>
              </div>

              <div className='section'>
                <p>
                  Currently pursuing a B.S. in Computational & Applied
                  Mathematics (4.0 GPA) at the University of South Florida, Adam
                  complements his professional experience with academic rigor.
                  He holds certifications in AWS (ML Specialty, Solutions
                  Architect), Azure (Data Engineer, AI Engineer), and ISC²,
                  reinforcing his cross-domain expertise.
                </p>
              </div>

              <div className='section'>
                <p>
                  Today, Adam Nuccio stands out as a cloud consultant, data
                  engineer, applied ML specialist, and founder with a proven
                  record of IT senior leadership. From directing
                  multimillion-dollar budgets and leading teams through
                  high-stakes infrastructure transformations to launching
                  entrepreneurial ventures in AI consulting and interactive
                  media, Adam has consistently demonstrated the ability to scale
                  technology, mentor talent, and align technical execution with
                  strategic goals. He remains committed to leveraging his
                  breadth of experience to drive efficiency, innovation, and
                  competitive advantage at the highest levels of technology
                  leadership.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Work Experiences Section
        <div className='work-experiences-container'>
          <h3>Work Experiences</h3>
          <div className='grid-layout'>
            <div className='work-experience'>
              <h4>Founder</h4>
              <p>Green Pipe Analytics</p>
              <p>January 2024 – Present</p>
            </div>
            <div className='work-experience'>
              <h4>Founder</h4>
              <p>Terminal Software</p>
              <p>January 2023 – Present</p>
            </div>
            <div className='work-experience'>
              <h4>Director of Information Technology</h4>
              <p>Cors-Air</p>
              <p>July 2022 – July 2024</p>
            </div>
            <div className='work-experience'>
              <h4>Director of Information Technology</h4>
              <p>Stan Weaver</p>
              <p>June 2022 – July 2024</p>
            </div>
            <div className='work-experience'>
              <h4>Network Engineer</h4>
              <p>Infotect Design Solutions (CSP)</p>
              <p>February 2022 – June 2022</p>
            </div>
            <div className='work-experience'>
              <h4>Network Specialist</h4>
              <p>ITS Group (MSP)</p>
              <p>January 2021 – February 2022</p>
            </div>
          </div>
        </div> */}

        {/* Disciplines Section */}
        <div className='disciplines-container'>
          <h3>Disciplines</h3>
          <div className='grid-layout'>
            <div className='discipline'>
              <h4>Machine Learning Engineering</h4>
              <p>
                Expertise in developing, deploying, and optimizing machine
                learning models to automate tasks and improve predictions.
              </p>
            </div>
            <div className='discipline'>
              <h4>Full Stack Web Developer</h4>
              <p>
                Proficient in building complete web applications from frontend
                to backend, using modern technologies and best practices.
              </p>
            </div>
            <div className='discipline'>
              <h4>IT Management</h4>
              <p>
                Skilled in managing IT operations and teams for optimal
                performance and strategic technology planning.
              </p>
            </div>
            <div className='discipline'>
              <h4>Cloud Architecture</h4>
              <p>
                Experience designing and implementing scalable cloud solutions
                using AWS services and modern cloud-native practices.
              </p>
            </div>
          </div>
        </div>

        {/* <TestimonialsSlider /> */}
      </div>
    </div>
  );
}

export default AboutMe;
