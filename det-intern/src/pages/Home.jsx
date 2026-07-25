import React from 'react';
import Hero from '../components/hero/Hero';
import AboutSection from '../components/about/AboutSection';

/**
 * Home Page
 * Renders Hero (Commit 3) and AboutSection (Commit 4).
 * Future homepage sections will be appended below in upcoming commits.
 */
const Home = () => {
  return (
    <div className="flex-grow">
      <Hero />
      <AboutSection />
    </div>
  );
};

export default Home;
