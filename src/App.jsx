import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

const AboutMe = lazy(() => import('./pages/AboutMe'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Resume = lazy(() => import('./pages/Resume'));

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
          <Suspense fallback={<div className='loading'>Loading...</div>}>
            <Routes>
              <Route path='/' element={<AboutMe />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/resume' element={<Resume />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
