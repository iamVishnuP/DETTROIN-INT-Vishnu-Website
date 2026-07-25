import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Local school hero images
import hero1 from '../../assets/images/hero1.webp';
import hero2 from '../../assets/images/hero2.webp';
import hero3 from '../../assets/images/hero3.webp';
import hero4 from '../../assets/images/hero4.webp';
import hero5 from '../../assets/images/hero5.webp';
import hero6 from '../../assets/images/hero6.webp';

const heroImages = [
  { src: hero1, alt: 'Students engaging in interactive learning at Excellence International School Aligarh' },
  { src: hero2, alt: 'School Assembly & Campus Reflection' },
  { src: hero3, alt: 'Modern Classroom Learning & Mentorship' },
  { src: hero4, alt: 'Outdoor Sports & Physical Fitness Activities' },
  { src: hero5, alt: 'Cultural Events & Student Celebrations' },
  { src: hero6, alt: 'Science & Technological Innovation Exhibitions' },
];

/**
 * HeroImage Component
 * Multi-image responsive hero showcase displaying full-resolution local school photography
 * with automatic slideshow transitions and slide controls.
 */
const HeroImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slideshow every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  return (
    <div className="relative w-full flex items-center justify-center lg:justify-end">
      
      {/* Decorative Gradient Glow Backdrops */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Abstract Decorative Outer Ring */}
      <div className="absolute inset-0 m-auto w-[94%] h-[94%] rounded-3xl border border-secondary/10 rotate-2 pointer-events-none" />

      {/* Main Hero Image Showcase Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative z-10 w-full max-w-xl lg:max-w-xl xl:max-w-2xl rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200/80 p-3 sm:p-4 group"
      >
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl bg-slate-50 min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full h-auto max-h-[480px] sm:max-h-[540px] object-contain rounded-2xl"
              loading="eager"
            />
          </AnimatePresence>

          {/* Previous Slide Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-primary/70 hover:bg-primary text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Previous Hero Image"
          >
            <ChevronLeft className="w-5 h-5 text-accent" />
          </button>

          {/* Next Slide Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-primary/70 hover:bg-primary text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Next Hero Image"
          >
            <ChevronRight className="w-5 h-5 text-accent" />
          </button>

          {/* Image Slide Dot Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-primary/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-6 bg-accent' : 'w-2 bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default HeroImage;
