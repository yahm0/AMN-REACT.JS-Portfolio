import React from 'react';
import '../styles/AboutMe.css';
import TestimonialsSlider from '../components/TestimonialsSlider';

function AboutMe() {
  return (
    <div className='about-me-background'>
      <div className='about-me-container'>
        {/* Bio Section */}
        <div className='bio-container'>
          <section className='about-me-card'>
            <h2>
              Director of Information Technology specializing in transformative
              thinking,
            </h2>
            <p>
              I am a relentless advocate for technology's power to transform
              businesses, with a proven record of steering IT operations and
              software development to new heights. My career is built on a
              foundation of strategic thinking, technical mastery, and an
              unyielding commitment to excellence. I don't just follow industry
              trends; I anticipate them, ensuring the organizations I partner
              with are always a step ahead.
            </p>
            <p>
              In my hands, technology isn't just a tool; it's a catalyst for
              change. I’ve led teams that have not only met deadlines and
              budgets but have shattered expectations, delivering solutions that
              drive operational efficiency and elevate customer experiences. My
              approach is simple yet profound: leverage cutting-edge technology
              to solve real-world problems, creating competitive advantages that
              are both sustainable and impactful.
            </p>
            <p>
              Leadership, to me, is about more than managing people—it's about
              inspiring them. I cultivate environments where innovation thrives,
              where collaboration isn't just encouraged; it's expected. My
              leadership style is a blend of mentorship and empowerment,
              ensuring that every team member is not only heard but also has the
              opportunity to excel.
            </p>
            <p>
              My technical expertise spans a broad spectrum, from programming
              languages to the latest in IT infrastructure. But it's my ability
              to bridge the gap between the technical and the non-technical that
              sets me apart. I speak the language of both the engineer and the
              executive, aligning IT strategies with the overarching goals of
              the business to drive growth, efficiency, and success.
            </p>
            <p>
              In a world where technology evolves at breakneck speed, I remain
              steadfast in my mission: to harness its potential, to drive
              innovation, and to lead with a vision that sees beyond the
              immediate horizon.
            </p>
          </section>
          <section className='about-me-header'>
            <img
              src='/assets/imgs/profilepicture.jpg'
              alt='Developer'
              className='profile-picture'
            />
          </section>
        </div>

        {/* Work Experiences Section */}
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
        </div>

        {/* Disciplines Section */}
        <div className='disciplines-container'>
          <h3>Disciplines</h3>
          <div className='grid-layout'>
            <div className='discipline'>
              <h4>Software Development</h4>
              <p>
                Expert in creating scalable and efficient software solutions.
              </p>
            </div>
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
          </div>
        </div>

        {/* <TestimonialsSlider /> */}
      </div>
    </div>
  );
}

export default AboutMe;
