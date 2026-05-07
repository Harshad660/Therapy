import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: '/assets/gallery_play.png', alt: 'Child playing' },
    { src: '/assets/gallery_teach.png', alt: 'Therapist teaching' },
    { src: '/assets/gallery_exercise.png', alt: 'Physical exercises' },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h4 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Our Space</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Therapy in <span className="text-primary-500">Action</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg h-72 cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-bold text-xl">{img.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
