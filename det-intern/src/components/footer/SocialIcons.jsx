import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

/**
 * SocialIcons Component
 * Displays social media channels with hover scaling and accent highlight.
 */
const SocialIcons = () => {
  const socials = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/ExcllenceInternationalSchool',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/excellence_school_aligarh',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@excellenceschoolinternational',
      icon: Youtube,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socials.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent text-slate-300 hover:text-primary flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={`Visit Excellence International School on ${item.name}`}
          >
            <IconComponent className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
