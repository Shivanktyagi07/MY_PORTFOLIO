import React, { useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // Create cursor elements
    const cursorDot = document.createElement("div");
    const cursorOutline = document.createElement("div");
    cursorDot.className = "cursor-dot";
    cursorOutline.className = "cursor-outline";
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    // Mouse move event
    const handleMouseMove = (e: MouseEvent) => {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;

      // Add a slight delay to the outline for a trailing effect
      setTimeout(() => {
        cursorOutline.style.left = `${e.clientX}px`;
        cursorOutline.style.top = `${e.clientY}px`;
      }, 50);
    };

    // Mouse enter/leave events for interactive elements
    const handleMouseEnter = () => {
      cursorDot.style.width = "12px";
      cursorDot.style.height = "12px";
      cursorOutline.style.width = "50px";
      cursorOutline.style.height = "50px";
      cursorOutline.style.borderColor = "rgba(147, 51, 234, 0.6)";
    };

    const handleMouseLeave = () => {
      cursorDot.style.width = "8px";
      cursorDot.style.height = "8px";
      cursorOutline.style.width = "40px";
      cursorOutline.style.height = "40px";
      cursorOutline.style.borderColor = "rgba(147, 51, 234, 0.3)";
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, .card-hover"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.body.removeChild(cursorDot);
      document.body.removeChild(cursorOutline);
    };
  }, []);

  return (
    <div className="min-h-[calc(100vh-200px )]  ml-10 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent animate-pulse">
            Shivank Tyagi
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-300 mb-6 mt-6">
            Fullstack Developer
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Passionate Developer with 6 months of experience on real-world
            projects. Skilled in React, MongoDB, Express, Node.js, and more.
            Looking to create impactful web applications and continuously
            upskill.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://github.com/Shivanktyagi07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shivank-tyagi-083902270/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:shivanktyagi976@gmail.com"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1"
            >
              <Mail size={20} />
              Email
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn-primary">
              View Projects
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl shadow-purple-900/30 transition-all duration-500 hover:shadow-white hover:scale-105">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHyBbr7yq-9SQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696436984201?e=1747872000&v=beta&t=6liOIubRSQj2pc1bDDWO12bHZLTcQQm-YCZsUZFB_tw"
              alt="Shivank Tyagi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
        <div className="flex  flex-wrap justify-center gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Redux",
            "Tailwind CSS",
            "Git",
            "AWS",
            "Python",
            "AI",
            "GenAI",
            "Vite",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-gray-800  bg-opacity-50 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-md transition-all duration-300 hover:bg-purple-700 hover:text-white hover:scale-110 transform"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
