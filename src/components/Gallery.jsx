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
    <section id="gallery" className="py-24 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/30 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/20 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            Our Vibrant Space
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Therapy in <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600">Action</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">Capturing moments of growth, joy, and independence at PRISM Center.</p>
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
              <div className="relative w-full h-full overflow-hidden group">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110 saturate-[1.6] contrast-[1.1] brightness-[1.05]"
                />
                
                {/* Premium Feathered Radial Face Blur Overlay */}
                <div 
                  className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[60%] h-[55%] rounded-full backdrop-blur-[28px] pointer-events-none z-10"
                  style={{
                    WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 80%)',
                    maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 80%)'
                  }}
                />

                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30">
                   <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">Privacy Protected</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
