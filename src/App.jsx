import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        {/* Background container with image */}
        <div className='background-container'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/background.jpg`}
            alt='Background'
            className='background-image'
          />
        </div>

        {/* Header component */}
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<AboutMe />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
