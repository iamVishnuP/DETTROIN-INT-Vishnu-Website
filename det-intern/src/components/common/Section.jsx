import React from 'react';

/**
 * Reusable Section Component
 * Provides standard vertical padding and background colors for page sections.
 */
const Section = ({
  children,
  id,
  className = '',
  bg = 'default',
  ...props
}) => {
  const backgrounds = {
    default: 'bg-transparent',
    white: 'bg-white',
    light: 'bg-neutral-100',
    dark: 'bg-primary text-white',
  };

  return (
    <section
      id={id}
      className={`section-padding ${backgrounds[bg] || backgrounds.default} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
