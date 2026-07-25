import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * GalleryLightbox Component
 * Fullscreen interactive image viewer with keyboard navigation and body scroll lock.
 */
const GalleryLightbox = ({ isOpen, items = [], selectedIndex = 0, onClose, onPrev, onNext }) => {
  const currentItem = items[selectedIndex];

  // Handle keyboard navigation (ESC, Left, Right Arrow Keys)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Lightbox Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-50 w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Campus Gallery Lightbox"
          >
            {/* Top Bar: Counter & Close Button */}
            <div className="w-full flex items-center justify-between text-white pb-3 px-2">
              <span className="text-xs sm:text-sm font-medium tracking-wider text-slate-300">
                {selectedIndex + 1} of {items.length}
              </span>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Close Lightbox Modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Preview Image Container */}
            <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 border border-white/10">
              <img
                src={currentItem.image}
                alt={currentItem.caption || 'Excellence International School Campus Photo'}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />

              {/* Left Navigation Arrow Button */}
              <button
                onClick={onPrev}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-accent hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent shadow-lg"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right Navigation Arrow Button */}
              <button
                onClick={onNext}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-accent hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent shadow-lg"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            {currentItem.caption && (
              <div className="mt-4 text-center">
                <h3 className="text-base sm:text-lg font-heading font-bold text-white tracking-wide">
                  {currentItem.caption}
                </h3>
                {currentItem.category && (
                  <p className="text-xs text-accent font-medium mt-0.5">
                    {currentItem.category}
                  </p>
                )}
              </div>
            )}
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};

export default GalleryLightbox;
