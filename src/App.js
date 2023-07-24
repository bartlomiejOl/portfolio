import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';

import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/ContactLinks/Contact';
import Experience from './components/Experience/Experience';

export const LanguageContext = React.createContext();

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 500, disable: window.innerWidth < 768 });
  }, []);

  const [language, setLanguage] = useState('English');

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
