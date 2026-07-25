import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * FacilityCard Component
 * Displays a campus facility with local photography, icon, title, description, and hover elevation.
 */
const FacilityCard = ({ image, title, description, icon: Icon, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
    >
      <div>
        {/* Local Facility Image Header */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={`${title} at Excellence International School Aligarh`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300" />

          {/* Floating Icon Emblem Badge */}
          {Icon && (
            <div className="absolute bottom-3.5 left-3.5 w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-sm text-accent flex items-center justify-center shadow-md border border-white/20">
              <Icon className="w-5 h-5" />
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 space-y-3">
          <h3 className="text-xl font-heading font-bold text-primary tracking-tight group-hover:text-secondary transition-colors duration-200">
            {title}
          </h3>

          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1">
        <Link
          to="/facilities"
          className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors duration-200 group/link"
        >
          <span>Explore Facility</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
