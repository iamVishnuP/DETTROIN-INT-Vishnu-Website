import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import aboutImage from '../../assets/images/about1.webp';

/**
 * AboutImage Component
 * Left-column image composition featuring local campus photography,
 * decorative background geometry, and floating achievement highlights.
 */
const AboutImage = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      
      {/* Decorative Glow Blobs */}
      <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Outer Border Frame */}
      <div className="absolute inset-0 m-auto w-[92%] h-[92%] rounded-3xl border-2 border-dashed border-secondary/20 -rotate-2 pointer-events-none" />

      {/* Main Photography Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200/80 group"
      >
        <img
          src={aboutImage}
          alt="Excellence International School campus building and student activities"
          className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Floating Badge: Academic Excellence */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute -bottom-6 -right-2 sm:right-4 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-premium border border-slate-100 flex items-center gap-3.5"
      >
        <div className="w-12 h-12 rounded-xl bg-accent text-primary flex items-center justify-center font-bold text-xl shadow-sm flex-shrink-0">
          <Award className="w-7 h-7 text-primary" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-primary font-heading font-extrabold text-sm sm:text-base">
            <span>CBSE Affiliated</span>
            <CheckCircle2 className="w-4 h-4 text-secondary" />
          </div>
          <p className="text-xs text-neutral-500 font-medium">
            Excellence International School
          </p>
        </div>
      </motion.div>

    </div>
  );
};

export default AboutImage;
