import React from 'react';
import {
  GraduationCap,
  Users,
  Building2,
  Sparkles,
  ShieldCheck,
  Cpu,
  Trophy,
  Clock,
  UserCheck,
  HeartHandshake
} from 'lucide-react';

import Container from '../common/Container';
import SectionHeading from './SectionHeading';
import FeatureCard from './FeatureCard';
import StatsCard from './StatsCard';

// 6 Core School Strength Features
const featuresData = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Comprehensive CBSE curriculum structured to foster deep conceptual understanding, critical thinking, and intellectual independence.',
  },
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: 'A team of highly qualified, compassionate educators dedicated to providing personalized mentorship and academic guidance.',
  },
  {
    icon: Building2,
    title: 'Modern Campus',
    description: 'State-of-the-art facilities including interactive smart classrooms, science laboratories, computer suites, and rich library resources.',
  },
  {
    icon: Sparkles,
    title: 'Holistic Development',
    description: 'Balanced education integrating sports, performing arts, public speaking, and ethical values alongside academic studies.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Environment',
    description: 'Round-the-clock campus security, comprehensive CCTV surveillance, and safe, reliable transport for total peace of mind.',
  },
  {
    icon: Cpu,
    title: 'Innovation & Tech',
    description: 'Empowering students with contemporary digital skills, modern educational technology, and hands-on practical learning.',
  },
];

// Key Performance Statistics Strip
const statsData = [
  {
    value: '100%',
    label: 'Academic Success',
    description: 'CBSE Curriculum Results',
    icon: Trophy,
  },
  {
    value: '10+',
    label: 'Years of Leadership',
    description: 'Educating in Aligarh',
    icon: Clock,
  },
  {
    value: '30+',
    label: 'Expert Educators',
    description: 'Dedicated Teaching Staff',
    icon: UserCheck,
  },
  {
    value: '100%',
    label: 'Safe Campus',
    description: 'Secured Environment',
    icon: HeartHandshake,
  },
];

/**
 * WhyChooseSection Component
 * Feature grid showcasing core strengths of Excellence International School
 * followed by a modern statistics strip.
 */
const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badgeText="Why Choose Us"
          title="Building Bright Futures Through Excellence"
          subtitle="Discover what makes Excellence International School the preferred choice for parents seeking exceptional education, holistic growth, and a nurturing environment."
        />

        {/* 6-Card Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Statistics Strip */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {statsData.map((stat, index) => (
              <StatsCard
                key={index}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                icon={stat.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default WhyChooseSection;
