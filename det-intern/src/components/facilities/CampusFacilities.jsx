import React from 'react';
import { Building, Monitor, FlaskConical, Cpu, BookOpen, Trophy, ShieldCheck } from 'lucide-react';
import Container from '../common/Container';
import SectionBadge from '../common/SectionBadge';
import FacilityCard from './FacilityCard';

// Local images from src/assets/images
import facility1 from '../../assets/images/dev-approach1.webp';
import facility2 from '../../assets/images/dev-approach2.webp';
import facility3 from '../../assets/images/dev-approach13.webp';
import facility4 from '../../assets/images/dev-approach14.webp';
import facility5 from '../../assets/images/why they best1.webp';
import facility6 from '../../assets/images/why they best2.webp';

const facilitiesData = [
  {
    image: facility2,
    title: 'Interactive Smart Classrooms',
    icon: Monitor,
    description: 'Equipped with interactive digital smart boards, multimedia tools, and ergonomic seating for immersive modern learning.',
  },
  {
    image: facility1,
    title: 'Science & Robotics Labs',
    icon: FlaskConical,
    description: 'Well-equipped Physics, Chemistry, and Biology laboratories allowing students to conduct hands-on experiments safely.',
  },
  {
    image: facility3,
    title: 'Computer & IT Suite',
    icon: Cpu,
    description: 'Contemporary computer labs with high-speed connectivity, fostering digital literacy, coding, and academic research skills.',
  },
  {
    image: facility6,
    title: 'Library & Learning Resource Center',
    icon: BookOpen,
    description: 'An extensive collection of textbooks, reference volumes, educational journals, and quiet spaces designed to ignite reading habits.',
  },
  {
    image: facility5,
    title: 'Sports & Athletic Arena',
    icon: Trophy,
    description: 'Dedicated sports grounds and indoor activity areas promoting physical fitness, teamwork, sportsmanship, and athletics.',
  },
  {
    image: facility4,
    title: 'Safe Fleet Transport & CCTV Security',
    icon: ShieldCheck,
    description: 'GPRS-tracked fleet of safe school buses supervised by trained attendants, backed by 24/7 campus CCTV surveillance.',
  },
];

/**
 * CampusFacilities Component
 * Showcase section displaying the modern infrastructure and learning amenities at Excellence International School.
 */
const CampusFacilities = () => {
  return (
   
    <section id="facilities" className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
      
      {/* Soft Decorative Glow Background Elements */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <SectionBadge icon={Building}>Campus Facilities</SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            Designed to Inspire Learning Every Day
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Our modern infrastructure provides students with an enriching environment where academic pursuits, digital innovation, physical fitness, and child safety thrive together.
          </p>
        </div>

        {/* 6-Card 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilitiesData.map((facility, index) => (
            <FacilityCard
              key={index}
              image={facility.image}
              title={facility.title}
              icon={facility.icon}
              description={facility.description}
              delay={index * 0.1}
            />
          ))}
        </div>

      </Container>
    </section>
  
  );
};

export default CampusFacilities;
