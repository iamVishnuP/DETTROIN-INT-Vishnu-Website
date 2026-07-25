import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import Button from '../common/Button';

/**
 * AdmissionCTA Component
 * Full-width call-to-action section prompting parents to apply or contact admissions.
 */
const AdmissionCTA = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl overflow-hidden border border-white/10"
    >
      {/* Decorative Glow Blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        
        {/* Left Copy Column */}
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Admissions Open for Academic Session 2026-27</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            Begin Your Child's Journey with Excellence
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Give your child the gift of world-class CBSE education, state-of-the-art facilities, and a supportive learning environment in Aligarh.
          </p>
        </div>

        {/* Right CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto flex-shrink-0">
          <NavLink to="/admissions" className="w-full sm:w-auto">
            <Button
              variant="accent"
              size="lg"
              className="w-full sm:w-auto font-bold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </NavLink>

          <NavLink to="/contact" className="w-full sm:w-auto">
            <Button
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto font-semibold text-white border border-white/30 hover:bg-white/10 hover:border-white/60 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5 text-accent" />
              <span>Contact Admissions</span>
            </Button>
          </NavLink>
        </div>

      </div>
    </motion.div>
  );
};

export default AdmissionCTA;
