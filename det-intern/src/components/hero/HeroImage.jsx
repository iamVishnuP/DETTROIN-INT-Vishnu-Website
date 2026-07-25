import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, Globe } from 'lucide-react';
import FloatingCard from './FloatingCard';

// Local school hero image
import heroImage from '../../assets/images/hero1.webp';

/**
 * HeroImage Component
 * Composition displaying hero photography, decorative backdrop elements, and floating highlight cards.
 */
const HeroImage = () => {
  return (
    <div className="relative w-full flex items-center justify-center lg:justify-end">
      
      {/* Decorative Gradient Glow Backdrops */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Abstract Decorative Outer Ring */}
      <div className="absolute inset-0 m-auto w-[92%] h-[92%] rounded-3xl border border-secondary/10 rotate-2 pointer-events-none" />

      {/* Main Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative z-10 w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200/80 p-2 sm:p-3 group"
      >
        <img
          src={heroImage}
          alt="Students engaging in interactive learning at Excellence International School Aligarh"
          className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          loading="eager"
        />

        {/* Subtle Image Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none rounded-3xl" />
      </motion.div>

      {/* Floating Card 1: Top Left */}
      <FloatingCard
        icon={Award}
        title="Experienced Faculty"
        subtitle="Dedicated Educators"
        positionClass="-top-4 -left-4 sm:-left-8"
        delay={0.1}
      />

      {/* Floating Card 2: Bottom Right */}
      <FloatingCard
        icon={Building2}
        title="Modern Campus"
        subtitle="State-of-the-Art Facilities"
        positionClass="-bottom-4 -right-4 sm:-right-6"
        delay={0.4}
      />

      {/* Floating Card 3: Middle Right / Left Accent Badge */}
      <FloatingCard
        icon={Globe}
        title="Holistic Learning"
        subtitle="World-Class Curriculum"
        positionClass="top-1/2 -right-6 transform -translate-y-1/2 hidden xl:flex"
        delay={0.7}
      />

    </div>
  );
};

export default HeroImage;

