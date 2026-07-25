import React from 'react';
import AboutSection from '../components/about/AboutSection';
import WhyChooseSection from '../components/why-choose/WhyChooseSection';

/**
 * Dedicated About Page (/about route)
 */
const About = () => {
  return (
    <div className="flex-grow">
      <AboutSection />
      <WhyChooseSection />
    </div>
  );
};

export default About;
