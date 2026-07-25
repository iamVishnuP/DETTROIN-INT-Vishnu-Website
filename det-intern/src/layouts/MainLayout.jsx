import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ScrollToTop from '../components/footer/ScrollToTop';
import FloatingWhatsApp from '../components/footer/FloatingWhatsApp';

/**
 * Main Layout Component
 * Integrates Header, Page Content, Footer, and Floating Utilities.
 */
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-800 font-body relative">
      {/* Header System (TopBar + Sticky Navbar) */}
      <Header />
      
      {/* Dynamic Page Content */}
      <main className="flex-grow flex flex-col">
        {children || <Outlet />}
      </main>

      {/* Website Footer */}
      <Footer />

      {/* Floating Utilities */}
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
};

export default MainLayout;
