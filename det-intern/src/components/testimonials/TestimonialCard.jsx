import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

/**
 * TestimonialCard Component
 * Displays a single parent recommendation card with rating stars, quote icon, local avatar, and feedback.
 */
const TestimonialCard = ({ image, role, testimonial, rating = 5, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-100 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between h-full relative group overflow-hidden"
    >
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="space-y-4">
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-accent">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-secondary/20 group-hover:text-secondary/40 transition-colors duration-300" />
        </div>

        {/* Testimonial Quote */}
        <p className="text-sm sm:text-base text-neutral-700 italic font-normal leading-relaxed">
          "{testimonial}"
        </p>
      </div>

      {/* Parent Profile Info */}
      <div className="flex items-center gap-3.5 pt-6 border-t border-slate-100 mt-6">
        {image ? (
          <img
            src={image}
            alt={role}
            className="w-12 h-12 rounded-full object-cover border-2 border-secondary/20 flex-shrink-0"
            loading="lazy"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
            EIS
          </div>
        )}
        <div>
          <h4 className="font-heading font-bold text-primary text-sm sm:text-base leading-tight">
            Excellence Parent
          </h4>
          <p className="text-xs text-neutral-500 font-medium">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
