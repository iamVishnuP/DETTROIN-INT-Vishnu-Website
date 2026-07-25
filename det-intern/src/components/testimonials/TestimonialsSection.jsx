import React from 'react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

import Container from '../common/Container';
import SectionBadge from '../common/SectionBadge';
import TestimonialCard from './TestimonialCard';
import AdmissionCTA from './AdmissionCTA';

// Local parent images from src/assets/images
import parent1 from '../../assets/images/parent1.webp';
import parent7 from '../../assets/images/parent7.webp';
import parent12 from '../../assets/images/parent12.webp';

const testimonialsData = [
  {
    image: parent1,
    role: 'Parent of Class V Student',
    testimonial: 'The dedicated faculty and supportive atmosphere at Excellence International School have helped my child build immense confidence, strong study habits, and a genuine passion for learning.',
    rating: 5,
  },
  {
    image: parent7,
    role: 'Parent of Class VIII Student',
    testimonial: "As a parent, child safety and moral values are paramount. The school's secured campus environment, GPRS bus transport, and focus on holistic character growth give us total peace of mind.",
    rating: 5,
  },
  {
    image: parent12,
    role: 'Parent of Class III Student',
    testimonial: 'From interactive smart classrooms to sports and activity programs, Excellence International School provides a well-rounded environment where children truly enjoy coming to school every day.',
    rating: 5,
  },
];

const trustPoints = [
  'Safe & Secure Campus',
  'Experienced & Caring Faculty',
  'Student-Centered CBSE Learning',
  'Modern Infrastructure & Labs',
];

/**
 * TestimonialsSection Component
 * Showcases parent feedback cards, key trust highlights, and the Admission Call-To-Action banner.
 */
const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <Container className="space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionBadge icon={MessageSquare}>What Parents Say</SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            Trusted by Families. Focused on Student Success.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Discover why parents across Aligarh choose Excellence International School for their children's academic foundation and overall character growth.
          </p>
        </div>

        {/* Testimonials Grid / Mobile Swipe Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, index) => (
            <TestimonialCard
              key={index}
              image={item.image}
              role={item.role}
              testimonial={item.testimonial}
              rating={item.rating}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Why Parents Trust Us Compact Highlights Row */}
        <div className="py-6 px-8 bg-white rounded-2xl border border-slate-200/80 shadow-subtle flex flex-wrap items-center justify-around gap-4 sm:gap-6 text-center">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Full-width Admission Call-To-Action Banner */}
        <AdmissionCTA />

      </Container>
    </section>
  );
};

export default TestimonialsSection;
