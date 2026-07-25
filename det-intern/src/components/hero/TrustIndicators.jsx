import React from 'react';
import { UserCheck, ShieldCheck, Sparkles } from 'lucide-react';

const trustItems = [
  {
    icon: UserCheck,
    text: 'Experienced Faculty',
  },
  {
    icon: ShieldCheck,
    text: 'Safe & Secure Campus',
  },
  {
    icon: Sparkles,
    text: 'Holistic Development',
  },
];

/**
 * TrustIndicators Component
 * Renders a compact row of trust highlights below the hero CTA buttons.
 */
const TrustIndicators = () => {
  return (
    <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8">
      {trustItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div key={index} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-accent/15 text-accent-hover flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-neutral-700">
              {item.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TrustIndicators;
