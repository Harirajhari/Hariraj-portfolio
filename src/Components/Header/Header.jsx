import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full p-4 bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left: Logo */}
        <div className="text-xl font-bold tracking-wide">
          Hari Raj
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-violet-400 transition">About</a>
          <a href="#skills" className="hover:text-violet-400 transition">Skills</a>
          <a href="#Expericence" className="hover:text-violet-400 transition">Experience</a>
          <a href="#projects" className="hover:text-violet-400 transition">Projects</a>
          <a href="#contact" className="hover:text-violet-400 transition">Contact</a>
          <a
            href="https://drive.google.com/file/d/1FnoIngh9r8Ugu1-8WOO_wt4sKhbGkWyA/view?usp=sharing"
            download
            className="px-3 py-1 rounded-full border border-violet-500 hover:bg-violet-600 hover:text-white transition text-violet-400"
          >
            Resume
          </a>
        </nav>

        {/* Right: Social Icons */}
        <div className="hidden md:flex space-x-3 text-xl text-violet-400">
          <a href="https://github.com/Harirajhari/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/harirajk/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-white transition" />
          </a>
          <a href="https://www.instagram.com/hariraj__official_?igsh=MWY4NWowbWF3amVnNg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-white transition" />
          </a>
        </div>


        {/* Mobile: Hamburger Icon */}
        <div className="md:hidden">
          <button className="text-white text-2xl" onClick={toggleMenu}>
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden fixed top-0 left-0 w-full h-1/2 bg-gray-900 text-white z-40 shadow-lg rounded-b-xl flex flex-col items-center justify-center space-y-5 px-6">
          <button
            className="absolute top-4 right-6 text-3xl text-violet-400 hover:text-white transition"
            onClick={toggleMenu}
          >
            &times;
          </button>

          <a href="#about" className="text-lg hover:text-violet-400 transition">About</a>
          <a href="#skills" className="text-lg hover:text-violet-400 transition">Skills</a>
          <a href="#Expericence" className="text-lg hover:text-violet-400 transition">Experience</a>
          <a href="#projects" className="text-lg hover:text-violet-400 transition">Projects</a>
          <a href="#contact" className="text-lg hover:text-violet-400 transition">Contact</a>

          <adownload
            href="https://drive.google.com/file/d/1FnoIngh9r8Ugu1-8WOO_wt4sKhbGkWyA/view?usp=sharing"
            
            className="mt-2 px-5 py-2 rounded-full border border-violet-500 text-violet-400 hover:bg-violet-600 hover:text-white transition"
          >
            Resume
          </a>

          <div className="hidden md:flex space-x-3 text-xl text-violet-400">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-white transition" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-white transition" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
          </div>

        </nav>

      )}
    </header>
  );
};

export default Header;
