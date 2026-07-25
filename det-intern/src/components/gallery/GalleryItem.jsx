import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

/**
 * GalleryItem Component
 * Individual gallery thumbnail card with hover zoom effect and caption overlay.
 */
const GalleryItem = ({ item, onClick, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden bg-slate-100 shadow-subtle hover:shadow-premium cursor-pointer group border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary"
      tabIndex={0}
      role="button"
      aria-label={`View photo: ${item.caption}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Thumbnail Image */}
      <div className="relative h-60 sm:h-64 lg:h-72 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.caption}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

        {/* Zoom Icon Emblem in Center */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-accent flex items-center justify-center shadow-lg border border-white/30">
            <Maximize2 className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Bottom Caption Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          {item.category && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-accent block mb-0.5">
              {item.category}
            </span>
          )}
          <h4 className="text-sm sm:text-base font-heading font-bold text-white leading-snug">
            {item.caption}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
