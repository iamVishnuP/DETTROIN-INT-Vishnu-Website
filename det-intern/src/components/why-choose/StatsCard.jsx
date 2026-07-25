import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * StatsCard Component
 * Displays a key performance metric card with icon and scroll animation.
 */
const StatsCard = ({ value, label, description, icon: Icon, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      className="bg-primary text-white p-6 sm:p-7 rounded-2xl shadow-lg border border-white/10 flex flex-col justify-center items-center text-center group hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent/10 rounded-full blur-xl pointer-events-none group-hover:bg-accent/20 transition-colors duration-300" />

      {Icon && (
        <div className="w-10 h-10 rounded-full bg-white/10 text-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 h-5" />
        </div>
      )}

      {/* Main Metric Value */}
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-accent font-heading tracking-tight mb-1">
        {value}
      </div>

      {/* Label */}
      <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
        {label}
      </h4>

      {/* Optional Short Description */}
      {description && (
        <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default StatsCard;
