import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`${scrolled ? 'bg-gray-900/90' : 'bg-transparent'} backdrop-blur-sm sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center ml-20 space-x-2 group">
            <Code className="h-8 w-8 text-purple-400 transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-xl font-bold  text-white">Mayank Saini</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden w-[80vh] md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-gray-300 hover:text-purple-400 transition-all duration-300 relative ${
                  location.pathname === link.path ? 'text-purple-400' : ''
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block text-gray-300 hover:text-purple-400 transition-colors duration-300 ${
                      location.pathname === link.path ? 'text-purple-400' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;