import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './assets/styles/App.css';

// Main App component
function App() {
  return (
    // Router to manage application routing
    <Router>
      <div className="App">
        {/* Header component to be displayed on all pages */}
        <Header />
        <main>
          {/* Routes component to define the routes of the application */}
          <Routes>
            {/* Route for the About Me page */}
            <Route path="/" element={<AboutMe />} />
            {/* Route for the Portfolio page */}
            <Route path="/portfolio" element={<Portfolio />} />
            {/* Route for the Contact page */}
            <Route path="/contact" element={<Contact />} />
            {/* Route for the Resume page */}
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        {/* Footer component to be displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
