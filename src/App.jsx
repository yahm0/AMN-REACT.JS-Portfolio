import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './assets/styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header component that will be displayed on all pages */}
        <Header />
        <main>
          {/* Switch component to handle routing between different pages */}
          <Switch>
            {/* Route for the About Me page */}
            <Route exact path="/" component={AboutMe} />
            {/* Route for the Portfolio page */}
            <Route path="/portfolio" component={Portfolio} />
            {/* Route for the Contact page */}
            <Route path="/contact" component={Contact} />
            {/* Route for the Resume page */}
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>
        {/* Footer component that will be displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
