import React, { useRef } from 'react';
import { Download, Eye, User, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
// import { useReactToPrint } from 'react-to-print';
import ResumePDF from './ResumePDF';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const heroData = {
  name: "Rajasva Choudhary",
  title: "ML & Generative AI Engineer | Python Developer",
  profileImage: "/profile..jpg",
  resumeUrl: "/resume.pdf",
  linkedIn: "https://www.linkedin.com/in/rajasva-singh-choudhary-531104260/"
};

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resumeSectionRef = useRef<HTMLDivElement>(null);
  const handleDownloadResume = async () => {
    if (!resumeSectionRef.current) return;
    const canvas = await html2canvas(resumeSectionRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('Resume - Rajasva Choudhary.pdf');
  };
  // Open LinkedIn profile handler
  const handleProfileClick = () => {
    window.open('https://www.linkedin.com/in/rajasva-singh-choudhary-531104260/', '_blank');
  };
  // Open GitHub profile handler
  const handleGithubClick = () => {
    window.open('https://github.com/rajasvachoudhary', '_blank');
  };

  return (
    <>
    <section id="home" className="min-h-[90vh] md:min-h-[110vh] flex items-center justify-center relative overflow-hidden">
      {/* Floating gradient shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.18}
        scale={1.04}
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        className="relative z-10 w-full max-w-5xl mx-auto px-4"
      >
        <div className="relative rounded-3xl p-8 md:p-14 bg-black/40 shadow-2xl backdrop-blur-lg transition-all duration-300 border-4 border-cyan-400/60 animate-glow-border overflow-visible">
          {/* Glowing border animation */}
          <style>{`
            @keyframes glow {
              0% { box-shadow: 0 0 16px 4px #67e8f9, 0 0 32px 8px #a78bfa; }
              50% { box-shadow: 0 0 32px 8px #a78bfa, 0 0 16px 4px #67e8f9; }
              100% { box-shadow: 0 0 16px 4px #67e8f9, 0 0 32px 8px #a78bfa; }
            }
            .animate-glow-border {
              animation: glow 2s infinite alternate;
            }
          `}</style>

          {/* Profile Image with 3D Tilt */}
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.25}
            scale={1.08}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            className="w-56 h-56 mx-auto mb-12"
          >
            <div className="relative group w-56 h-56 cursor-pointer" onClick={handleProfileClick} aria-label="Open LinkedIn Profile">
              <div className="w-56 h-56 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-pulse">
                <img
                  src="/profile..jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-lg"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
            </div>
          </Tilt>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Rajasva Choudhary
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-10 font-light">
            ML & Generative AI Engineer | Python Developer
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={handleDownloadResume}
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 text-lg"
              aria-label="Download Resume"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={24} />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={handleGithubClick}
              className="group relative px-10 py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-gray-700/25 text-lg"
              aria-label="GitHub Profile"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Github size={24} />
                GitHub
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button 
              onClick={scrollToProjects}
              className="group relative px-10 py-4 border-2 border-cyan-500 rounded-full font-medium text-cyan-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Eye size={24} />
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </Tilt>
    </section>
    {/* Render ResumePDF visibly to ensure html2canvas works */}
    <div ref={resumeSectionRef} style={{ background: '#fff', color: '#18181b', padding: 36, width: 800, margin: '32px auto', border: '2px solid #a78bfa', borderRadius: 16 }}>
      <ResumePDF />
    </div>
    </>
  );
};

export default Hero;