import React from 'react';
import { motion } from 'framer-motion';

/**
 * FloatingCard Component
 * Decorative floating badge overlaid around the hero image composition.
 */
const FloatingCard = ({ icon: Icon, title, subtitle, positionClass, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + 0.3 }}
      className={`absolute z-20 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-premium border border-slate-100 ${positionClass}`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: delay,
        }}
        className="flex items-center gap-3"
      >
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-heading font-bold text-xs sm:text-sm text-primary leading-tight">
            {title}
          </h4>
          <p className="text-[11px] sm:text-xs text-neutral-500 font-medium">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCard;
