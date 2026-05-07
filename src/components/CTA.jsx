import React from 'react';
import { Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 prism-bg opacity-90"></div>
      <div className="absolute inset-0 bg-primary-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 md:p-16 max-w-4xl mx-auto shadow-2xl border border-white/50">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Give Your Child the <span className="text-primary-600">Support They Deserve</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Take the first step towards a brighter, more independent future. Our expert team is here to guide you every step of the way.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <Calendar size={24} />
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
