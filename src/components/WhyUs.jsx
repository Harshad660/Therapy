import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Star, Smile, UsersRound } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      title: "Personalized Therapy Plans",
      desc: "Customized approaches for every child's unique needs.",
      icon: <HeartHandshake className="text-blue-500" size={28} />
    },
    {
      title: "Experienced Therapists",
      desc: "Certified professionals with years of pediatric experience.",
      icon: <Star className="text-yellow-500" size={28} />
    },
    {
      title: "Child-Friendly Environment",
      desc: "Safe, colorful, and engaging clinic spaces.",
      icon: <Smile className="text-green-500" size={28} />
    },
    {
      title: "Family Involvement",
      desc: "We work closely with parents for continuous progress.",
      icon: <UsersRound className="text-purple-500" size={28} />
    }
  ];

  return (
    <section className="py-20 bg-white prism-bg relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/40">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary-500">PRISM?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border border-gray-100">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
