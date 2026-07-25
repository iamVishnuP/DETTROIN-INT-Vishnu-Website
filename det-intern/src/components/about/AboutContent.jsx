import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Rocket } from 'lucide-react';
import SectionBadge from '../common/SectionBadge';
import VisionMissionCard from './VisionMissionCard';

/**
 * AboutContent Component
 * Right-column text, heading, concise description paragraphs, and Vision/Mission cards.
 */
const AboutContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="space-y-6 sm:space-y-8"
    >
      {/* Section Badge */}
      <motion.div variants={itemVariants}>
        <SectionBadge icon={BookOpen}>About Our School</SectionBadge>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight"
      >
        Inspiring Excellence Through{' '}
        <span className="bg-gradient-to-r from-secondary to-blue-600 bg-clip-text text-transparent">
          Modern Education
        </span>
      </motion.h2>

      {/* Concise Description Copy */}
      <motion.div variants={itemVariants} className="space-y-4 text-neutral-600 text-base sm:text-lg font-normal leading-relaxed">
        <p>
          Excellence International School, Aligarh is dedicated to cultivating intellectual curiosity, moral integrity, and lifelong learning in a supportive environment.
        </p>
        <p className="text-sm sm:text-base text-neutral-500">
          Our learner-centric approach combines academic rigor with character building, ensuring every student develops the confidence and skills required to thrive globally.
        </p>
      </motion.div>

      {/* Vision & Mission Cards Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <VisionMissionCard
          icon={Target}
          title="Our Vision"
          description="To empower young minds to become visionary leaders, innovative thinkers, and compassionate global citizens."
        />
        <VisionMissionCard
          icon={Rocket}
          title="Our Mission"
          description="To deliver transformative CBSE education through modern pedagogy, state-of-the-art facilities, and value-based guidance."
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
