import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight, GraduationCap } from 'lucide-react';
import Button from '../common/Button';

/**
 * MobileMenu Component
 * Slide-in responsive navigation drawer with backdrop blur and body scroll lock.
 */
const MobileMenu = ({ isOpen, onClose, navItems }) => {
  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Slide-in Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] sm:w-[360px] bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-accent shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-primary text-base leading-tight">
                    EXCELLENCE
                  </h2>
                  <p className="text-[10px] text-neutral-500 font-medium tracking-wider uppercase">
                    International School
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-full text-neutral-500 hover:text-primary hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="px-5 py-6 flex-grow space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 mb-3">
                Navigation
              </p>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-secondary/10 text-secondary font-semibold'
                        : 'text-neutral-700 hover:bg-slate-50 hover:text-secondary'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </NavLink>
              ))}

              {/* CTA Button in Drawer */}
              <div className="pt-6">
                <NavLink to="/admissions" onClick={onClose} className="block w-full">
                  <Button variant="accent" size="lg" className="w-full shadow-md font-bold">
                    Apply Now
                  </Button>
                </NavLink>
              </div>
            </div>

            {/* Drawer Footer: Contact & Social Info */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-4 text-xs">
              <div className="space-y-2">
                <p className="font-semibold text-primary uppercase text-[11px] tracking-wider">Contact Info</p>
                <a href="tel:+917055582117" className="flex items-center gap-2 text-neutral-600 hover:text-secondary">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>+91 7055582117</span>
                </a>
                <a href="mailto:info@excellenceinternationalschool.com" className="flex items-center gap-2 text-neutral-600 hover:text-secondary truncate">
                  <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span className="truncate">info@excellenceinternationalschool.com</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-200/60">
                <span className="text-slate-500 text-[11px]">Follow Us:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/ExcllenceInternationalSchool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-white text-primary hover:bg-secondary hover:text-white shadow-sm transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/excellence_school_aligarh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-white text-primary hover:bg-secondary hover:text-white shadow-sm transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/@excellenceschoolinternational"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-white text-primary hover:bg-secondary hover:text-white shadow-sm transition-all"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
