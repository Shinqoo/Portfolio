import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] bg-[#121212] text-white">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left space-y-1">
          <p className="text-lg font-semibold">Shinji T. Ishikawa</p>
          <p className="text-sm text-gray-400">+63 917 654 1841</p>
          <p className="text-sm text-gray-400">ishikawa.shinji28@gmail.com</p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Shinqoo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/shinji-ishikawa-02500318a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
