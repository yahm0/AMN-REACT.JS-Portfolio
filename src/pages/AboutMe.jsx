import React from 'react';
import '../styles/AboutMe.css';
import TestimonialsSlider from '../components/TestimonialsSlider';

function AboutMe() {
  return (
    <div className='about-me-background'>
      <div className='about-me-container'>
        {/* Bio Section */}
        <div className='bio-container'>
          <section className='about-me-header'>
            <img
              src='/assets/imgs/profilepicture.jpg'
              alt='Developer'
              className='profile-picture w-32 h-32 md:w-48 md:h-48 object-cover rounded-full'
            />
          </section>
          <section className='about-me-card'>
            <div className="container">
              <h2 className="text-xl font-bold mb-4">Adam Nuccio: A Career of Technical Excellence and Leadership</h2>

              <p>Starting with enterprise network support, Adam has built a career driving innovation and growth in IT.</p>

              <div className="section">
                <p>At ITS Group (2021 - 2022), supporting enterprise infrastructure as a Network Specialist, Adam served at this Managed Service Provider (MSP). There, he managed over 1,300 workstations and 300 servers across multiple clients, gaining deep expertise in VPN configurations, security standards, and server maintenance. His work in infrastructure security and network optimization ensured operational continuity for a wide range of businesses.</p>
              </div>

              <div className="section">
                <p>As a Network Engineer at Infotect Design Solutions (2022), strengthening IT security and infrastructure, Adam played a key role in designing and securing network infrastructures. He:</p>
                <ul>
                  <li>Developed and installed network solutions.</li>
                  <li>Implemented firewalls and data security measures.</li>
                  <li>Optimized network performance for clients.</li>
                </ul>
                <p>His ability to bridge technical expertise with strategic planning made him a valuable asset in improving IT reliability and security.</p>
              </div>

              <div className="section">
                <p>At Stan Weaver & Company (2022 - 2024), leading IT transformations as Director of Information Technology, Adam's leadership capabilities became fully realized. Tasked with integrating Cors-Air's IT infrastructure post-merger, he modernized the company's systems, increasing workflow efficiency by 20% and improving operational uptime.</p>

                <p>He spearheaded key initiatives, including:</p>
                <ul>
                  <li>Migrating and consolidating Microsoft 365 tenants, optimizing collaboration across the organization.</li>
                  <li>Establishing a shared hybrid cloud domain, enhancing accessibility and system compatibility.</li>
                  <li>Implementing machine learning-driven business intelligence in Power BI, improving decision-making efficiency by 40%.</li>
                  <li>Developing a help desk with comprehensive KPIs, improving IT support responsiveness and reducing downtime.</li>
                  <li>Creating ELK stack monitoring systems to improve system observability and proactive issue resolution.</li>
                  <li>Enhancing cybersecurity posture through phishing awareness programs, disaster recovery plans, and Azure Active Directory security frameworks.</li>
                  <li>Overseeing two small data center implementations, optimizing cooling, power, and server management.</li>
                </ul>

                <p>His leadership extended beyond technical excellence—he mentored a six-person IT team, fostering professional growth while executing high-impact infrastructure projects.</p>
              </div>

              <div className="section">
                <p>At Green Pipe Analytics (2024 - Present), pioneering retail technology as Founder and Principal Consultant, Adam specializes in vertically integrating retail operations through custom AI architectures and cloud solutions. The firm focuses on transforming traditional retail businesses into data-driven, automated enterprises.</p>

                <p>Key specializations include:</p>
                <ul>
                  <li>Retail AI Solutions: Developing custom GPT architectures for inventory forecasting, customer service automation, and personalized shopping experiences.</li>
                  <li>Vertical Integration Platform: Creating unified cloud systems that connect all aspects of retail operations - from supply chain and inventory management to point-of-sale and customer relationship management.</li>
                  <li>Retail Analytics Suite: Implementing real-time business intelligence dashboards for sales analytics, customer behavior tracking, and inventory optimization.</li>
                  <li>Omnichannel Integration: Building seamless connections between e-commerce platforms, physical stores, and warehouse management systems.</li>
                  <li>Supply Chain Optimization: Deploying AI-driven demand forecasting and automated procurement systems to streamline operations.</li>
                </ul>

                <p>Today, Adam Nuccio remains dedicated to bridging the gap between technology and business strategy. With a strong foundation in IT infrastructure, Data Analytics, and cloud solutions, he continues to transform organizations by leveraging innovative technologies that drive efficiency and competitive advantage.</p>
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
              <h4>IT Management</h4>
              <p>
                Skilled in managing IT operations and teams for optimal
                performance.
              </p>
            </div>
            <div className='discipline'>
              <h4>Data Analytics</h4>
              <p>
                Proficient in analyzing data and providing actionable insights.
              </p>
            </div>
            <div className='discipline'>
              <h4>Data Engineering</h4>
              <p>
                Expertise in building and maintaining data pipelines, warehouses, and infrastructure to enable efficient data processing and analysis.
              </p>
            </div>
            <div className='discipline'>
              <h4>Machine Learning Engineering</h4>
              <p>
                Ready to develop, deploy, and optimize machine learning models to automate tasks and improve predictions.
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
