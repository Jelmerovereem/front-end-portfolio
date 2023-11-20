import React from 'react';
import './App.css';
import NavEl from './components/molecules/navigation';
import Header from './components/molecules/Header';
import About from './components/organisms/About';
import Projects from './components/organisms/Projects';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import CookieBar from 'components/molecules/CookieBar';

function App() {
  return (
    <div>
      <NavEl />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <CookieBar/>
    </div>
  );
}

export default App;
