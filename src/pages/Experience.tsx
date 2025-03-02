import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          My professional journey as a developer, showcasing my work experience and the skills I've gained along the way.
        </p>
        <div className="h-1 w-20 bg-purple-500 mx-auto mt-4"></div>
      </div>

      <div className="relative border-l-2 border-purple-500 pl-8 ml-4 mb-12">
        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
          <Briefcase size={14} className="text-white" />
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl mb-12">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-purple-300">Fullstack Developer</h2>
            <div className="flex items-center text-gray-400 mt-2 sm:mt-0">
              <Calendar size={16} className="mr-1" />
              <span>May 2024 - October 2024 (6 Months)</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">Firsthope</h3>
          
          <p className="text-gray-300 mb-6">
            During this internship, I worked on the company website to improve User experience and 
            Played a crucial role in the company new projects. Build foundation of a new project by 
            writing Frontend code and Backend code to full functional API with clean coding practices.
          </p>
          
          <h4 className="text-lg font-semibold mb-3 text-purple-300">Responsibilities:</h4>
          <ul className="space-y-2">
            {[
              'Developed and maintained responsive web applications using React',
              'Created RESTful APIs using Node.js and Express',
              'Implemented database solutions with MongoDB',
              'Collaborated with the design team to implement UI/UX improvements',
              'Participated in code reviews and provided constructive feedback',
              'Optimized application performance and fixed bugs',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={18} className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-purple-300 mb-6">Skills Gained</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Technical Skills</h3>
              <ul className="space-y-2">
                {[
                  'Frontend Development with React',
                  'Backend Development with Node.js and Express',
                  'Database Management with MongoDB',
                  'RESTful API Development',
                  'Version Control with Git',
                  'Responsive Web Design',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Soft Skills</h3>
              <ul className="space-y-2">
                {[
                  'Team Collaboration',
                  'Problem Solving',
                  'Time Management',
                  'Communication',
                  'Adaptability',
                  'Attention to Detail',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;