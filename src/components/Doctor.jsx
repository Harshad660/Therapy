import { motion } from 'framer-motion';

const Doctor = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full max-w-md mx-auto md:max-w-none"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="/assets/doctor.jpg"
                alt="Lead Doctor"
                className="w-full h-auto object-cover scale-105 saturate-[1.4]"
              />
              {/* No overlays - show image only */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h4 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Meet Our Lead Doctor</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Care with a <span className="text-primary-500">Personal Touch</span>
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our lead specialist brings years of dedicated experience in pediatric rehabilitation and development. With a deep understanding of child psychology and occupational  therapy, we ensure that every child receives the highest standard of care tailored to their unique journey.
            </p>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We are committed to fostering an environment where children feel safe, understood, and motivated to learn and grow.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
