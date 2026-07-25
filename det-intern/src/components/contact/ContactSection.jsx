import React from 'react';
import { PhoneCall, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Container from '../common/Container';
import SectionBadge from '../common/SectionBadge';
import ContactCard from './ContactCard';
import AdmissionForm from './AdmissionForm';
import MapSection from './MapSection';
import SocialLinks from './SocialLinks';

/**
 * ContactSection Component
 * Main Contact & Admission Enquiry section combining contact detail cards,
 * interactive frontend enquiry form, social links, and Google Map.
 */
const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <Container className="space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionBadge icon={PhoneCall}>Contact Us</SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            We're Here to Help You Begin Your Child's Journey
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Reach out to our admissions counselor or visit our campus in Aligarh. We are eager to answer your questions and welcome your family to our community.
          </p>
        </div>

        {/* 2-Column Main Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Social Channels */}
          <div className="lg:col-span-5 space-y-4">
            <ContactCard
              icon={Phone}
              title="Call Us Directly"
              content="+91 7055582117"
              link="tel:+917055582117"
              delay={0.1}
            />

            <ContactCard
              icon={Mail}
              title="Send Us An Email"
              content="info@excellenceinternationalschool.com"
              link="mailto:info@excellenceinternationalschool.com"
              delay={0.2}
            />

            <ContactCard
              icon={MapPin}
              title="Campus Location"
              content="Excellence International School, Aligarh, Uttar Pradesh, India"
              delay={0.3}
            />

            <ContactCard
              icon={Clock}
              title="Office Working Hours"
              content="Monday – Saturday: 8:00 AM – 2:00 PM (Sunday Closed)"
              delay={0.4}
            />

            {/* Official Social Links */}
            <div className="pt-2">
              <SocialLinks />
            </div>
          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <AdmissionForm />
          </div>

        </div>

        {/* Embedded Google Map Section */}
        <div className="pt-4">
          <MapSection />
        </div>

      </Container>
    </section>
  );
};

export default ContactSection;
