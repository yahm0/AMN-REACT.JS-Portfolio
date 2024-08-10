import React from 'react';
import '../styles/AboutMe.css';
import TestimonialsSlider from './components/TestimonialsSlider';

function AboutMe() {
  return (
    <div className="about-me-container">
      <section className="about-me-header">
        <img src="/assets/imgs/profilepicture.png" alt="Developer" />
        <h2>About Me</h2>
      </section>
      <div className="cards-container">
        <section className="about-me-card">
          <p>As an astute Director of Information Technology and Software Developer, I bring a fresh and innovative approach to overseeing IT operations and developing cutting-edge software solutions. With a robust foundation in both the strategic and technical facets of information technology, I excel in leading teams to deliver projects that exceed expectations, both on time and within budget. My passion for technology is matched by my dedication to staying at the forefront of industry trends, ensuring that the organizations I work with are not just current but ahead of the curve.</p>
        </section>
        <section className="about-me-card">
          <p>My leadership style is characterized by open communication, mentorship, and a collaborative spirit, fostering an environment where ideas flourish and team members are empowered to achieve their best. I have a proven track record of successfully managing complex IT projects, from conceptualization through to deployment, and am proficient in a wide range of programming languages and technologies. My ability to bridge the gap between technical and non-technical stakeholders ensures that IT strategies are aligned with organizational goals, driving growth and efficiency.</p>
        </section>
        <section className="about-me-card">
          <p>I am deeply committed to leveraging technology to solve real-world problems, constantly seeking innovative solutions that can improve operational efficiencies, enhance customer experiences, and create competitive advantages. With a keen eye for detail and a relentless pursuit of excellence, I am always ready to tackle new challenges and lead my team to success.</p>
        </section>
      </div>
      <TestimonialsSlider />
    </div>
  );
}

export default AboutMe;
