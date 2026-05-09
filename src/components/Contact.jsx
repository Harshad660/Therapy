import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Get In Touch</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We're Here for <span className="text-primary-500">You</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions or want to schedule a visit? Reach out to us, and we'll be happy to help.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-8"
          >
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0 text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Location</h5>
                    <p className="text-gray-600 mt-1">Samarth Nagar, Vijapur Road,<br />Solapur, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Phone</h5>
                    <a href="tel:7028056103" className="text-gray-600 mt-1 hover:text-primary-600 transition-colors">
                      +91 7028056103
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0 text-purple-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Working Hours</h5>
                    <p className="text-gray-600 mt-1">Mon - Sat: 6:00 PM - 10:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15214.36440261314!2d75.892994!3d17.652149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbbe0189104f%3A0x8f7d9830ef270e51!2sSamarth%20Nagar%2C%20Solapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PRISM Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Appointments Call: </h3>

              <div>
                <label
                  className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-7 py-3 rounded-xl font-medium transition-all shadow-md hover:shadow-lg">
                  Call: +91 7028056103
                </label>

              </div>


            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
