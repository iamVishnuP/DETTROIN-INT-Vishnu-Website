import React from 'react';
import Container from '../common/Container';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

/**
 * Hero Component
 * Main Landing Hero Section featuring rich typography, local school imagery,
 * interactive CTA buttons, and floating highlight cards.
 */
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/60 overflow-hidden py-10 sm:py-14 lg:py-20">
      
      {/* Decorative Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, CTAs, Trust Indicators */}
          <div className="lg:col-span-7">
            <HeroContent />
          </div>

          {/* Right Column: Hero Photography & Floating Badges */}
          <div className="lg:col-span-5">
            <HeroImage />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;
