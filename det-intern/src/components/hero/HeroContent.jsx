import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import TrustIndicators from './TrustIndicators';

/**
 * HeroContent Component
 * Left-column copy, headline, CTA buttons, and trust badges with entrance animations.
 */
const HeroContent = () => {
  // Animation variants
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
    hidden: { opacity: 0, y: 24 },
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
      animate="visible"
      className="flex flex-col justify-center space-y-6 sm:space-y-8 max-w-2xl lg:max-w-none"
    >
      {/* Aspirational Tagline Pill */}
      <motion.div variants={itemVariants} className="inline-flex">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Excellence International School • Aligarh</span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.12]"
      >
        Shaping Future Leaders Through{' '}
        <span className="bg-gradient-to-r from-secondary to-blue-600 bg-clip-text text-transparent">
          Quality Education
        </span>
      </motion.h1>

      {/* Supporting Subtitle */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl"
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
            className="w-full sm:w-auto font-bold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Apply for Admission</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </NavLink>

        <NavLink to="/facilities" className="w-full sm:w-auto">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto font-semibold hover:bg-slate-100/80 border-slate-300 text-primary transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5 text-secondary" />
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
