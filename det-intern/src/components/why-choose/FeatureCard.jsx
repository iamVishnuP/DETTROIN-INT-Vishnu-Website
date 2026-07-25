import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * FeatureCard Component
 * Modern feature card displaying icon, title, description, and scroll animations with reduced motion support.
 */
const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      className="bg-white p-7 rounded-2xl border border-slate-100 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top Accent Gradient Bar on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="space-y-4">
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-colors duration-300 flex-shrink-0">
          <Icon className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-primary tracking-tight group-hover:text-secondary transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
