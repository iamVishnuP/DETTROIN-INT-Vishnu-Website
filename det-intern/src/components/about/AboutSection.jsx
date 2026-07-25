import React from 'react';
import Container from '../common/Container';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';

/**
 * AboutSection Component
 * Main About, Vision & Mission Section on the Homepage.
 */
const AboutSection = () => {
  return (
    <section id="about" className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Campus Image Composition */}
          <div className="lg:col-span-5 order-1 lg:order-1">
            <AboutImage />
          </div>

          {/* Right Column: Heading, Copy, Vision & Mission Cards */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <AboutContent />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
