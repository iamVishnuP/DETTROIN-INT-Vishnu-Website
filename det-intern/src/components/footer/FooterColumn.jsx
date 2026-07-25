import React from 'react';

/**
 * FooterColumn Component
 * Reusable column wrapper for organizing footer links and details.
 */
const FooterColumn = ({ title, children, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {title && (
        <h3 className="font-heading font-bold text-white text-base tracking-wider uppercase border-b border-white/10 pb-2">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default FooterColumn;
