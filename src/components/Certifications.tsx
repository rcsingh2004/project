import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

// Define a type for certification objects
interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialId: string;
  link: string;
}

// TEMPLATE: Replace this array with your own certifications or leave empty to hide cards
export const certificationsData: Certification[] = [
  {
    title: 'Complete Python Bootcamp: Go from Zero to Hero in Python 3',
    issuer: 'Udemy',
    date: '2023',
    description: 'Comprehensive course covering Python basics to advanced topics, including OOP, web scraping, and data visualization.',
    image: 'https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg',
    credentialId: 'UC-12345678',
    link: 'https://www.udemy.com/certificate/UC-12345678/'
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-glow-border-cert overflow-visible">
          <style>{`
            @keyframes cert-glow {
              0% { box-shadow: 0 0 12px 2px #60a5fa, 0 0 24px 6px #a78bfa; }
              50% { box-shadow: 0 0 24px 6px #a78bfa, 0 0 12px 2px #60a5fa; }
              100% { box-shadow: 0 0 12px 2px #60a5fa, 0 0 24px 6px #a78bfa; }
            }
            .animate-glow-border-cert {
              animation: cert-glow 2.5s infinite alternate;
            }
          `}</style>
          {certificationsData.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-16">
              <Award size={48} className="mx-auto mb-4 text-cyan-400" />
              <p className="text-lg">No certifications added yet.</p>
              <p className="text-sm mt-2">This section is a template. Add your certifications to <code>certificationsData</code> in <b>Certifications.tsx</b>.</p>
            </div>
          ) : (
            certificationsData.map((cert, index) => (
              <div
                key={cert.title}
                className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"></div>
                  <div className="absolute top-4 right-4 text-cyan-400">
                    <Award size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-100 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-cyan-300 font-medium">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                    <Calendar size={16} />
                    {cert.date}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {cert.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400">
                      Credential ID: <span className="text-cyan-300">{cert.credentialId}</span>
                    </p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-lg transition-all duration-300 text-sm w-full justify-center">
                      <ExternalLink size={16} />
                      View Certificate
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;