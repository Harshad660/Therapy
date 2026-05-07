import React from 'react';
import { motion } from 'framer-motion';
import { Activity, MessageCircle, Eye, BrainCircuit, BookOpen, Users } from 'lucide-react';

const services = [
  {
    title: 'Occupational Therapy',
    description: 'Developing fine motor skills, hand-eye coordination, and daily living skills.',
    icon: <Activity size={32} />,
    color: 'bg-blue-100 text-blue-600',
    borderColor: 'hover:border-blue-300'
  },
  {
    title: 'Speech Therapy',
    description: 'Improving communication, articulation, and language comprehension.',
    icon: <MessageCircle size={32} />,
    color: 'bg-green-100 text-green-600',
    borderColor: 'hover:border-green-300'
  },
  {
    title: 'Sensory Integration',
    description: 'Helping children process and respond to sensory information effectively.',
    icon: <Eye size={32} />,
    color: 'bg-purple-100 text-purple-600',
    borderColor: 'hover:border-purple-300'
  },
  {
    title: 'Behavioral Therapy',
    description: 'Addressing challenging behaviors and promoting positive coping strategies.',
    icon: <BrainCircuit size={32} />,
    color: 'bg-yellow-100 text-yellow-600',
    borderColor: 'hover:border-yellow-300'
  },
  {
    title: 'Special Education',
    description: 'Tailored educational support to match individual learning styles.',
    icon: <BookOpen size={32} />,
    color: 'bg-pink-100 text-pink-600',
    borderColor: 'hover:border-pink-300'
  },
  {
    title: 'Parent Guidance',
    description: 'Equipping families with tools and knowledge to support their child.',
    icon: <Users size={32} />,
    color: 'bg-orange-100 text-orange-600',
    borderColor: 'hover:border-orange-300'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Our Programs</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-primary-500">Therapy Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a wide range of specialized therapies designed to support your child's developmental journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${service.borderColor} group cursor-pointer`}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
