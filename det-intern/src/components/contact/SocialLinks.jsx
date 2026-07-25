import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

/**
 * SocialLinks Component
 * Renders official social media links with hover animations.
 */
const SocialLinks = () => {
  const socials = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/ExcllenceInternationalSchool',
      icon: Facebook,
      bgColor: 'hover:bg-blue-600',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/excellence_school_aligarh',
      icon: Instagram,
      bgColor: 'hover:bg-pink-600',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@excellenceschoolinternational',
      icon: Youtube,
      bgColor: 'hover:bg-red-600',
    },
  ];

  return (
    <div className="pt-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
        Connect With Us
      </p>
      <div className="flex items-center gap-3">
        {socials.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-xl bg-white border border-slate-200 text-primary flex items-center justify-center shadow-subtle hover:text-white ${item.bgColor} hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary`}
              aria-label={`Visit Excellence International School on ${item.name}`}
            >
              <IconComponent className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
