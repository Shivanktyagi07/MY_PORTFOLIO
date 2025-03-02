import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'Physics Wallah',
    date: 'June 2023',
    certificateNo: 'eb99c0de-5a6b-468e-a53c-d60d04339d31',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB','NetWorking','Deployment','User Interface'],
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 2,
    title: 'Backend Development',
    issuer: 'Physics Wallah',
    date: 'August 2023',
    certificateNo: 'cfa39de4-b75c-4146-8870-777c9ee74326',
    skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'Authentication', 'Database Design','API','Authorization','Clean Coding'],
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 3,
    title: 'System Design Workshop',
    issuer: 'Physics Wallah',
    date: 'October 2023',
    certificateNo: 'd8d0185c-f7a3-4db0-8560-326559dae7ce',
    skills: ['System Architecture', 'Scalability', 'Database Design', 'API Design', 'Microservices','Load Balancing'],
    color: 'from-orange-500 to-red-500',
  },
 
];

const Certificates = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Certificates</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Professional certifications I've earned to enhance my skills and knowledge in web development.
        </p>
        <div className="h-1 w-20 bg-purple-500 mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {certificates.map((certificate) => (
          <div 
            key={certificate.id} 
            className="bg-gray-800  bg-opacity-50 rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            <div className={`h-3 bg-gradient-to-r ${certificate.color}`}></div>
            <div className="p-6">
              <div className="flex items-start">
                <Award className="text-purple-400 mr-4 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-1 text-purple-300">{certificate.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {certificate.issuer} • {certificate.date}
                  </p>
                  
                  <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-300 text-sm font-mono">
                      Certificate No: {certificate.certificateNo}
                    </p>
                  </div>
                  
                  <h4 className="text-sm font-semibold uppercase text-gray-400 mb-2">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.map((skill) => (
                      <span key={skill} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;