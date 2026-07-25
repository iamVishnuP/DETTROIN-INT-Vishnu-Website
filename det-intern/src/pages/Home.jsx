import React from 'react';
import Hero from '../components/hero/Hero';
import AboutSection from '../components/about/AboutSection';
import WhyChooseSection from '../components/why-choose/WhyChooseSection';

/**
 * Home Page
 * Renders Hero (Commit 3), About (Commit 4), and WhyChooseSection (Commit 5).
 * Future homepage sections will be appended below in upcoming commits.
 */
const Home = () => {
  return (
    <div className="flex-grow">
      <Hero />
      <AboutSection />
      <WhyChooseSection />
    </div>
  );
};

export default Home;
