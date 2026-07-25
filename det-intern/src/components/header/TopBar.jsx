import React from 'react';
import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Container from '../common/Container';

/**
 * TopBar Component
 * Displays school contact details and social media channels.
 * Responsive: Hides extra info on mobile to maintain clean header ratio.
 */
const TopBar = () => {
  return (
    <div className="bg-primary text-slate-300 text-xs py-2 border-b border-white/10 relative z-50">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          
          {/* Left Side: Direct Contact Details */}
          <div className="flex items-center flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 text-slate-300">
            {/* Phone */}
            <a
              href="tel:+917055582117"
              className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200 focus:outline-none focus:text-accent"
              aria-label="Call Excellence International School"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span className="font-medium tracking-wide">+91 7055582117</span>
            </a>

            <span className="hidden md:inline text-slate-600">|</span>

            {/* Email 1 */}
            <a
              href="mailto:rahulexcellence85@gmail.com"
              className="hidden md:flex items-center gap-1.5 hover:text-accent transition-colors duration-200 focus:outline-none focus:text-accent"
              aria-label="Email Rahul Excellence"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>rahulexcellence85@gmail.com</span>
            </a>

            <span className="hidden lg:inline text-slate-600">|</span>

            {/* Email 2 */}
            <a
              href="mailto:info@excellenceinternationalschool.com"
              className="hidden lg:flex items-center gap-1.5 hover:text-accent transition-colors duration-200 focus:outline-none focus:text-accent"
              aria-label="Email Excellence International School Info"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>info@excellenceinternationalschool.com</span>
            </a>
          </div>

          {/* Right Side: Social Channels */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-400 font-medium text-[11px] uppercase tracking-wider">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/ExcllenceInternationalSchool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-accent hover:scale-110 transition-all duration-200 p-0.5 rounded focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label="Visit Excellence International School Facebook Page"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.instagram.com/excellence_school_aligarh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-accent hover:scale-110 transition-all duration-200 p-0.5 rounded focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label="Visit Excellence International School Instagram Page"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.youtube.com/@excellenceschoolinternational"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-accent hover:scale-110 transition-all duration-200 p-0.5 rounded focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label="Visit Excellence International School YouTube Channel"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default TopBar;
