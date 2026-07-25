import React from 'react';
import { motion } from 'framer-motion';

/**
 * VisionMissionCard Component
 * Displays Vision & Mission statement cards with hover lift and icon styling.
 */
const VisionMissionCard = ({ icon: Icon, title, description, accent = 'blue' }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
    >
      {/* Subtle Top Hover Highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="space-y-4">
        {/* Icon & Title Header */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-colors duration-300 flex-shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-primary tracking-tight">
            {title}
          </h3>
        </div>

        {/* Description Text */}
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default VisionMissionCard;
