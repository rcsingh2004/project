import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative bg-gray-900 text-white overflow-x-hidden">
      {/* Glowing Gradient Background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(6,182,212,0.25) 0, transparent 60%),' +
            'radial-gradient(circle at 80% 70%, rgba(139,92,246,0.20) 0, transparent 60%),' +
            'radial-gradient(circle at 50% 90%, rgba(236,72,153,0.15) 0, transparent 60%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;