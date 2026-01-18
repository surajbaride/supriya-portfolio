import React, { useEffect } from 'react';
import './styles/App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  useEffect(() => {
    // Disable right click
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    // Disable inspect shortcuts
    const disableInspect = (e) => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault();
      }

      // Ctrl+Shift+I / J / C
      if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) {
        e.preventDefault();
      }

      // Ctrl+U (view source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
      }
    };

    // Disable copy
    const disableCopy = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableInspect);
    document.addEventListener('copy', disableCopy);
    document.addEventListener('cut', disableCopy);
    document.addEventListener('paste', disableCopy);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableInspect);
      document.removeEventListener('copy', disableCopy);
      document.removeEventListener('cut', disableCopy);
      document.removeEventListener('paste', disableCopy);
    };
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
