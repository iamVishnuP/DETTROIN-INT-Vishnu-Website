import React from 'react';
import Container from '../common/Container';
import HeroContent from './HeroContent';
import HeroBackgroundSlider from './HeroBackgroundSlider';

/**
 * Hero Component
 * Premium hero section featuring a continuous horizontal background image slider (left to right)
 * behind frosted glass text and high-contrast typography.
 */
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-white py-16 sm:py-24 lg:py-28 min-h-[85vh] flex items-center">
      
      {/* Background Moving Images Track (Left to Right) */}
      <HeroBackgroundSlider />

      {/* Main Hero Content Container */}
      <Container className="relative z-20">
        <div className="max-w-3xl">
          <HeroContent />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
