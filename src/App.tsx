import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Moon, Sun, MapPin, Mail, Phone } from 'lucide-react';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <AnimatedBackground darkMode={darkMode} />
      
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="relative z-10">
        <Hero darkMode={darkMode} />
        <WorkExperience darkMode={darkMode} />
        <TechStack darkMode={darkMode} />
        {/* <Projects darkMode={darkMode} /> */}
        <Resume darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;