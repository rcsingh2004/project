import React from 'react';
import { Brain, Code, Bot, Globe } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export const skillsData = [
  {
    title: 'Machine Learning',
    icon: <Brain size={32} />,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy']
  },
  {
    title: 'Programming',
    icon: <Code size={32} />,
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'R']
  },
  {
    title: 'Generative AI',
    icon: <Bot size={32} />,
    skills: ['LLMs', 'GPT', 'BERT', 'Transformers', 'Hugging Face']
  },
  {
    title: 'Web Development',
    icon: <Globe size={32} />,
    skills: ['React', 'Node.js', 'FastAPI', 'Flask', 'REST APIs']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => {
            const gradients = [
              'bg-gradient-to-br from-cyan-700 via-purple-700 to-cyan-400',
              'bg-gradient-to-tr from-cyan-500 via-purple-600 to-cyan-300',
              'bg-gradient-to-bl from-cyan-600 via-purple-500 to-cyan-200',
              'bg-gradient-to-tl from-cyan-800 via-purple-800 to-cyan-500'
            ];
            return (
              <Tilt
                key={category.title}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.05}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                className="w-full"
              >
                <div
                  className={`group relative ${gradients[index % gradients.length]} backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center mb-4 text-cyan-100 group-hover:text-white transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4 text-white group-hover:text-cyan-100 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-sm text-gray-100 bg-gray-700/50 rounded-full px-3 py-1 text-center group-hover:bg-gray-600/50 group-hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;