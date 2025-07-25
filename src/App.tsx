import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
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
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;