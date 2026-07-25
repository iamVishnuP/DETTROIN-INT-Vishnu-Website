import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

/**
 * FloatingWhatsApp Component
 * Floating WhatsApp button with hover tooltip for instant admissions enquiry.
 */
const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = 'https://wa.me/917055582117?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Excellence%20International%20School.';

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center">
      {/* Hover Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:block ml-3 px-3 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold shadow-lg whitespace-nowrap border border-white/10"
          >
            Chat with Admissions
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="p-3 sm:p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent flex items-center justify-center group"
        aria-label="Chat with Excellence International School Admissions on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
