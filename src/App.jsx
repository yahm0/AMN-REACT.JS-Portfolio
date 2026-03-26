import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='background-container'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/background.jpg`}
            alt='Background'
            className='background-image'
          />
        </div>

        <Header />

        <main>
          <Routes>
            <Route path='/' element={<AboutMe />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
