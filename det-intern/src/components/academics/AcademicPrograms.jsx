import React from 'react';
import { Sparkles, BookOpen, Compass, GraduationCap, BookMarked } from 'lucide-react';
import Container from '../common/Container';
import SectionBadge from '../common/SectionBadge';
import ProgramCard from './ProgramCard';

// Local images from src/assets/images
import stage1 from '../../assets/images/acdemy-stage1.webp';
import stage2 from '../../assets/images/acdemy-stage2.webp';
import stage3 from '../../assets/images/acdemy-stage3.webp';
import stage4 from '../../assets/images/acdemy-stage4.webp';

const programsData = [
  {
    image: stage1,
    title: 'Pre-Primary Foundation',
    gradeRange: 'Nursery – UKG',
    icon: Sparkles,
    description: 'Play-based and sensory learning focused on early literacy, motor development, creative arts, and social adaptability.',
  },
  {
    image: stage2,
    title: 'Primary Education',
    gradeRange: 'Class I – V',
    icon: BookOpen,
    description: 'Building core competencies in Mathematics, Science, Environmental Studies, and Languages through interactive discovery.',
  },
  {
    image: stage3,
    title: 'Middle School Program',
    gradeRange: 'Class VI – VIII',
    icon: Compass,
    description: 'Fostering critical thinking, scientific inquiry, digital skills, and collaborative projects in preparation for higher studies.',
  },
  {
    image: stage4,
    title: 'Secondary Education (CBSE)',
    gradeRange: 'Class IX – X',
    icon: GraduationCap,
    description: 'Rigorous CBSE academic preparation with specialized subject focus, comprehensive evaluations, and board exam readiness.',
  },
];

/**
 * AcademicPrograms Component
 * Section showcasing educational stages offered at Excellence International School Aligarh.
 */
const AcademicPrograms = () => {
  return (
    <section id="academics" className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <SectionBadge icon={BookMarked}>Academic Programs</SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            Nurturing Excellence at Every Stage of Learning
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Our structured CBSE learning pathway is thoughtfully designed to support your child’s cognitive, emotional, and academic development from early childhood through secondary graduation.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programsData.map((program, index) => (
            <ProgramCard
              key={index}
              image={program.image}
              title={program.title}
              gradeRange={program.gradeRange}
              icon={program.icon}
              description={program.description}
              delay={index * 0.1}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default AcademicPrograms;
