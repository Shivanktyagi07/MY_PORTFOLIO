import React from 'react';
import { BookOpen, Code, Briefcase, Award, User } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </div>

      <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-12 shadow-xl">
        <div className="flex items-start mb-6">
          <User className="text-purple-400 mr-4 mt-1 flex-shrink-0" size={28} />
          <div>
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <p className="text-gray-300 leading-relaxed">
              Passionate Developer with 6 month experience on real world project in Firsthope. 
              Graduated from BCA and pursuing MCA with a strong academic background in computer science, 
              Seeking a Developer role to leverage skills in HTML, CSS, JavaScript, React, MongoDB, and SQL databases. 
              I am eager to learn from experienced IT professionals and contribute to web application development 
              with Upskilling myself.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl">
          <div className="flex items-start mb-4">
            <BookOpen className="text-purple-400 mr-4 mt-1 flex-shrink-0" size={24} />
            <div>
              <h2 className="text-xl font-bold mb-2">Education</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold text-purple-300">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-gray-400">Pt. Deen Dayal Upadhyay Management College</p>
                  <p className="text-gray-400">Graduated: June 2024</p>
                </li>
                <li>
                  <h3 className="font-semibold text-purple-300">Masters of Computer Applications (MCA)</h3>
                  <p className="text-gray-400">Galgotias University</p>
                  <p className="text-gray-400">Currently Pursuing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl">
          <div className="flex items-start mb-4">
            <Code className="text-purple-400 mr-4 mt-1 flex-shrink-0" size={24} />
            <div>
              <h2 className="text-xl font-bold mb-2">Skills & Tech Skills</h2>
              <div className="mb-4">
                <h3 className="font-semibold text-purple-300 mb-2">Technical Skills</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Programming Languages: Python, JavaScript</li>
                  <li>Web Development: HTML, CSS, JavaScript, React, Express, MongoDB, REDUX toolkit, React hooks, Vite, Nodejs, AWS, AI</li>
                  <li>Version Control: Git & GitHub</li>
                  <li>Other Skills: RestFull API Development and integration, Tailwind CSS, DSA, Frontend development, Backend development</li>
                </ul>
              </div>
              <div >
                <h3 className="font-semibold text-purple-300 mb-2">Soft Skills</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Conversational Skills</li>
                  <li>Multitasking</li>
                  <li>Well-Organized</li>
                  <li>Team Coordination</li>
                  <li>Milestone Achiever</li>
                  <li>Quick Learner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-12 shadow-xl">
        <div className="flex items-start mb-4">
          <Briefcase className="text-purple-400 mr-4 mt-1 flex-shrink-0" size={24} />
          <div>
            <h2 className="text-xl font-bold mb-4">Experience</h2>
            <div className="border-l-2 border-purple-500 pl-4 ml-2">
              <h3 className="font-semibold text-purple-300 text-lg">Fullstack Developer</h3>
              <p className="text-gray-400 mb-2">Firsthope | May 2024 - October 2024 (6 Months)</p>
              <p className="text-gray-300 mb-4">
                During this internship, I worked on the company website to improve User experience and 
                Played a crucial role in the company new projects. Build foundation of a new project by 
                writing Frontend code and Backend code to full functional API with clean coding practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl">
        <div className="flex items-start mb-4">
          <Award className="text-purple-400 mr-4 mt-1 flex-shrink-0" size={24} />
          <div>
            <h2 className="text-xl font-bold mb-4">Certificates</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold text-purple-300">Full Stack Web Development certificate</h3>
                <p className="text-gray-400">Physics Wallah</p>
                <p className="text-gray-500 text-sm">CERTIFICATE NO: eb99c0de-5a6b-468e-a53c-d60d04339d31</p>
              </li>
              <li>
                <h3 className="font-semibold text-purple-300">Backend Development certificate</h3>
                <p className="text-gray-400">Physics Wallah</p>
                <p className="text-gray-500 text-sm">CERTIFICATE NO: cfa39de4-b75c-4146-8870-777c9ee74326</p>
              </li>
              <li>
                <h3 className="font-semibold text-purple-300">System Design Workshop</h3>
                <p className="text-gray-500 text-sm">CERTIFICATE NO: d8d0185c-f7a3-4db0-8560-326559dae7ce</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;