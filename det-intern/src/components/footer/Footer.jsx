import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import Container from '../common/Container';
import FooterColumn from './FooterColumn';
import SocialIcons from './SocialIcons';

/**
 * Footer Component
 * Multi-column dark navy footer with school branding, navigation, information, contact details, and bottom copyright bar.
 */
const Footer = () => {
  return (
    <footer className="bg-primary text-slate-300 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 space-y-12">
        
        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: School Logo, Description & Social Icons */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-accent flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-white text-lg tracking-tight leading-none group-hover:text-accent transition-colors">
                  EXCELLENCE
                </span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase leading-snug">
                  International School • Aligarh
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              Empowering young minds with world-class CBSE education, state-of-the-art facilities, and strong moral values in Aligarh.
            </p>

            <div className="pt-2">
              <SocialIcons />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <FooterColumn title="Quick Links">
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Academics', path: '/academics' },
                { label: 'Facilities', path: '/facilities' },
                { label: 'Admissions', path: '/admissions' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-accent transition-colors duration-200 inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 3: Useful Information */}
          <FooterColumn title="Useful Information">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-xs">School Hours</span>
                  <span className="text-xs text-slate-300">Mon – Sat: 8:00 AM – 2:00 PM</span>
                </div>
              </li>
              <li>
                <Link to="/admissions" className="text-slate-300 hover:text-accent transition-colors duration-200 text-xs">
                  • Admission Procedure & Guidelines
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-slate-300 hover:text-accent transition-colors duration-200 text-xs">
                  • CBSE Curriculum Standards
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-accent transition-colors duration-200 text-xs">
                  • Mandatory Public Disclosures
                </Link>
              </li>
            </ul>
          </FooterColumn>

          {/* Column 4: Contact Details */}
          <FooterColumn title="Contact Details">
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+917055582117"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs">+91 7055582117</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:rahulexcellence85@gmail.com"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-accent transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs truncate">rahulexcellence85@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@excellenceinternationalschool.com"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-accent transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs truncate">info@excellenceinternationalschool.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">
                    Excellence International School, Aligarh, Uttar Pradesh, India
                  </span>
                </div>
              </li>
            </ul>
          </FooterColumn>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Excellence International School, Aligarh. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>for Excellence International School</span>
          </p>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
