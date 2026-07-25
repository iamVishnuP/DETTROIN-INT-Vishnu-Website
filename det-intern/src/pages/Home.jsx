import React from 'react';
import Hero from '../components/hero/Hero';
import AboutSection from '../components/about/AboutSection';
import WhyChooseSection from '../components/why-choose/WhyChooseSection';
import AcademicPrograms from '../components/academics/AcademicPrograms';

/**
 * Home Page
 * Renders Hero (Commit 3), About (Commit 4), WhyChoose (Commit 5), and AcademicPrograms (Commit 6).
 * Future homepage sections will be appended below in upcoming commits.
 */
const Home = () => {
  return (
    <div className="flex-grow">
      <Hero />
      <AboutSection />
      <WhyChooseSection />
      <AcademicPrograms />
    </div>
  );
};

export default Home;
