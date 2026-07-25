import React from 'react';
import Hero from '../components/hero/Hero';
import AboutSection from '../components/about/AboutSection';
import WhyChooseSection from '../components/why-choose/WhyChooseSection';
import AcademicPrograms from '../components/academics/AcademicPrograms';
import CampusFacilities from '../components/facilities/CampusFacilities';
import GallerySection from '../components/gallery/GallerySection';

/**
 * Home Page
 * Renders Hero (Commit 3), About (Commit 4), WhyChoose (Commit 5), AcademicPrograms (Commit 6), CampusFacilities (Commit 7), and GallerySection (Commit 8).
 * Future homepage sections will be appended below in upcoming commits.
 */
const Home = () => {
  return (
    <div className="flex-grow">
      <Hero />
      <AboutSection />
      <WhyChooseSection />
      <AcademicPrograms />
      <CampusFacilities />
      <GallerySection />
    </div>
  );
};

export default Home;
