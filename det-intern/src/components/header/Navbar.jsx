import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, GraduationCap } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import NavigationLink from './NavigationLink';
import MobileMenu from './MobileMenu';

// TODO: Import local school logo from src/assets/images once logo image filename is finalized
// Example: import schoolLogo from '../../assets/images/logo.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Contact', path: '/contact' },
];

/**
 * Navbar Component
 * Premium sticky navigation header with scroll-reactive padding and shadow effects.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor window scroll to adjust navbar height and elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
          : 'bg-white py-4 sm:py-5 border-b border-slate-100/70 shadow-sm'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          
          {/* Logo Branding */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg group"
            aria-label="Excellence International School Home"
          >
            {/* Logo Emblem Placeholder / Shield Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary text-accent flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            {/* School Name & Tagline */}
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-primary text-base sm:text-lg lg:text-xl tracking-tight leading-none group-hover:text-secondary transition-colors duration-200">
                EXCELLENCE
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-500 tracking-wider uppercase leading-snug">
                International School • Aligarh
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <NavigationLink key={item.path} to={item.path}>
                {item.label}
              </NavigationLink>
            ))}
          </div>

          {/* Desktop Call To Action (Apply Now) */}
          <div className="hidden lg:flex items-center">
            <NavLink to="/admissions">
              <Button
                variant="accent"
                size="md"
                className="font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                Apply Now
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-primary hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

        </nav>
      </Container>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
};

export default Navbar;
