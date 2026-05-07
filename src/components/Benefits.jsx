import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Smile, Users, Home } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { name: 'Improve Motor Skills', value: 85, icon: <TrendingUp className="text-blue-500" size={24}/>, color: 'bg-blue-500' },
    { name: 'Better Emotional Control', value: 90, icon: <Smile className="text-pink-500" size={24}/>, color: 'bg-pink-500' },
    { name: 'Social Interaction Development', value: 80, icon: <Users className="text-green-500" size={24}/>, color: 'bg-green-500' },
    { name: 'Daily Life Independence', value: 95, icon: <Home className="text-purple-500" size={24}/>, color: 'bg-purple-500' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1">
            <h4 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Therapy Outcomes</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefits of Early <span className="text-primary-500">Intervention</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Consistent therapy and personalized care lead to significant improvements in various aspects of a child's life, helping them reach their full potential.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2 font-semibold text-gray-800">
                      {benefit.icon}
                      <span>{benefit.name}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${benefit.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-3 rounded-full ${benefit.color}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 rounded-2xl bg-blue-100 flex items-center justify-center overflow-hidden">
                   <img src="/assets/gallery_play.png" alt="Child playing" className="w-full h-full object-cover" />
                </div>
                <div className="h-60 rounded-2xl bg-purple-100 flex items-center justify-center overflow-hidden">
                   <img src="/assets/gallery_exercise.png" alt="Child exercising" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="h-60 rounded-2xl bg-green-100 flex items-center justify-center overflow-hidden">
                   <img src="/assets/gallery_teach.png" alt="Therapist teaching" className="w-full h-full object-cover" />
                </div>
                <div className="h-40 rounded-2xl bg-pink-100 flex items-center justify-center p-6 text-center shadow-inner">
                   <h3 className="text-2xl font-bold text-pink-700">"Every step forward is a victory."</h3>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
