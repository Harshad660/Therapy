import { motion } from 'framer-motion';
import { CheckCircle2, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full"
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src="/assets/about_therapy.png" 
                  alt="Therapist with a child" 
                  className="w-full object-cover saturate-[1.5] contrast-[1.05]"
                />
                {/* No overlays - show image only */}
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 hidden sm:flex">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">10+</p>
                  <p className="text-sm text-gray-500 font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h4 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dedicated to Helping Children Become <span className="text-primary-500">Independent</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At PRISM Child Development & Rehab Activity Center, we believe every child has unique potential. Our dedicated team of certified professionals provides a safe, nurturing, and engaging environment where children can thrive.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-gray-800">Certified Therapists</h5>
                  <p className="text-gray-600">Highly qualified experts in pediatric rehabilitation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="text-pink-500 mt-1 shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-gray-800">Personalized Plans</h5>
                  <p className="text-gray-600">Therapy customized to your child's specific needs and goals.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary-50 rounded-xl border border-primary-100">
              <h4 className="font-bold text-primary-800 mb-2">Our Mission</h4>
              <p className="text-primary-700">
                To empower children with special needs by enhancing their cognitive, physical, and emotional skills, ultimately helping them lead independent and fulfilling lives.
              </p>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
