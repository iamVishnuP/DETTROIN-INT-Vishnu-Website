import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * ContactCard Component
 * Displays a single contact detail card (Phone, Email, Address, School Hours).
 */
const ContactCard = ({ icon: Icon, title, content, link, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  const contentElement = link ? (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : '_self'}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-sm sm:text-base text-neutral-600 hover:text-secondary font-medium transition-colors duration-200 block break-words"
    >
      {content}
    </a>
  ) : (
    <p className="text-sm sm:text-base text-neutral-600 font-medium leading-relaxed break-words">
      {content}
    </p>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-subtle hover:shadow-premium transition-all duration-300 flex items-start gap-4 group"
    >
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-colors duration-300 flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>

      <div className="space-y-1 min-w-0 flex-1">
        <h4 className="font-heading font-bold text-primary text-base sm:text-lg tracking-tight">
          {title}
        </h4>
        {contentElement}
      </div>
    </motion.div>
  );
};

export default ContactCard;
