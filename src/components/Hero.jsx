import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden prism-bg">
      <div className="absolute inset-0 pattern-dots opacity-30"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-block bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-primary-700 mb-6 border border-primary-100">
              🌈 Welcome to PRISM Center
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Empowering Children <br className="hidden md:block" /> with <span className="gradient-text">Special Needs</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Development & Rehabilitation for a Better Future. We provide specialized care, compassionate therapy, and a nurturing environment for your child's growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                <Calendar size={20} />
                Book Appointment
              </a>
              <a href="tel:7028056103" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full font-bold text-lg transition-all shadow-sm hover:shadow-md">
                <PhoneCall size={20} />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg mx-auto md:max-w-none relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/WhatsApp Image 2026-05-07 at 10.09.16 PM.jpeg"
                alt="PRISM Center"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </motion.div>

        </div>
      </div >
    </section >
  );
};

export default Hero;
