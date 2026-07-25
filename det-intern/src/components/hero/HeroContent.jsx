import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import TrustIndicators from './TrustIndicators';

/**
 * HeroContent Component
 * Headline, copy, CTA buttons, and trust badges with refined entrance animations.
 */
const HeroContent = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="flex flex-col justify-center space-y-6 sm:space-y-8 max-w-3xl"
    >
      {/* Tagline Pill */}
      <motion.div variants={itemVariants} className="inline-flex">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-sm">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-slate-100">Excellence International School • Aligarh</span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
      >
        Shaping Future Leaders Through{' '}
        <span className="bg-gradient-to-r from-amber-300 via-accent to-amber-400 bg-clip-text text-transparent">
          Quality Education
        </span>
      </motion.h1>

      {/* Supporting Subtitle */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl"
      >
        Empowering young minds with world-class CBSE curriculum, state-of-the-art facilities, and a supportive environment dedicated to academic excellence and holistic character growth.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1"
      >
        <NavLink to="/admissions" className="w-full sm:w-auto">
          <Button
            variant="accent"
            size="lg"
            className="w-full sm:w-auto font-bold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Apply for Admission</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </NavLink>

        <NavLink to="/facilities" className="w-full sm:w-auto">
          <Button
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5 text-accent" />
            <span>Explore Campus</span>
          </Button>
        </NavLink>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div variants={itemVariants}>
        <TrustIndicators />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
