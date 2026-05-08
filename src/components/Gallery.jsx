import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: '/assets/gallery_play.png', alt: 'Child playing' },
    { src: '/assets/gallery_teach.png', alt: 'Therapist teaching' },
    { src: '/assets/gallery_exercise.png', alt: 'Physical exercises' },
    { src: '/assets/1.jpeg', alt: 'Therapist teaching' },
    { src: '/assets/2.jpeg', alt: 'Physical exercises' },
    { src: '/assets/3.jpeg', alt: 'Physical exercises' },
    { src: '/assets/4.jpeg', alt: 'Physical exercises' },
    { src: '/assets/5.jpeg', alt: 'Therapist teaching' },
    { src: '/assets/7.jpeg', alt: 'Physical exercises' },
    { src: '/assets/8.jpeg', alt: 'Physical exercises' },
    { src: '/assets/9.jpeg', alt: 'Physical exercises' },
    { src: '/assets/10.jpeg', alt: 'Physical exercises' },
    { src: '/assets/11.jpeg', alt: 'Physical exercises' },
    { src: '/assets/13.jpeg', alt: 'Physical exercises' }, 
    { src: '/assets/14.jpeg', alt: 'Physical exercises' },

 


    
   
    

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5] sm:aspect-square md:aspect-[4/5] cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-white font-bold text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.alt}</h3>
                <p className="text-gray-200 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Click to view in full size</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
