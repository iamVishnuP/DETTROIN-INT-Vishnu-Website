import React from 'react';
import Hero from '../components/hero/Hero';
import AboutSection from '../components/about/AboutSection';
import WhyChooseSection from '../components/why-choose/WhyChooseSection';
import AcademicPrograms from '../components/academics/AcademicPrograms';
import CampusFacilities from '../components/facilities/CampusFacilities';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import ContactSection from '../components/contact/ContactSection';

/**
 * Home Page
 * Renders Hero, About, WhyChoose, AcademicPrograms, CampusFacilities, TestimonialsSection, and ContactSection.
 */
const Home = () => {
  return (
    <div className="flex-grow">
      <Hero />
      <AboutSection />
      <WhyChooseSection />
      <AcademicPrograms />
      <CampusFacilities />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
