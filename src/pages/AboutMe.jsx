import React from 'react';
import '../styles/AboutMe.css';
import TestimonialsSlider from '../components/TestimonialsSlider';

function AboutMe() {
  return (
    <div className="about-me-container">
      <section className="about-me-header">
        <img src="/assets/imgs/profilepicture.jpg" alt="Developer" />
        <h2>About Me</h2>
      </section>

      {/* Bio Section */}
      <div className="cards-container">
        <section className="about-me-card">
          <p>
            As a former Director of Information Technology and Software Developer, I offer a fresh and innovative approach to managing IT operations and developing cutting-edge software solutions. With a strong background in both the strategic and technical aspects of information technology, I excel in leading teams to deliver projects that exceed expectations, on time and within budget. My passion for technology is matched by my commitment to staying ahead of industry trends, ensuring that the organizations I work with are not just current but ahead of the curve. I am dedicated to leveraging technology to solve real-world problems, constantly seeking innovative solutions that improve operational efficiencies, enhance customer experiences, and create competitive advantages. With a keen eye for detail and a relentless pursuit of excellence, I am always ready to tackle new challenges and lead my team to success. My leadership style emphasizes open communication, mentorship, and collaboration, fostering an environment where ideas thrive and team members are empowered to achieve their best. I have a proven track record of managing complex IT projects from conception to deployment and am proficient in a wide range of programming languages and technologies. My ability to bridge the gap between technical and non-technical stakeholders ensures that IT strategies align with organizational goals, driving growth and efficiency.
          </p>
        </section>

        {/* Work Experiences Section */}
        <div className="work-experiences-container">
          <h3>Work Experiences</h3>
          <div className="work-experiences-grid">
            <div className="work-experience">
              <h4>Founder</h4>
              <p>Terminal Software</p>
              <p>January 2023 – Present</p>
            </div>
            <div className="work-experience">
              <h4>Director of Information Technology</h4>
              <p>Cors-Air</p>
              <p>July 2022 – July 2024</p>
            </div>
            <div className="work-experience">
              <h4>Director of Information Technology</h4>
              <p>Stan Weaver</p>
              <p>June 2022 – July 2024</p>
            </div>
            <div className="work-experience">
              <h4>Network Engineer</h4>
              <p>Infotect Design Solutions (CSP)</p>
              <p>February 2022 – June 2022</p>
            </div>
            <div className="work-experience">
              <h4>Network Specialist</h4>
              <p>ITS Group (MSP)</p>
              <p>January 2021 – February 2022</p>
            </div>
            <div className="work-experience">
              <h4>Software Quality Assurance</h4>
              <p>Fairfax Imaging</p>
              <p>October 2018 – October 2019</p>
            </div>
          </div>
        </div>

        {/* Disciplines Section */}
        <section className="about-me-card">
          <h3>Disciplines</h3>
          <p>
            My work spans several disciplines, including Software Development, IT Management, and Data Analytics. I approach each discipline with a focus on delivering value through innovation, efficiency, and strategic thinking, ensuring that the organizations I work with achieve their technological and business objectives.
          </p>
        </section>
      </div>

      <TestimonialsSlider />
    </div>
  );
}

export default AboutMe;

