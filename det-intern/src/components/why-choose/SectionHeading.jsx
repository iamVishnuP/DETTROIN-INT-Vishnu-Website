import React from 'react';
import { Sparkles } from 'lucide-react';
import SectionBadge from '../common/SectionBadge';

/**
 * SectionHeading Component
 * Centered section header for section badge, primary title, and introductory paragraph.
 */
const SectionHeading = ({ badgeText = 'Why Choose Us', title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
      <SectionBadge icon={Sparkles}>{badgeText}</SectionBadge>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
