import React from 'react';
import { motion } from 'framer-motion';

// Local school hero images
import hero1 from '../../assets/images/hero1.webp';
import hero2 from '../../assets/images/hero2.webp';
import hero3 from '../../assets/images/hero3.webp';
import hero4 from '../../assets/images/hero4.webp';
import hero5 from '../../assets/images/hero5.webp';
import hero6 from '../../assets/images/hero6.webp';

const images = [hero1, hero2, hero3, hero4, hero5, hero6];
// Duplicated for seamless infinite left-to-right marquee loop
const infiniteImages = [...images, ...images];

/**
 * HeroBackgroundSlider Component
 * Seamless, infinite horizontal background slider moving from left to right behind hero text.
 */
const HeroBackgroundSlider = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Moving Images Marquee Track (Left to Right) */}
      <motion.div
        animate={{ x: ['-50%', '0%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 35,
        }}
        className="flex items-center h-full w-[200%] gap-4"
      >
        {infiniteImages.map((imgSrc, index) => (
          <div
            key={index}
            className="w-[30vw] sm:w-[25vw] md:w-[20vw] h-[85%] flex-shrink-0 rounded-3xl overflow-hidden opacity-40 filter brightness-90 shadow-2xl"
          >
            <img
              src={imgSrc}
              alt=""
              className="w-full h-full object-cover rounded-3xl"
              loading="eager"
            />
          </div>
        ))}
      </motion.div>

      {/* Dark Glassmorphic Vignette Overlay for Crisp Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/65 backdrop-blur-[2px] z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/80 z-10" />

    </div>
  );
};

export default HeroBackgroundSlider;
