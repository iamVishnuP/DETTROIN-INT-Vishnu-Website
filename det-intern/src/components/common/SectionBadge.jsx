import React from 'react';

/**
 * Reusable SectionBadge Component
 * Standardized section category indicator tag across all homepage sections.
 */
const SectionBadge = ({ children, icon: Icon, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-semibold tracking-wider uppercase ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5 text-accent" />}
      <span>{children}</span>
    </div>
  );
};

export default SectionBadge;
