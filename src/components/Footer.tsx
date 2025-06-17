// import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm py-8 mt-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 ml-5 md:mb-0">
            <h3 className="text-xl font-bold text-white">Shivank Tyagi</h3>
            <p className="text-gray-400 mt-1">Fullstack Developer</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/Shivanktyagi07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivank-tyagi-083902270/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shivanktyagi976@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-gray-400 text-sm mr-8">
            <p>
              &copy; {new Date().getFullYear()} Shivank Tyagi. All rights
              reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="ml-6">
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:pl-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:pl-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:pl-1"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:pl-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Projects</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://blogsiteproject.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                >
                  Blog Website{" "}
                  <ExternalLink
                    size={14}
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://gregarious-cendol-bffdc3.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                >
                  ChatBot{" "}
                  <ExternalLink
                    size={14}
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://react-codes.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                >
                  Currency Converter{" "}
                  <ExternalLink
                    size={14}
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a
                  href="mailto:mayanksinikht@gmail.com"
                  className="text-purple-400 hover:underline hover:text-purple-300 transition-colors duration-300"
                >
                  shivanktyagi976@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Phone:</span>
                <a
                  href="tel:8534838575"
                  className="text-purple-400 hover:underline hover:text-purple-300 transition-colors duration-300"
                >
                  7505948580
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
