import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sneha Patil",
      role: "Parent of 5-year-old",
      text: "We saw a massive improvement in Aryan's speech and behavior within just a few months. The therapists here are like family. They truly care about the children.",
      rating: 5
    },
    {
      name: "Rahul Deshmukh",
      role: "Parent of 7-year-old",
      text: "PRISM Center changed our lives. The occupational therapy sessions helped my daughter become much more independent in her daily activities.",
      rating: 5
    },
    {
      name: "Pooja Kulkarni",
      role: "Parent of 4-year-old",
      text: "The safe and colorful environment is amazing. My son actually looks forward to his sensory integration sessions every week. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Happy Parents</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories of <span className="text-primary-500">Progress</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{review.name}</h4>
                <p className="text-sm text-primary-600 font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
