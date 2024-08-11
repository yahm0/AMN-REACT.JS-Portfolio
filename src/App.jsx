import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './styles/App.css';

// Main App component
function App() {
  return (
    <Router>
      <div className="App">
        <div className="background-container">
          <img src="/assets/imgs/overlapping-white-grey-gradient-circles-background-vector.jpg" alt="Background" className="background-image" />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
