import React from 'react';
import { Github, ExternalLink, Bot, Brain, Database } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent conversational AI built with GPT integration and natural language processing capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'OpenAI API', 'Flask', 'React', 'NLP'],
      github: '#',
      live: '#',
      icon: <Bot size={24} />
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'A comprehensive dashboard for data visualization and machine learning model predictions with real-time analytics.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Plotly'],
      github: '#',
      live: '#',
      icon: <Database size={24} />
    },
    {
      title: 'Computer Vision Classifier',
      description: 'Deep learning model for image classification with high accuracy using convolutional neural networks.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'CNN'],
      github: '#',
      live: '#',
      icon: <Brain size={24} />
    },
    {
      title: 'Generative Text Model',
      description: 'Advanced text generation model using transformer architecture for creative content creation.',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'Transformers', 'Hugging Face', 'PyTorch', 'BERT'],
      github: '#',
      live: '#',
      icon: <Bot size={24} />
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center place-items-center">
          {projects.map((project, index) => {
            // Complementary gradients: blue, teal, violet, magenta
            const gradients = [
              'bg-gradient-to-br from-blue-700 via-teal-500 to-purple-500',
              'bg-gradient-to-tr from-teal-600 via-blue-400 to-violet-500',
              'bg-gradient-to-bl from-violet-700 via-blue-600 to-teal-400',
              'bg-gradient-to-tl from-purple-700 via-magenta-500 to-blue-400',
              'bg-gradient-to-br from-magenta-600 via-violet-500 to-blue-500',
              'bg-gradient-to-tr from-blue-500 via-purple-400 to-teal-500'
            ];
            return (
              <Tilt
                key={project.title}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.05}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                className="w-full"
              >
                <div
                  className={`group relative ${gradients[index % gradients.length]} backdrop-blur-lg rounded-xl overflow-hidden border border-blue-400/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"></div>
                    <div className="absolute top-4 right-4 text-orange-300">
                      {project.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-orange-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-orange-100 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-100 px-2 py-1 rounded-full border border-blue-400/30 hover:border-purple-400/50 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 text-sm">
                        <Github size={16} />
                        Code
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 rounded-lg transition-all duration-300 text-sm">
                        <ExternalLink size={16} />
                        Demo
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;