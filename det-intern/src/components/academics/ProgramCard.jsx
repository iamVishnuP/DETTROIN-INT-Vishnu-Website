import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * ProgramCard Component
 * Displays an individual academic program stage card with local photography,
 * grade/age pill, description, and hover micro-animations.
 */
const ProgramCard = ({ image, title, gradeRange, description, icon: Icon, delay = 0 }) => {
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
        {/* Local Image Header with Grade Range Badge */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={`${title} at Excellence International School`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-80" />

          {/* Grade / Age Range Badge */}
          {gradeRange && (
            <div className="absolute top-3.5 right-3.5 bg-primary/95 backdrop-blur-sm text-accent text-xs font-bold px-3 py-1 rounded-full shadow-md border border-white/10">
              {gradeRange}
            </div>
          )}
        </div>

        {/* Card Content Body */}
        <div className="p-6 sm:p-7 space-y-3.5">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </div>
            )}
            <h3 className="text-xl font-heading font-bold text-primary tracking-tight group-hover:text-secondary transition-colors duration-200">
              {title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Card Footer: Learn More Link Indicator */}
      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
        <Link
          to="/academics"
          className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors duration-200 group/link"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
