// import React from 'react';
import { BookOpen, Code, Briefcase, Award, User } from "lucide-react";

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
              Aspiring Developer with a strong foundation in Java, Python,
              JavaScript, React, and full-stack development. Currently pursuing
              MCA, passionate about building projects and mastering DSA. Eager
              to learn, grow, and contribute to impactful tech solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl">
          <div className="flex items-start mb-4">
            <BookOpen
              className="text-purple-400 mr-4 mt-1 flex-shrink-0"
              size={24}
            />
            <div>
              <h2 className="text-xl font-bold mb-2">Education</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold text-purple-300">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-gray-400">
                    Pt. Deen Dayal Upadhyay Management College
                  </p>
                  <p className="text-gray-400">Graduated: June 2024</p>
                </li>
                <li>
                  <h3 className="font-semibold text-purple-300">
                    Masters of Computer Applications (MCA)
                  </h3>
                  <p className="text-gray-400">Quantum University, Roorkee</p>
                  <p className="text-gray-400">Currently Pursuing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl">
          <div className="flex items-start mb-4">
            <Code
              className="text-purple-400 mr-4 mt-1 flex-shrink-0"
              size={24}
            />
            <div>
              <h2 className="text-xl font-bold mb-2">Skills & Tech Skills</h2>
              <div className="mb-4">
                <h3 className="font-semibold text-purple-300 mb-2">
                  Technical Skills
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Programming Languages: C++, Java, Python, JavaScript</li>
                  <li>
                    Web Development: HTML, CSS, JavaScript, React, Express,
                    MongoDB, Basics of REDUX toolkit, React hooks, Vite, Nodejs,
                    AI
                  </li>
                  <li>Version Control: Git & GitHub</li>
                  <li>
                    Other Skills: RestFull API Development and integration,
                    Tailwind CSS, DSA, Frontend development, Backend development
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-purple-300 mb-2">
                  Soft Skills
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Problem-Solving</li>
                  <li>Logical Thinking</li>
                  <li>Efficient Multitasking</li>
                  <li>Strong Analytical Skills</li>
                  <li>Project Management</li>
                  <li>Continuous Learner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-12 shadow-xl">
        <div className="flex items-start mb-4">
          <Briefcase
            className="text-purple-400 mr-4 mt-1 flex-shrink-0"
            size={24}
          />
          <div>
            <h2 className="text-xl font-bold mb-4">Experience</h2>
            <div className="border-l-2 border-purple-500 pl-4 ml-2">
              <h3 className="font-semibold text-purple-300 text-lg">
                Full-Stack Developer (Project-Based)
              </h3>
              <p className="text-gray-400 mb-2">
                Self-Driven Projects & Learning
              </p>
              <p className="text-gray-300 mb-4">
                Passionate about **software development**, I have built and
                deployed multiple **full-stack web applications** using **React,
                Node.js, MongoDB, and SQL**. I have also worked on **Java,
                Python, DSA**, and **Machine Learning projects**, including a
                **Fake News Detection System** and a **Movie Recommendation
                System**. Through hands-on learning, I have gained strong
                **problem-solving** and **debugging** skills, ensuring optimized
                and scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl">
        <div className="flex items-start mb-4">
          <Award
            className="text-purple-400 mr-4 mt-1 flex-shrink-0"
            size={24}
          />
          <div>
            <h2 className="text-xl font-bold mb-4">Certificates</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold text-purple-300">
                  Full Stack Web Development certificate
                </h3>
                <p className="text-gray-400">Physics Wallah</p>
                <p className="text-gray-500 text-sm">
                  CERTIFICATE NO: 06abca2d-32d6-400b-b5f2-99f20c240fe8
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
