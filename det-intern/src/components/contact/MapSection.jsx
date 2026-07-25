import React from 'react';
import { motion } from 'framer-motion';

/**
 * MapSection Component
 * Responsive Google Maps iframe embedding Excellence International School, Aligarh location.
 */
const MapSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="w-full rounded-3xl overflow-hidden shadow-premium border border-slate-200/80 bg-slate-100 relative h-80 sm:h-96 lg:h-[420px]"
    >
      <iframe
        title="Excellence International School Aligarh Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14115.932454593883!2d78.0743!3d27.8974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a49c95d90899%3A0x8e8334460f1b51e9!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
      />
    </motion.div>
  );
};

export default MapSection;
