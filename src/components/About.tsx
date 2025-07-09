import React, { useRef } from 'react';
import { Download } from 'lucide-react';

export const aboutData = {
  paragraphs: [
    "I'm a passionate Machine Learning and Generative AI Engineer with expertise in Python development. I specialize in building intelligent systems that solve real-world problems through innovative AI solutions. My journey in technology is driven by curiosity and the desire to create impactful applications that make a difference.",
    "With experience in machine learning algorithms, deep learning frameworks, and generative AI models, I transform complex data into actionable insights and create intelligent applications that push the boundaries of what's possible."
  ]
};

const About: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D parallax effect handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
    const rotateY = ((x - centerX) / centerX) * -8;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 32px 0 #67e8f9, ${rotateY * 2}px ${-rotateX * 2}px 32px 0 #a78bfa`;
  };
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
    card.style.boxShadow = '';
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-cyan-500/20 shadow-2xl overflow-visible transition-transform duration-300 animate-glow-border"
          style={{ willChange: 'transform, box-shadow' }}
        >
          <style>{`
            @keyframes about-glow {
              0% { box-shadow: 0 0 12px 2px #67e8f9, 0 0 24px 6px #a78bfa; }
              50% { box-shadow: 0 0 24px 6px #a78bfa, 0 0 12px 2px #67e8f9; }
              100% { box-shadow: 0 0 12px 2px #67e8f9, 0 0 24px 6px #a78bfa; }
            }
            .animate-glow-border {
              animation: about-glow 2.5s infinite alternate;
            }
          `}</style>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            I'm a passionate Machine Learning and Generative AI Engineer with expertise in Python development. 
            I specialize in building intelligent systems that solve real-world problems through innovative AI solutions. 
            My journey in technology is driven by curiosity and the desire to create impactful applications that make a difference.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            With experience in machine learning algorithms, deep learning frameworks, and generative AI models, 
            I transform complex data into actionable insights and create intelligent applications that push the boundaries of what's possible.
          </p>
          
          <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
            <span className="relative z-10 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;