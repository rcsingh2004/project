import React from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

export const experiencesData = [
  {
    role: 'ML & Gen AI Intern',
    company: 'Linux World Jaipur',
    location: 'Jaipur, India',
    duration: '2024 - Present',
    description: [
      'Developed and implemented machine learning models for predictive analytics',
      'Worked on generative AI projects using transformer architectures',
      'Collaborated with cross-functional teams to deploy AI solutions',
      'Optimized model performance and reduced inference time by 40%'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Transformers', 'Docker']
  },
  {
    role: 'Python Developer',
    company: 'Freelance Projects',
    location: 'Remote',
    duration: '2023 - 2024',
    description: [
      'Built web applications using Python frameworks like Flask and Django',
      'Developed RESTful APIs for various client applications',
      'Implemented data processing pipelines and automation scripts',
      'Created data visualization dashboards using Plotly and Streamlit'
    ],
    technologies: ['Python', 'Flask', 'Django', 'PostgreSQL', 'Redis']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
          
          <div className="space-y-12">
            {experiencesData.map((exp, index) => (
              <div
                key={index}
                className="relative pl-12 md:pl-20 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline marker */}
                <div className="absolute left-0 md:left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 animate-pulse"></div>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
                        <Briefcase size={20} className="text-cyan-400" />
                        {exp.role}
                      </h3>
                      <p className="text-cyan-300 font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-sm text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1.5 block w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30 hover:border-cyan-400/50 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;