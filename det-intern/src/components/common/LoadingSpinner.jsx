import React from 'react';
import { GraduationCap } from 'lucide-react';

/**
 * LoadingSpinner Component
 * Elegant loading fallback for Suspense route transitions.
 */
const LoadingSpinner = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[60vh] py-16 px-4">
      <div className="relative flex items-center justify-center">
        {/* Animated Outer Ring */}
        <div className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-secondary animate-spin" />
        {/* Inner Emblem */}
        <div className="absolute text-accent">
          <GraduationCap className="w-6 h-6" />
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold text-primary tracking-wide">
        Loading Excellence...
      </p>
    </div>
  );
};

export default LoadingSpinner;
