import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 via-green-400 to-purple-400 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                P
              </div>
              <h2 className="font-bold text-2xl text-white">PRISM Center</h2>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering children with special needs through expert development and rehabilitation therapies in a caring environment.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="home" smooth={true} className="hover:text-primary-400 cursor-pointer transition-colors">Home</Link></li>
              <li><Link to="about" smooth={true} className="hover:text-primary-400 cursor-pointer transition-colors">About Us</Link></li>
              <li><Link to="services" smooth={true} className="hover:text-primary-400 cursor-pointer transition-colors">Services</Link></li>
              <li><Link to="gallery" smooth={true} className="hover:text-primary-400 cursor-pointer transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-primary-400 cursor-pointer transition-colors">Occupational Therapy</li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">Speech Therapy</li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">Sensory Integration</li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">Behavioral Therapy</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PRISM Child Development & Rehab Activity Center. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with care for the community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
