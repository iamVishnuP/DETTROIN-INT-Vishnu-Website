import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * NavigationLink Component
 * Modern navigation item with smooth active underline indicator.
 */
const NavigationLink = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative py-1 text-sm lg:text-base font-medium transition-colors duration-200 focus:outline-none focus:text-secondary group ${
          isActive ? 'text-secondary font-semibold' : 'text-neutral-700 hover:text-secondary'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span>{children}</span>
          {/* Subtle animated underline effect */}
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full transform origin-left transition-transform duration-300 ease-out ${
              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}
          />
        </>
      )}
    </NavLink>
  );
};

export default NavigationLink;
